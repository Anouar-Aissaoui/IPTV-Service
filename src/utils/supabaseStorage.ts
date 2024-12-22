import { supabase } from "@/integrations/supabase/client";

export const uploadImage = async (imageUrl: string, fileName: string): Promise<string> => {
  try {
    // For local files, we need to fetch them differently
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    // Upload to Supabase
    const { data, error } = await supabase.storage
      .from('images')
      .upload(`uploads/${fileName}`, blob, {
        upsert: true,
        contentType: blob.type
      });

    if (error) {
      console.error('Error uploading image:', error);
      return ''; // Return empty string to trigger fallback
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(`uploads/${fileName}`);

    return publicUrl;
  } catch (error) {
    console.error('Error processing image:', error);
    return ''; // Return empty string to trigger fallback
  }
};