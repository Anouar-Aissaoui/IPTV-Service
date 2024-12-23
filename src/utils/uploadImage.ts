import { supabase } from "@/integrations/supabase/client";

export const uploadImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/upload-image`, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export const getImageUrl = (filePath: string) => {
  const { data } = supabase.storage
    .from('images')
    .getPublicUrl(filePath);
  
  return data.publicUrl;
};