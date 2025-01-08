export const getArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) => ({
  "@type": "Article",
  "@id": `https://www.iptvservice.site/article/${article.title.toLowerCase().replace(/\s+/g, '-')}`,
  "name": article.title,
  "headline": article.title,
  "description": article.description,
  "url": "https://www.iptvservice.site",
  "image": [article.image],
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
      "url": "https://www.iptvservice.site/iptv-subscription.png",
      "width": 600,
      "height": 60,
      "caption": "Best IPTV Service Provider Logo"
    }
  },
  "brand": {
    "@type": "Brand",
    "name": "Best IPTV Service Provider"
  },
  "sku": "IPTV-ARTICLE",
  "mpn": "IPTV-ART-001",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "10",
    "highPrice": "50",
    "offerCount": "3",
    "offers": [
      {
        "@type": "Offer",
        "name": "Article Access",
        "price": "10",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        "itemCondition": "https://schema.org/NewCondition"
      }
    ]
  }
});