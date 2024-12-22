import { supabase } from "@/integrations/supabase/client";

export const optimizeAndUploadImage = async (imageUrl: string, fileName: string): Promise<string> => {
  try {
    // Check if image is already in Supabase
    const { data: existingFile } = await supabase.storage
      .from('images')
      .list(`optimized/${fileName}`);

    if (existingFile && existingFile.length > 0) {
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(`optimized/${fileName}`);
      return publicUrl;
    }

    // Try different approaches to fetch the image
    const fetchOptions = [
      // Try with no-cors first
      { mode: 'no-cors' as RequestMode },
      // Then with cors and full headers
      {
        mode: 'cors' as RequestMode,
        headers: {
          'Accept': 'image/webp,image/jpeg,image/png,*/*',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        referrerPolicy: 'no-referrer' as ReferrerPolicy
      },
      // Finally try with minimal headers
      { headers: { 'Accept': '*/*' } }
    ];

    let response;
    let error;

    // Try each fetch option until one works
    for (const options of fetchOptions) {
      try {
        response = await fetch(imageUrl, options);
        if (response.ok) break;
      } catch (e) {
        error = e;
        continue;
      }
    }

    if (!response?.ok) {
      console.error('Failed to fetch image after all attempts:', error);
      return imageUrl; // Return original URL as fallback
    }

    const blob = await response.blob();
    
    // Upload to Supabase with retry logic
    const maxRetries = 3;
    let attempt = 0;
    let lastError;
    
    while (attempt < maxRetries) {
      try {
        const { data, error } = await supabase.storage
          .from('images')
          .upload(`optimized/${fileName}`, blob, {
            cacheControl: '31536000',
            upsert: true,
            contentType: blob.type
          });

        if (!error) {
          const { data: { publicUrl } } = supabase.storage
            .from('images')
            .getPublicUrl(`optimized/${fileName}`);
          return publicUrl;
        }

        lastError = error;
      } catch (err) {
        lastError = err;
      }

      attempt++;
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }

    console.error('Failed to upload after retries:', lastError);
    return imageUrl; // Fallback to original URL
  } catch (error) {
    console.error('Error in image optimization:', error);
    return imageUrl; // Fallback to original URL
  }
};