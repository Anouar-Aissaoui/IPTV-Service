interface ArticleData {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}

export const getArticleSchema = (article: ArticleData) => ({
  "@type": "Article",
  "@id": "https://www.iptvservice.site/article",
  "name": article.title,
  "headline": article.title,
  "description": article.description,
  "image": [article.image],
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "url": "https://www.iptvservice.site",
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Best IPTV Service Provider",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.iptvservice.site/iptv-subscription.png",
      "width": 480,
      "height": 320,
      "caption": "IPTV Service Logo"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.iptvservice.site"
  }
});