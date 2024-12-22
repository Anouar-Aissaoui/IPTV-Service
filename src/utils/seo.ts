export interface MetaData {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: string;
  siteName?: string;
  twitterCard?: string;
  twitterDomain?: string;
}

export const generateMetaTags = (metaData: MetaData) => {
  const {
    title,
    description,
    url,
    image,
    type = 'website',
    siteName = 'Premium IPTV Service',
    twitterCard = 'summary_large_image',
    twitterDomain = 'iptvsubscription.news'
  } = metaData;

  return {
    title,
    description,
    meta: [
      { name: 'description', content: description },
      // Open Graph tags
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: siteName },
      // Twitter tags
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:domain', content: twitterDomain },
      { name: 'twitter:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ]
  };
};