export const getArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) => ({
  "@type": "Article",
  "@context": "https://schema.org",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Best IPTV Service Provider",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.iptvservice.site/iptv-subscription.png"
    }
  }
});