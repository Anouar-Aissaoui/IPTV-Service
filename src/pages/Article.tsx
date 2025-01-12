import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';
import { ArticleContent } from '@/components/article/ArticleContent';
import { ArticleSkeleton } from '@/components/article/ArticleSkeleton';

const Article = () => {
  const { slug } = useParams();

  const { data: article, isLoading } = useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <ArticleSkeleton />;
  if (!article) return <div>Article not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <OptimizedHelmet
        title={article.title}
        description={article.description}
        keywords={article.keywords}
        pageType="article"
        canonicalUrl={`https://www.iptvservice.site/article/${article.slug}`}
      />
      <Breadcrumbs />
      <ArticleContent article={article} />
    </div>
  );
};

export default Article;