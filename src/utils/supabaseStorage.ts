import { supabase } from "@/integrations/supabase/client";

export const uploadImage = async (imageUrl: string, fileName: string): Promise<string> => {
  try {
    // Check if image already exists in storage
    const { data: existingFile } = await supabase.storage
      .from('images')
      .list(`brands/${fileName}`);

    if (existingFile && existingFile.length > 0) {
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(`brands/${fileName}`);
      return publicUrl;
    }

    // Attempt to fetch with appropriate headers
    const response = await fetch(imageUrl, {
      headers: {
        'Accept': 'image/webp,image/jpeg,image/png,*/*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch image: ${imageUrl}`);
      return imageUrl; // Return original URL as fallback
    }

    const blob = await response.blob();
    
    // Upload to Supabase with retry logic
    const maxRetries = 3;
    let attempt = 0;
    
    while (attempt < maxRetries) {
      const { data, error } = await supabase.storage
        .from('images')
        .upload(`brands/${fileName}`, blob, {
          upsert: true,
          contentType: blob.type
        });

      if (!error) {
        const { data: { publicUrl } } = supabase.storage
          .from('images')
          .getPublicUrl(`brands/${fileName}`);
        return publicUrl;
      }

      console.warn(`Upload attempt ${attempt + 1} failed:`, error);
      attempt++;
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt)); // Exponential backoff
    }

    console.error('Failed to upload image after retries');
    return imageUrl; // Return original URL as fallback
  } catch (error) {
    console.error('Error processing image:', error);
    return imageUrl; // Return original URL as fallback
  }
};