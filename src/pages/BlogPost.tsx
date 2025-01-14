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
      return {
        ...data,
        slug: 'best-iptv-service-providers-subscriptions',
        title: 'Best IPTV Service Providers Subscriptions: Complete Guide 2025',
        description: 'Discover the top IPTV service providers offering premium subscriptions in 2025. Compare features, pricing, and reliability to find the perfect IPTV subscription for your streaming needs.',
        content: data?.content || {},
        keywords: [
          'iptv subscription',
          'best iptv',
          'iptv subscribe',
          'iptv providers',
          'iptv provider',
          'bestiptv',
          'iptv subscriptions',
          'iptv service',
          'iptv sub',
          'iptv suppliers',
          'buy iptv',
          'iptv services',
          'iptv'
        ],
        meta_tags: {
          'og:type': 'article',
          'article:published_time': data?.published_at || new Date().toISOString(),
          'article:modified_time': data?.updated_at || new Date().toISOString(),
          'article:author': 'IPTV Service',
          'article:section': 'IPTV Guides',
          'article:tag': 'IPTV Subscription, Best IPTV Service, IPTV Provider'
        },
        author: 'IPTV Service',
        category: 'IPTV Guides',
        tags: ['IPTV', 'Streaming', 'Entertainment', 'TV Channels'],
        primary_keyword: 'best iptv service providers',
        secondary_keywords: [
          'premium iptv subscription',
          'reliable iptv service',
          'top iptv providers 2025'
        ],
        reading_time_minutes: 15
      };
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  // Track page view for SEO metrics
  const { mutate: trackPageView } = useMutation({
    mutationKey: ['seo-performance', 'track-view'],
    mutationFn: async () => {
      const { data, error } = await supabase
        .from('seo_metrics')
        .insert({
          route: '/blog/best-iptv-service-providers-subscriptions',
          title: article?.title || 'Best IPTV Service Providers Guide',
          description: article?.description,
          canonical_url: 'https://www.iptvservice.site/blog/best-iptv-service-providers-subscriptions',
          meta_tags: article?.meta_tags || {},
          structured_data: getStructuredData('article', {
            title: article?.title,
            description: article?.description,
            author: article?.author,
            datePublished: article?.published_at,
            dateModified: article?.updated_at
          })
        })
        .select()
        .single();

      if (error) {
        // If the record already exists, try to update it
        if (error.code === '23505') { // Unique violation error code
          const { data: updatedData, error: updateError } = await supabase
            .from('seo_metrics')
            .update({
              title: article?.title || 'Best IPTV Service Providers Guide',
              description: article?.description,
              meta_tags: article?.meta_tags || {},
              structured_data: getStructuredData('article', {
                title: article?.title,
                description: article?.description,
                author: article?.author,
                datePublished: article?.published_at,
                dateModified: article?.updated_at
              })
            })
            .eq('route', '/blog/best-iptv-service-providers-subscriptions')
            .select()
            .single();

          if (updateError) throw updateError;
          return updatedData;
        }
        throw error;
      }
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
      author: article.author,
      publisher: {
        '@type': 'Organization',
        name: 'IPTV Service',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.iptvservice.site/iptv-subscription.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.iptvservice.site/blog/best-iptv-service-providers-subscriptions'
      }
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
        title={article?.title || "Best IPTV Service Providers Guide 2025 | Premium Subscriptions"}
        description={article?.description || "Comprehensive guide to the best IPTV service providers in 2025. Compare features, pricing, and channel offerings. Find the perfect IPTV subscription for your needs."}
        keywords={article?.keywords || getKeywordsString().split(', ')}
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