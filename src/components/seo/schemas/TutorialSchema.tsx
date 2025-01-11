export const getTutorialSchema = (tutorial: {
  title: string;
  description: string;
  steps: Array<{ step: number; text: string }>;
}) => ({
  "@type": "HowTo",
  "@id": `https://www.iptvservice.site/tutorial/${tutorial.title.toLowerCase().replace(/\s+/g, '-')}`,
  "name": tutorial.title,
  "description": tutorial.description,
  "url": "https://www.iptvservice.site/tutorials",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.iptvservice.site/iptv-subscription.png",
    "width": 600,
    "height": 60,
    "caption": "IPTV Tutorial Logo"
  },
  "step": tutorial.steps.map(step => ({
    "@type": "HowToStep",
    "position": step.step,
    "text": step.text
  })),
  "totalTime": "PT10M",
  "tool": {
    "@type": "HowToTool",
    "name": "IPTV Device"
  },
  "brand": {
    "@type": "Brand",
    "name": "Best IPTV Service Provider"
  },
  "sku": "IPTV-TUTORIAL",
  "mpn": "IPTV-TUT-001",
  "image": {
    "@type": "ImageObject",
    "url": "https://www.iptvservice.site/iptv-subscription.png",
    "width": 1200,
    "height": 630
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.8",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "IPTV Reviews"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "850",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "10",
    "highPrice": "50",
    "offerCount": "3",
    "offers": [
      {
        "@type": "Offer",
        "name": "Basic Tutorial Access",
        "price": "10",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        "itemCondition": "https://schema.org/NewCondition",
        "url": "https://www.iptvservice.site/tutorials"
      }
    ]
  }
});