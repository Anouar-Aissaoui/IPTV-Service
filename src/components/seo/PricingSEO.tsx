import React from 'react';
import OptimizedHelmet from './OptimizedHelmet';
import { seoKeywords } from './Keywords';

export const PricingSEO: React.FC = () => {
  const pricingKeywords = [
    ...seoKeywords,
    'iptv subscription plans',
    'iptv pricing',
    'buy iptv subscription',
    'iptv packages',
    'premium iptv plans',
    'iptv monthly subscription',
    'iptv yearly subscription',
    'cheap iptv subscription',
    'best iptv deals',
    'iptv service cost'
  ];

  return (
    <OptimizedHelmet
      title="IPTV Subscription Plans 2025 | Best IPTV Service Packages"
      description="Choose from our affordable IPTV subscription plans starting at $14.99. Access 40,000+ live channels, premium sports, movies & shows in HD/4K quality. 24/7 support included."
      canonicalUrl="/iptv-subscription-plans"
      keywords={pricingKeywords}
      pageType="pricing"
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Premium IPTV Subscription",
          "description": "High-quality IPTV service with 40,000+ channels and VOD content",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "14.99",
            "highPrice": "59.99",
            "offerCount": "4",
            "offers": [
              {
                "@type": "Offer",
                "name": "1 Month Premium Plan",
                "price": "14.99",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "3 Months Premium Plan",
                "price": "24.99",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "6 Months Premium Plan",
                "price": "39.99",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "12 Months Premium Plan",
                "price": "59.99",
                "priceCurrency": "USD"
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1250"
          }
        })}
      </script>
    </OptimizedHelmet>
  );
};

export default PricingSEO;