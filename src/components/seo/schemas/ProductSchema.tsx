import type { ProductSchema } from '@/types/schema';

export const getProductSchema = (
  name: string,
  description: string,
  url: string,
  priceRange: { low: string; high: string }
): ProductSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  url,
  name,
  description,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: priceRange.low,
    highPrice: priceRange.high,
    offerCount: '4'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '1250'
  }
});