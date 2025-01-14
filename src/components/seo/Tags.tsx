import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const Tags: React.FC = () => {
  const { data: tags } = useQuery({
    queryKey: ['seo-tags'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('tags')
        .not('tags', 'is', null);

      if (error) throw error;
      
      // Flatten and get unique tags
      const allTags = data.reduce((acc: string[], curr) => [...acc, ...curr.tags], []);
      const uniqueTags = [...new Set(allTags)];
      return uniqueTags;
    }
  });

  if (!tags?.length) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Popular Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            to={`/tag/${tag.toLowerCase()}`}
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-white/80 bg-dark border border-[#F97316]/30 rounded-full hover:bg-[#F97316]/10 transition-colors"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
};