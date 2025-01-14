import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const Categories: React.FC = () => {
  const { data: categories } = useQuery({
    queryKey: ['seo-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('category')
        .not('category', 'is', null)
        .order('category');

      if (error) throw error;
      
      // Get unique categories
      const uniqueCategories = [...new Set(data.map(item => item.category))];
      return uniqueCategories;
    }
  });

  if (!categories?.length) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category.toLowerCase()}`}
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-[#F97316] rounded-full hover:bg-[#F97316]/80 transition-colors"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};