import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';
import { ArticleContent } from '@/components/articles/ArticleContent';
import { ArticleHeader } from '@/components/articles/ArticleHeader';
import { RelatedArticles } from '@/components/articles/RelatedArticles';
import { Skeleton } from '@/components/ui/skeleton';

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

  if (isLoading) {
    return (
      <ContentWrapper>
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-64" />
        </div>
      </ContentWrapper>
    );
  }

  if (!article) {
    return (
      <ContentWrapper>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <p className="text-gray-500">The article you're looking for doesn't exist.</p>
        </div>
      </ContentWrapper>
    );
  }

  return (
    <>
      <OptimizedHelmet
        title={article.title}
        description={article.description}
        keywords={article.keywords}
        type="website"
        imageUrl="/iptv-subscription.jpg"
      />
      <ContentWrapper>
        <Breadcrumbs />
        <ArticleHeader article={article} />
        <ArticleContent content={article.content} />
        <RelatedArticles articleIds={article.related_articles} currentArticleId={article.id} />
      </ContentWrapper>
    </>
  );
};

export default Article;