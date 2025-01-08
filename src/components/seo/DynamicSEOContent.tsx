import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { generatePSEOContent } from '@/utils/pSEOUtils';
import { seoKeywords } from './Keywords';

interface DynamicSEOContentProps {
  slug?: string;
  locale?: string;
}

export const DynamicSEOContent: React.FC<DynamicSEOContentProps> = ({
  slug,
  locale = 'en'
}) => {
  const { data: pSEOData } = useQuery({
    queryKey: ['pseo-content', slug, locale],
    queryFn: () => generatePSEOContent(slug || window.location.pathname, seoKeywords, locale),
    enabled: !!slug || !!window.location.pathname
  });

  if (!pSEOData?.content) return null;

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">{pSEOData.h1}</h1>
      <div className="content">
        <p className="mb-4 text-lg">{pSEOData.content.main_content}</p>
        {pSEOData.content.features && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              {pSEOData.content.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicSEOContent;