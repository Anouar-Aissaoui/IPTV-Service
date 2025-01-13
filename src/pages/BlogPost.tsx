import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { SEOOptimizer } from '@/components/seo/SEOOptimizer';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { ContentWrapper } from '@/components/layout/ContentWrapper';
import { Skeleton } from '@/components/ui/skeleton';
import { BlurImage } from '@/components/ui/blur-image';
import { trackSEOMetrics } from '@/utils/seoUtils';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

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
    enabled: !!slug
  });

  React.useEffect(() => {
    if (article) {
      trackSEOMetrics({
        title: article.title,
        description: article.description,
        keywords: article.keywords,
        pageType: 'article',
        locale: 'en'
      });
    }
  }, [article]);

  if (isLoading) {
    return (
      <ContentWrapper className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-4 w-1/2 mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </ContentWrapper>
    );
  }

  if (!article) {
    return (
      <ContentWrapper className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-500">Article not found</h1>
      </ContentWrapper>
    );
  }

  const content = article.content as { sections: Array<{ type: string; title?: string; content: string }> };

  return (
    <>
      <SEOOptimizer
        title={article.title}
        description={article.description}
        keywords={article.keywords}
        type="article"
        imageUrl="/iptv-subscription.png"
      />

      <Breadcrumbs />

      <article className="prose prose-invert max-w-none">
        <ContentWrapper className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-black mb-4 brutal-text">{article.title}</h1>
            <div className="flex items-center text-gray-400 text-sm">
              <span>By {article.author}</span>
              <span className="mx-2">•</span>
              <time dateTime={new Date(article.published_at).toISOString()}>
                {new Date(article.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </header>

          <div className="article-content space-y-6">
            {content.sections.map((section, index) => {
              if (section.type === 'introduction') {
                return (
                  <div key={index} className="text-lg text-gray-300 leading-relaxed">
                    {section.content}
                  </div>
                );
              }

              if (section.type === 'section') {
                return (
                  <section key={index} className="space-y-4">
                    {section.title && (
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    )}
                    <div 
                      className="prose-lg prose-invert"
                      dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br />') }}
                    />
                  </section>
                );
              }

              if (section.type === 'conclusion') {
                return (
                  <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
                    <div className="text-gray-300">{section.content}</div>
                  </div>
                );
              }

              return null;
            })}
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </ContentWrapper>
      </article>
    </>
  );
};

export default BlogPost;