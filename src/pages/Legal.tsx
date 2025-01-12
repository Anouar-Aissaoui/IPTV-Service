import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';
import { Navigation } from '@/components/navigation/Navigation';

const Legal = () => {
  const { type = 'privacy-policy' } = useParams();
  const navigate = useNavigate();

  const { data: legalContent, isLoading } = useQuery({
    queryKey: ['legal-content', type],
    queryFn: async () => {
      const dbType = type.replace('-', '_');
      const { data, error } = await supabase
        .from('legal_content')
        .select('*')
        .eq('type', dbType)
        .single();

      if (error) throw error;
      return data;
    }
  });

  const getTitle = () => {
    switch (type) {
      case 'privacy-policy':
        return 'Privacy Policy';
      case 'terms-of-service':
        return 'Terms of Service';
      case 'refund-policy':
        return 'Refund Policy';
      default:
        return 'Legal Information';
    }
  };

  return (
    <>
      <OptimizedHelmet
        title={`${getTitle()} - IPTV Service`}
        description={`Read our ${getTitle().toLowerCase()} to understand your rights and our obligations.`}
        keywords={[type.replace('-', ' '), 'legal', 'iptv service', 'policy']}
      />

      <Navigation />

      <main className="min-h-screen bg-dark pt-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:text-[#F97316] transition-all duration-300 mb-8 text-sm md:text-base font-black brutal-border px-3 py-1 md:px-4 md:py-2 hover:bg-[#F97316] hover:text-white transform hover:-translate-y-1 hover:translate-x-1 brutal-shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 brutal-text inline-block bg-[#F97316] px-6 py-3 transform -rotate-2 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {getTitle()}
          </h1>

          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
          ) : (
            <div className="prose prose-invert max-w-none">
              {legalContent?.content.sections?.map((section: any, index: number) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-[#F97316] mb-4">{section.title}</h2>
                  <div className="text-gray-300 space-y-4">
                    {typeof section.content === 'string' ? (
                      <p>{section.content}</p>
                    ) : (
                      section.content.map((paragraph: string, pIndex: number) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Legal;