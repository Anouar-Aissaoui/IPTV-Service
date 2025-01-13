import { supabase } from '../integrations/supabase/client';

export const generateUniqueSlug = async (baseSlug: string): Promise<string> => {
  const { data: existingArticle } = await supabase
    .from('articles')
    .select('slug')
    .eq('slug', baseSlug)
    .maybeSingle();

  if (!existingArticle) {
    return baseSlug;
  }

  // If slug exists, append timestamp to make it unique
  const timestamp = new Date().getTime();
  return `${baseSlug}-${timestamp}`;
};
