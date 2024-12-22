import { SEOContent } from "@/components/SEOContent";
import { Pricing as PricingSection } from "@/components/Pricing";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 animate-fade-in text-center">
          Choose Your{" "}
          <span className="text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text">
            Perfect Plan
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Get access to premium IPTV service with our flexible pricing plans. 
          Choose the package that best suits your needs and start streaming today.
        </p>
      </div>
      <PricingSection />
      <SEOContent />
    </div>
  );
};

export default Pricing;