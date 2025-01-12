import { Json } from './shared';

export interface HeroContent {
  title?: string;
  subtitle?: string;
  description?: string;
  stats?: {
    customers?: string;
    channels?: string;
    sports?: string;
    vod?: string;
  };
}

export interface Feature {
  title: string;
  description: string;
}

export interface FeaturesContent {
  features: Feature[];
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export interface PricingContent {
  plans: PricingPlan[];
}

export interface Channel {
  title: string;
  image: string;
  description: string;
}

export interface ChannelsContent {
  channels: Channel[];
}

export interface Sport {
  title: string;
  image: string;
  description: string;
}

export interface SportsContent {
  sports: Sport[];
}

export interface Movie {
  title: string;
  image: string;
  width: number;
  height: number;
}

export interface MoviesContent {
  movies: Movie[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  questions: FAQItem[];
}

export interface PageContent {
  hero_content: HeroContent;
  features_content: FeaturesContent;
  pricing_content: PricingContent;
  channels_content: ChannelsContent;
  sports_content: SportsContent;
  movies_content: MoviesContent;
  faq_content: FAQContent;
}