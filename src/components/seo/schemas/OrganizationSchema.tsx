export const getOrganizationSchema = () => ({
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
});