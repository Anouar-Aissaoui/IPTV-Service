export const getArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  wordCount?: number;
  keywords?: string[];
}) => ({
  "@type": "Article",
  "@id": `https://www.iptvservice.site/article/${article.title.toLowerCase().replace(/\s+/g, '-')}`,
  "name": article.title,
  "headline": article.title,
  "description": article.description,
  "url": "https://www.iptvservice.site",
  "image": {
    "@type": "ImageObject",
    "url": article.image,
    "width": 1200,
    "height": 630
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@type": "Person",
    "name": article.author,
    "@id": `https://www.iptvservice.site/author/${article.author.toLowerCase().replace(/\s+/g, '-')}`
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.iptvservice.site/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.iptvservice.site"
  },
  "keywords": article.keywords?.join(", "),
  "wordCount": article.wordCount,
  "articleBody": article.description,
  "inLanguage": "en-US"
});