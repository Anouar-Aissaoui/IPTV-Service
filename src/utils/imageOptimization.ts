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

    // Fetch with appropriate headers and credentials
    const response = await fetch(imageUrl, {
      headers: {
        'Accept': 'image/webp,image/jpeg,image/png,*/*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      mode: 'cors',
      referrerPolicy: 'no-referrer'
    });
    
    if (!response.ok) {
      console.error('Failed to fetch image:', imageUrl);
      return imageUrl; // Fallback to original URL
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