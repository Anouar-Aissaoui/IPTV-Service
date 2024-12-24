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
        "height": 320,
        "caption": "Premium IPTV Service Provider Logo"
      },
      "description": "Premium IPTV service provider offering 40,000+ channels and 54,000+ VOD content worldwide",
      "sameAs": [
        "https://twitter.com/iptvsubscription",
        "https://facebook.com/iptvsubscription",
        "https://instagram.com/iptvsubscription"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["English", "Spanish", "French"],
        "email": "support@iptvsubscription.news"
      }
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
      },
      "inLanguage": "en-US"
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
        "url": "https://iptvsubscription.news/iptv-subscription.png",
        "width": 480,
        "height": 320
      },
      "datePublished": "2024-03-19T00:00:00+00:00",
      "dateModified": new Date().toISOString(),
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
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "xpath": [
          "/html/head/title",
          "/html/head/meta[@name='description']/@content"
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
            "availability": "https://schema.org/InStock",
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
          },
          {
            "@type": "Offer",
            "name": "3 Months Plan",
            "price": "34.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
          },
          {
            "@type": "Offer",
            "name": "6 Months Plan",
            "price": "59.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
          },
          {
            "@type": "Offer",
            "name": "12 Months Plan",
            "price": "99.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
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
      "review": {
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
        "reviewBody": "Excellent IPTV service with amazing channel selection and quality. The 4K streams are fantastic!"
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
            "text": "Our IPTV service is compatible with Smart TVs (Samsung, LG, Android TV), smartphones (iOS and Android), tablets, Amazon Fire Stick, MAG devices, and more. You can enjoy seamless streaming across multiple devices simultaneously."
          }
        },
        {
          "@type": "Question",
          "name": "How reliable is your IPTV streaming service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain a 99.9% uptime guarantee with our premium servers located globally. Our anti-buffering technology ensures smooth streaming experience, and we provide 24/7 technical support to address any concerns immediately."
          }
        },
        {
          "@type": "Question",
          "name": "What content is included in the subscription?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our comprehensive content library includes 40,000+ live channels, 54,000+ VOD content including latest movies and TV shows, premium sports channels, news networks, and international channels from various countries. All content is available in HD and 4K quality where applicable."
          }
        }
      ]
    }
  ]
});