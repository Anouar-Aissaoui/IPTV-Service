import { supabase } from "@/integrations/supabase/client";

export const uploadImage = async (imageUrl: string, fileName: string): Promise<string> => {
  try {
    // Fetch the image
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    // Upload to Supabase
    const { data, error } = await supabase.storage
      .from('images')
      .upload(`movies/${fileName}`, blob, {
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
      .getPublicUrl(`movies/${fileName}`);

    return publicUrl;
  } catch (error) {
    console.error('Error processing image:', error);
    return imageUrl; // Fallback to original URL
  }
};