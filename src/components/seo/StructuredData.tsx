export const getStructuredData = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://iptvsubscription.news/#organization",
      "name": "Best IPTV Service Provider",
      "url": "https://iptvsubscription.news",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iptvsubscription.news/iptv-subscription.png",
        "width": 480,
        "height": 320
      },
      "description": "Premium IPTV service provider offering 40,000+ channels and 54,000+ VOD content worldwide",
      "sameAs": [
        "https://twitter.com/iptvsubscription",
        "https://facebook.com/iptvsubscription",
        "https://instagram.com/iptvsubscription"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://iptvsubscription.news/#website",
      "url": "https://iptvsubscription.news",
      "name": "Best IPTV Service Provider",
      "publisher": {
        "@id": "https://iptvsubscription.news/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://iptvsubscription.news/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://iptvsubscription.news/#webpage",
      "url": "https://iptvsubscription.news",
      "name": "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide",
      "isPartOf": {
        "@id": "https://iptvsubscription.news/#website"
      },
      "about": {
        "@id": "https://iptvsubscription.news/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://iptvsubscription.news/iptv-subscription.png"
      },
      "datePublished": "2024-03-19",
      "dateModified": "2024-03-19",
      "description": "Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 40,000+ channels and 54,000+ VOD content. Subscribe now!",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://iptvsubscription.news",
              "name": "Home"
            }
          }
        ]
      }
    },
    {
      "@type": "Product",
      "name": "Premium IPTV Subscription",
      "description": "Access to 40,000+ live channels and 54,000+ VOD content with HD and 4K quality",
      "brand": {
        "@type": "Brand",
        "name": "Best IPTV Service Provider"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "14.99",
        "highPrice": "99.99",
        "offerCount": "4",
        "offers": [
          {
            "@type": "Offer",
            "name": "1 Month Plan",
            "price": "14.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "3 Months Plan",
            "price": "34.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "6 Months Plan",
            "price": "59.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "12 Months Plan",
            "price": "99.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "7520"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What devices are compatible with your IPTV service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our IPTV service is compatible with Smart TVs, Android devices, iOS devices, Fire TV Stick, MAG boxes, and more. You can use it on multiple devices simultaneously."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer a free trial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer a free trial period so you can test our service quality and content library before subscribing."
          }
        },
        {
          "@type": "Question",
          "name": "What content is included in the subscription?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our subscription includes 40,000+ live channels, 54,000+ VOD content, sports channels, movies, TV shows, and international channels in HD and 4K quality."
          }
        }
      ]
    }
  ]
});