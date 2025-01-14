import React from 'react';
import { analyzeSEO, getSEOScore, type SEOAnalysis } from '@/utils/yoastSEO';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface SEOAnalyzerProps {
  content: string;
  title: string;
  description: string;
  keyword: string;
  url: string;
  onAnalysisComplete?: (score: number) => void;
}

export const SEOAnalyzer: React.FC<SEOAnalyzerProps> = ({
  content,
  title,
  description,
  keyword,
  url,
  onAnalysisComplete
}) => {
  const { data: analysis, isLoading } = useQuery({
    queryKey: ['seo-analysis', content, title, description, keyword, url],
    queryFn: async () => {
      const result = await analyzeSEO({
        text: content,
        title,
        description,
        keyword,
        url
      });

      const score = getSEOScore(result);
      
      // Store SEO metrics in Supabase
      await supabase
        .from('seo_metrics')
        .upsert({
          route: url,
          title,
          description,
          canonical_url: url,
          meta_tags: {
            keywords: keyword,
            'og:title': title,
            'og:description': description
          },
          structured_data: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description,
            url
          }
        });

      onAnalysisComplete?.(score);
      return result;
    }
  });

  if (isLoading) {
    return <div className="animate-pulse">Analyzing SEO...</div>;
  }

  if (!analysis) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">SEO Analysis</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Overall Score:</span>
          <span className={`font-bold ${getSEOScore(analysis) >= 70 ? 'text-green-500' : 'text-orange-500'}`}>
            {getSEOScore(analysis)}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Readability Analysis</h4>
          <ul className="space-y-2">
            {analysis.readability.results.map((result, index) => (
              <li 
                key={index}
                className={`text-sm ${
                  result.score >= 7 ? 'text-green-500' : 
                  result.score >= 5 ? 'text-orange-500' : 
                  'text-red-500'
                }`}
              >
                {result.text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">SEO Analysis</h4>
          <ul className="space-y-2">
            {analysis.seo.results.map((result, index) => (
              <li 
                key={index}
                className={`text-sm ${
                  result.score >= 7 ? 'text-green-500' : 
                  result.score >= 5 ? 'text-orange-500' : 
                  'text-red-500'
                }`}
              >
                {result.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};