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

    // Fetch the image
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error('Failed to fetch image');
    const blob = await response.blob();

    // Upload to Supabase with compression
    const { data, error } = await supabase.storage
      .from('images')
      .upload(`optimized/${fileName}`, blob, {
        cacheControl: '31536000', // Cache for 1 year
        upsert: true,
        contentType: blob.type
      });

    if (error) {
      console.error('Error uploading image:', error);
      return imageUrl; // Fallback to original URL
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(`optimized/${fileName}`);

    return publicUrl;
  } catch (error) {
    console.error('Error optimizing image:', error);
    return imageUrl; // Fallback to original URL
  }
};