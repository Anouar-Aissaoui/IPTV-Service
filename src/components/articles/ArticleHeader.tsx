import React from 'react';
import { CalendarDays, Clock, User, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';

interface ArticleHeaderProps {
  article: {
    title: string;
    author: string;
    published_at: string;
    reading_time: number;
    category: string;
    tags: string[];
  };
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article }) => {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <User className="w-4 h-4" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <CalendarDays className="w-4 h-4" />
          <time dateTime={article.published_at}>
            {formatDistanceToNow(new Date(article.published_at), { addSuffix: true })}
          </time>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{article.reading_time} min read</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">{article.category}</Badge>
        {article.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </Badge>
        ))}
      </div>
    </header>
  );
};