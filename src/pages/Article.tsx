import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
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
        .single();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <ContentWrapper>
        <div className="container mx-auto px-4 py-12">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </ContentWrapper>
    );
  }

  if (!article) {
    return (
      <ContentWrapper>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold">Article not found</h1>
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
        <div className="container mx-auto px-4 py-12">
          <ArticleHeader article={article} />
          <ArticleContent content={article.content} />
          <RelatedArticles currentArticleId={article.id} relatedIds={article.related_articles} />
        </div>
      </ContentWrapper>
    </>
  );
};

export default Article;