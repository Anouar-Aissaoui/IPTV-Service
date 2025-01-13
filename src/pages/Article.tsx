import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { SEOOptimizer } from '@/components/seo/SEOOptimizer';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface ArticleContent {
  sections: {
    type: string;
    content: string;
    title?: string;
    items?: string[];
    tableData?: Record<string, string | number>[];
    chartData?: Record<string, string | number>[];
  }[];
}

const Article = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: article, isLoading } = useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (!article) {
    return <div className="container mx-auto p-4">Article not found</div>;
  }

  // Type assertion to ensure content matches ArticleContent structure
  const content = article.content as unknown as ArticleContent;

  return (
    <>
      <SEOOptimizer
        title={article.title}
        description={article.description}
        keywords={article.keywords}
        type="article"
      />
      
      <div className="container mx-auto p-4">
        <Breadcrumbs />
        
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
          
          {content.sections.map((section, index) => {
            switch (section.type) {
              case 'introduction':
                return (
                  <div key={index} className="mb-8">
                    <p className="text-lg leading-relaxed">{section.content}</p>
                  </div>
                );
              
              case 'content':
                return (
                  <div key={index} className="mb-8">
                    {section.title && (
                      <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                    )}
                    <p className="mb-4">{section.content}</p>
                    {section.items && (
                      <ul className="list-disc pl-6 space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              
              case 'table':
                return (
                  <Card key={index} className="mb-8">
                    <CardHeader>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {section.tableData && (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              {Object.keys(section.tableData[0]).map((header) => (
                                <TableHead key={header}>{header}</TableHead>
                              ))}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {section.tableData.map((row, rowIndex) => (
                              <TableRow key={rowIndex}>
                                {Object.values(row).map((cell, cellIndex) => (
                                  <TableCell key={cellIndex}>{cell}</TableCell>
                                ))}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      )}
                    </CardContent>
                  </Card>
                );
              
              case 'chart':
                return (
                  <Card key={index} className="mb-8">
                    <CardHeader>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {section.chartData && (
                        <div className="h-[400px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={section.chartData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="category" />
                              <YAxis />
                              <Tooltip />
                              <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              
              case 'conclusion':
                return (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                    <p className="text-lg">{section.content}</p>
                  </div>
                );
              
              default:
                return null;
            }
          })}
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Last updated: {new Date(article.updated_at).toLocaleDateString()}</p>
            <p>Author: {article.author}</p>
            <p>Category: {article.category}</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Article;