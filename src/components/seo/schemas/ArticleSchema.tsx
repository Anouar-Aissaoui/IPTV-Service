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
      "@type": "SearchAction",
      "target": "https://www.iptvservice.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  ],
  "breadcrumb": {
    "@id": "https://www.iptvservice.site/#breadcrumb"
  },
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Articles",
      "item": "https://www.iptvservice.site/articles"
    }
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
  "inLanguage": "en-US",
  "copyrightYear": new Date().getFullYear(),
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "0",
    "highPrice": "0",
    "offerCount": "1"
  },
  "sameAs": [
    "https://facebook.com/iptvservice",
    "https://twitter.com/iptvservice"
  ]
});