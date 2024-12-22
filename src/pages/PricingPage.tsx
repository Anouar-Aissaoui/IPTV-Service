import { Pricing } from "@/components/Pricing";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Navigation Bar */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">IPTV Logo</div>
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="/" className="hover:text-neon">Home</a>
          <a href="/pricing" className="text-neon">Pricing</a>
          <a href="#" className="hover:text-neon">Channel List</a>
          <a href="#" className="hover:text-neon">FAQ</a>
          <a href="#" className="hover:text-neon">Contact Us</a>
        </div>
        <button className="bg-neon text-dark hover:bg-neon/90 px-4 py-2 rounded">
          Free Trial
        </button>
      </nav>

      {/* Pricing Component */}
      <Pricing />
    </div>
  );
};

export default PricingPage;