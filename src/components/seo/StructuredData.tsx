export const getStructuredData = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.iptvservice.site/#organization",
      "name": "Best IPTV Service Provider",
      "url": "https://www.iptvservice.site",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iptvservice.site/iptv-subscription.png",
        "width": 480,
        "height": 320,
        "caption": "Premium IPTV Service Provider Logo"
      },
      "description": "Premium IPTV service provider offering 40,000+ channels and 54,000+ VOD content worldwide with 4K quality streaming",
      "sameAs": [
        "https://twitter.com/iptvsubscription",
        "https://facebook.com/iptvsubscription",
        "https://instagram.com/iptvsubscription"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["English", "Spanish", "French", "Arabic"],
        "email": "support@iptvservice.site"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.iptvservice.site/#website",
      "url": "https://www.iptvservice.site",
      "name": "Best IPTV Service Provider",
      "publisher": {
        "@id": "https://www.iptvservice.site/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.iptvservice.site/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://www.iptvservice.site",
            "name": "Home"
          }
        }
      ]
    },
    {
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
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "7520",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "John Smith"
          },
          "datePublished": "2024-03-19",
          "reviewBody": "Excellent IPTV service with amazing channel selection and 4K quality. The streams are fantastic and customer support is responsive!"
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Sarah Johnson"
          },
          "datePublished": "2024-03-18",
          "reviewBody": "Best IPTV service I've used. Great selection of international channels, sports packages, and very stable connection."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What devices are compatible with your IPTV service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our IPTV service is compatible with Smart TVs (Samsung, LG, Android TV), smartphones (iOS and Android), tablets, Amazon Fire Stick, MAG devices, Formuler, and more. You can enjoy seamless 4K streaming across multiple devices simultaneously."
          }
        },
        {
          "@type": "Question",
          "name": "How reliable is your IPTV streaming service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain a 99.9% uptime guarantee with our premium servers located globally. Our anti-buffering technology ensures smooth streaming experience in HD and 4K quality, and we provide 24/7 technical support to address any concerns immediately."
          }
        },
        {
          "@type": "Question",
          "name": "What content is included in the subscription?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our comprehensive content library includes 40,000+ live channels, 54,000+ VOD content including latest movies and TV shows, premium sports channels, news networks, and international channels from various countries. All content is available in HD and 4K quality where applicable."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer a money-back guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service. We want you to be completely confident in your subscription and the quality of our streaming service."
          }
        }
      ]
    }
  ]
});