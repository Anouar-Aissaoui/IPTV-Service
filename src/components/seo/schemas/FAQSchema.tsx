export const getFAQSchema = () => ({
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
    }
  ]
});