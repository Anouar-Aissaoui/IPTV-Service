import { Pricing } from "@/components/Pricing";
import { SEOContent } from "@/components/SEOContent";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Pricing />
      <SEOContent />
    </div>
  );
};

export default PricingPage;