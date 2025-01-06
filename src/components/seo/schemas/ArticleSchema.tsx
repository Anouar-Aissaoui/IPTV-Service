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
  "url": "https://www.iptvservice.site",
  "description": article.description,
  "publisher": {
    "@id": "https://www.iptvservice.site/#organization"
  },
  "potentialAction": [
    {
      "@type": "ReadAction",
      "target": [`https://www.iptvservice.site/article/${article.title.toLowerCase().replace(/\s+/g, '-')}`]
    }
  ],
  "copyrightYear": new Date().getFullYear(),
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "sameAs": [
    "https://facebook.com/iptvservice",
    "https://twitter.com/iptvservice"
  ],
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
  "headline": article.title,
  "keywords": article.keywords?.join(", "),
  "wordCount": article.wordCount,
  "articleBody": article.description,
  "inLanguage": "en-US"
});