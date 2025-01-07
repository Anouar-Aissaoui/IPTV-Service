const CLOUDFLARE_ACCOUNT_HASH = 'e2d3da539a089468a3cf193165fa6d93';

export const getTransformedImageUrl = (
  originalUrl: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'auto' | 'webp' | 'jpeg' | 'png';
  } = {}
) => {
  try {
    // If the URL is already a Cloudflare URL or is a relative path, return as is
    if (!originalUrl || originalUrl.startsWith('/') || originalUrl.includes('/cdn-cgi/')) {
      return originalUrl;
    }

    const url = new URL(originalUrl);
    const transformUrl = `https://imagedelivery.net/${CLOUDFLARE_ACCOUNT_HASH}${url.pathname}`;
    
    const params = new URLSearchParams();
    if (options.width) params.append('width', options.width.toString());
    if (options.height) params.append('height', options.height.toString());
    if (options.quality) params.append('quality', options.quality.toString());
    if (options.format) params.append('format', options.format);

    return `${transformUrl}?${params.toString()}`;
  } catch (error) {
    console.warn('Error transforming image URL:', error);
    return originalUrl;
  }
};