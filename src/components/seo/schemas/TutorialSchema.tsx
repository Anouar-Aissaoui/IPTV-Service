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
  "image": ["https://www.iptvservice.site/iptv-subscription.png"],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "10",
    "highPrice": "50",
    "offerCount": "3",
    "offers": [
      {
        "@type": "Offer",
        "price": "10",
        "priceCurrency": "USD"
      }
    ]
  },
  "sameAs": [
    "https://www.iptvservice.site",
    "https://www.iptvservice.site/tutorials"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "availableLanguage": ["English"],
    "email": "support@iptvservice.site"
  }
});