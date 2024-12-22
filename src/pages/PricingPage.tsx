import { Pricing } from "@/components/Pricing";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation Bar */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">IPTV Logo</div>
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="/" className="hover:text-neon transition-colors">Home</a>
          <a href="/pricing" className="text-neon">Pricing</a>
          <a href="#" className="hover:text-neon transition-colors">Channel List</a>
          <a href="#" className="hover:text-neon transition-colors">FAQ</a>
          <a href="#" className="hover:text-neon transition-colors">Contact Us</a>
        </div>
        <Button className="bg-neon text-dark hover:bg-neon/90">
          Free Trial
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Choose Your Perfect <span className="text-neon">IPTV Plan</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Get access to thousands of channels and VOD content with our flexible subscription plans. 
          Find the perfect package that suits your entertainment needs.
        </p>
      </div>

      {/* Pricing Component */}
      <Pricing />

      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,255,0,0.1)_0%,transparent_70%)]"></div>
      </div>
    </div>
  );
};

export default PricingPage;