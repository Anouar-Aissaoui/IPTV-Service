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
        "url": "https://iptvsubscription.news/iptv-subscription.png"
      },
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
      "dateModified": "2024-03-19"
    },
    {
      "@type": "Service",
      "name": "IPTV Subscription Service",
      "description": "Premium IPTV service with 40,000+ channels and 54,000+ VOD content",
      "provider": {
        "@id": "https://iptvsubscription.news/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IPTV Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Premium IPTV Package",
              "description": "Access to 40,000+ live channels and 54,000+ VOD content",
              "price": "14.99",
              "priceCurrency": "USD"
            }
          }
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://iptvsubscription.news/#localbusiness",
      "name": "Best IPTV Service Provider",
      "image": "https://iptvsubscription.news/iptv-subscription.png",
      "url": "https://iptvsubscription.news",
      "telephone": "+1-000-000-0000",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressRegion": "NY"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.09024",
        "longitude": "-95.712891"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "priceRange": "$$"
    }
  ]
});
