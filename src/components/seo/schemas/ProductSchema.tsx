export const getProductSchema = () => ({
  "@type": "Product",
  "name": "Premium IPTV Subscription",
  "description": "Access to 40,000+ live channels and 54,000+ VOD content with HD and 4K quality streaming. Including sports, movies, TV shows, and international channels.",
  "brand": {
    "@type": "Brand",
    "name": "Best IPTV Service Provider"
  },
  "sku": "IPTV-PREMIUM-2024",
  "mpn": "IPTV2024-PRO",
  "image": [
    "https://www.iptvservice.site/iptv-subscription.png"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "14.99",
    "highPrice": "99.99",
    "offerCount": "4",
    "offers": [
      {
        "@type": "Offer",
        "name": "1 Month Premium Plan",
        "price": "14.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        "itemCondition": "https://schema.org/NewCondition"
      },
      {
        "@type": "Offer",
        "name": "3 Months Premium Plan",
        "price": "34.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        "itemCondition": "https://schema.org/NewCondition"
      },
      {
        "@type": "Offer",
        "name": "6 Months Premium Plan",
        "price": "59.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        "itemCondition": "https://schema.org/NewCondition"
      },
      {
        "@type": "Offer",
        "name": "12 Months Premium Plan",
        "price": "99.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        "itemCondition": "https://schema.org/NewCondition"
      }
    ]
  }
});