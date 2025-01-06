import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import Content from "@/components/Content";
import { LiveSports } from "@/components/LiveSports";
import { FAQ } from "@/components/FAQ";
import { BrandCarousel } from "@/components/BrandCarousel";
import LiveChannels from "@/components/LiveChannels";
import { SEOOptimizer } from "@/components/seo/SEOOptimizer";
import { IPTVDefinition } from "@/components/seo/IPTVDefinition";
import { IPTVBenefits } from "@/components/seo/IPTVBenefits";
import { IPTVExplanation } from "@/components/seo/IPTVExplanation";
import { seoKeywords } from "@/components/seo/Keywords";
import { getStructuredData } from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Link } from "react-router-dom";
import { ContentWrapper } from "@/components/layout/ContentWrapper";

const Index = () => {
  const currentYear = new Date().getFullYear();
  const pageTitle = `Best IPTV Service Provider ${currentYear} | Premium IPTV Subscription USA & Worldwide`;
  const pageDescription = `Experience premium IPTV service with 40,000+ live channels, 54,000+ VOD content, and 4K quality streaming. Top-rated IPTV provider offering affordable packages with 24/7 support. Choose the best IPTV subscription service in ${currentYear}!`;
  
  const pageData = {
    title: pageTitle,
    description: pageDescription,
    datePublished: `${currentYear}-01-01`,
    dateModified: new Date().toISOString(),
    author: "IPTV Service",
    image: "https://www.iptvservice.site/iptv-subscription.png",
    keywords: seoKeywords
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Premium IPTV Subscription",
    description: pageDescription,
    brand: {
      "@type": "Brand",
      name: "IPTV Service"
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "14.99",
      highPrice: "49.99",
      offerCount: "4"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "7250"
    }
  };

  return (
    <ContentWrapper as="main" className="min-h-screen bg-dark text-white font-grotesk">
      <SEOOptimizer 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="https://www.iptvservice.site"
        imageUrl="/iptv-subscription.png"
        type="product"
        keywords={seoKeywords}
        noindex={false}
      >
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData('article', pageData))}
        </script>
      </SEOOptimizer>

      <Breadcrumbs />
      
      {/* Hero Section */}
      <ContentWrapper as="section" ariaLabel="Hero Section">
        <Hero />
      </ContentWrapper>

      {/* Brand Showcase */}
      <ContentWrapper as="section" ariaLabel="Brand Showcase">
        <BrandCarousel />
      </ContentWrapper>

      {/* IPTV Information */}
      <ContentWrapper as="article" ariaLabel="IPTV Information">
        <IPTVDefinition />
        <IPTVExplanation />
      </ContentWrapper>

      {/* Pricing Plans */}
      <ContentWrapper as="section" ariaLabel="Pricing Plans">
        <Pricing />
      </ContentWrapper>

      {/* Content Showcase */}
      <ContentWrapper as="section" ariaLabel="Content Showcase">
        <Content />
      </ContentWrapper>

      {/* Live Channels */}
      <ContentWrapper as="section" ariaLabel="Live Channels">
        <LiveChannels />
      </ContentWrapper>

      {/* Live Sports */}
      <ContentWrapper as="section" ariaLabel="Live Sports">
        <LiveSports />
      </ContentWrapper>

      {/* IPTV Benefits */}
      <ContentWrapper as="section" ariaLabel="IPTV Benefits">
        <IPTVBenefits />
      </ContentWrapper>

      {/* FAQ Section */}
      <ContentWrapper as="section" ariaLabel="Frequently Asked Questions">
        <FAQ />
      </ContentWrapper>

      {/* Quick Links Section */}
      <div className="container mx-auto px-4 py-12 my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="brutal-border brutal-shadow bg-black p-6 transform hover:-rotate-1 transition-transform">
            <h2 className="text-xl font-black text-neon brutal-text mb-6 transform -rotate-2">Quick Links</h2>
            <div className="space-y-3">
              <Link to="/tutorials" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
                → Setup Guides
              </Link>
              <Link to="/channels" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
                → Channel List
              </Link>
              <Link to="/pricing" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
                → Subscription Plans
              </Link>
              <Link to="/faq" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
                → FAQ
              </Link>
            </div>
          </div>
          <div className="brutal-border brutal-shadow bg-black p-6 transform hover:rotate-1 transition-transform">
            <h2 className="text-xl font-black text-neon brutal-text mb-6 transform rotate-2">Popular Tutorials</h2>
            <div className="space-y-3">
              <Link to="/tutorials/smart-tv" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
                → Smart TV Setup
              </Link>
              <Link to="/tutorials/fire-tv" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
                → Fire TV Setup
              </Link>
              <Link to="/tutorials/mobile" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
                → Mobile Setup
              </Link>
              <Link to="/tutorials/vlc-windows" className="block text-white hover:text-neon transition-all duration-300 brutal-hover font-bold text-sm">
                → VLC Setup
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black border-t border-neon mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neon">About Us</h3>
              <p className="text-sm text-gray-300">
                Premium IPTV service provider offering high-quality streaming worldwide with 24/7 customer support.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neon">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-300 hover:text-neon">Contact Us</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-neon">FAQ</Link></li>
                <li><Link to="/tutorials" className="text-gray-300 hover:text-neon">Setup Guides</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neon">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-300 hover:text-neon">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-neon">Terms of Service</Link></li>
                <li><Link to="/refund" className="text-gray-300 hover:text-neon">Refund Policy</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neon">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-neon" aria-label="Facebook">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-neon" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-neon" aria-label="Instagram">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} IPTV Service. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </ContentWrapper>
  );
};

export default Index;