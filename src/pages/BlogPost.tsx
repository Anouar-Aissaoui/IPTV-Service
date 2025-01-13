import React from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { ArticleContent } from '@/components/blog/ArticleContent';
import SEOOptimizer from '@/components/seo/SEOOptimizer';
import { getKeywordsString } from '@/components/seo/Keywords';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import { supabase } from '@/integrations/supabase/client';
import { getStructuredData } from '@/components/seo/StructuredData';
import Navigation from '@/components/navigation/Navigation';

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
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    gcTime: 10 * 60 * 1000,   // Garbage collect after 10 minutes
  });

  // Track page view for SEO metrics using useMutation
  const { mutate: trackPageView } = useMutation({
    mutationKey: ['seo-performance', 'track-view'],
    mutationFn: async () => {
      const { data, error } = await supabase
        .from('seo_performance_tracking')
        .upsert([
          {
            page_path: '/blog/best-iptv-service-providers-subscriptions',
            page_title: article?.title || 'Best IPTV Service Providers Guide',
            meta_description: article?.description,
            canonical_url: 'https://www.iptvservice.site/blog/best-iptv-service-providers-subscriptions',
            organic_traffic: 1,
            last_crawled: new Date().toISOString()
          }
        ], {
          onConflict: 'page_path'
        });

      if (error) throw error;
      return data;
    }
  });

  React.useEffect(() => {
    if (article) {
      trackPageView();
    }
  }, [article, trackPageView]);

  const structuredData = React.useMemo(() => {
    if (!article) return null;
    return getStructuredData('article', {
      title: article.title,
      description: article.description,
      image: 'https://www.iptvservice.site/iptv-subscription.jpg',
      datePublished: article.published_at,
      dateModified: article.updated_at,
      author: article.author
    });
  }, [article]);

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Blog', item: '/blog' },
    { name: 'IPTV Service Providers Guide', item: '/blog/best-iptv-service-providers-subscriptions' }
  ];

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOOptimizer
        title={article?.title || "Best IPTV Service Providers Guide 2024 | Premium Subscriptions"}
        description={article?.description || "Comprehensive guide to the best IPTV service providers in 2024. Compare features, pricing, and channel offerings. Find the perfect IPTV subscription for your needs."}
        keywords={getKeywordsString().split(', ')}
        type="article"
        canonicalUrl="https://www.iptvservice.site/blog/best-iptv-service-providers-subscriptions"
        imageUrl="/iptv-subscription.jpg"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <Navigation onScrollToSection={handleScrollToSection} />
      <ContentWrapper>
        <div className="max-w-4xl mx-auto py-12">
          <ArticleContent />
        </div>
      </ContentWrapper>
    </>
  );
};

export default BlogPost;