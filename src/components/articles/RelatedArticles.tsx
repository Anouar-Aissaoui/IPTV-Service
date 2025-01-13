import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RelatedArticlesProps {
  articleIds: string[];
  currentArticleId: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articleIds, currentArticleId }) => {
  const { data: articles, isLoading } = useQuery({
    queryKey: ['related-articles', articleIds],
    queryFn: async () => {
      if (!articleIds?.length) return [];
      
      const { data, error } = await supabase
        .from('articles')
        .select('id, title, description, slug')
        .in('id', articleIds)
        .neq('id', currentArticleId)
        .limit(3);

      if (error) throw error;
      return data;
    },
    enabled: !!articleIds?.length,
  });

  if (!articles?.length || isLoading) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle className="text-lg">
                <Link 
                  to={`/article/${article.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {article.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 line-clamp-2">{article.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};