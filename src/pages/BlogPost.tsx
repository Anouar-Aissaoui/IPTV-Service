import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ArticleContent } from '@/components/blog/ArticleContent';
import SEOOptimizer from '@/components/seo/SEOOptimizer';
import { getKeywordsString } from '@/components/seo/Keywords';
import { ContentWrapper } from '@/components/layout/ContentWrapper';

const BlogPost = () => {
  const { data: article } = useQuery({
    queryKey: ['article', 'best-iptv-service-providers-subscriptions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', 'best-iptv-service-providers-subscriptions')
        .maybeSingle();

      if (error) throw error;
      return data;
    }
  });

  return (
    <>
      <SEOOptimizer
        title={article?.title || "Best IPTV Service Providers Guide"}
        description={article?.description || "Comprehensive guide to the best IPTV service providers in 2024"}
        keywords={getKeywordsString().split(', ')}
        type="article"
      />
      <ContentWrapper>
        <div className="max-w-4xl mx-auto py-12">
          <ArticleContent />
        </div>
      </ContentWrapper>
    </>
  );
};

export default BlogPost;