import { SEOContent } from "@/components/SEOContent";
import { Pricing as PricingSection } from "@/components/Pricing";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <SEOContent />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <article className="prose prose-invert max-w-none mb-12" itemScope itemType="https://schema.org/Product">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 animate-fade-in text-center">
            Premium{" "}
            <span className="text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text">
              IPTV Pricing Plans
            </span>
          </h1>
          
          <meta name="keywords" content="buy IPTV, IPTV service, best IPTV service, IPTV subscription, premium IPTV, HD IPTV service, streaming TV channels, live TV streaming, 4K IPTV service, affordable IPTV subscription" />
          
          <div className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            <p className="mb-6">
              Looking for the best <a href="https://www.iptvservice.site/" className="text-primary hover:text-white transition-colors" rel="dofollow">IPTV subscription</a>? 
              Our flexible pricing plans offer premium streaming experience with access to over 40,000+ channels in HD & 4K quality.
            </p>
            <p>
              Choose from our range of affordable plans and start enjoying unlimited entertainment today. 
              All plans include 24/7 support and access to premium content.
            </p>
          </div>
        </article>
      </div>
      <PricingSection />
    </div>
  );
};

export default Pricing;