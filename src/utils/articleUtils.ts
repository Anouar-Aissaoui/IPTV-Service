import { supabase } from "@/integrations/supabase/client";

export const getRelatedArticles = async (currentSlug: string, tags: string[]) => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .neq('slug', currentSlug)
    .contains('tags', tags)
    .limit(3);

  if (error) {
    console.error('Error fetching related articles:', error);
    return [];
  }

  return data;
};

export const incrementArticleViews = async (slug: string) => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('views_count')
      .eq('slug', slug)
      .single();

    if (error) throw error;

    const newViewCount = (data?.views_count || 0) + 1;

    const { error: updateError } = await supabase
      .from('articles')
      .update({ views_count: newViewCount })
      .eq('slug', slug);

    if (updateError) throw updateError;
  } catch (error) {
    console.error('Error incrementing article views:', error);
  }
};