import * as React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet";
import { BuyerInfoDialog } from "./BuyerInfoDialog";

const keywords = [
  'buy IPTV',
  'IPTV service',
  'best IPTV service',
  'IPTV subscription',
  'premium IPTV',
  'HD IPTV service',
  'streaming TV channels',
  'live TV streaming',
  'USA IPTV service',
  'affordable IPTV subscription'
];

const plans = [
  {
    name: "1 Month",
    price: "14.99",
    features: [
      "7000+ Live Channels",
      "40000+ VOD Movies",
      "1500+ TV Shows",
      "HD & SD Quality",
      "24/7 Support",
    ],
  },
  {
    name: "3 Months",
    price: "24.99",
    features: [
      "7000+ Live Channels",
      "40000+ VOD Movies",
      "1500+ TV Shows",
      "HD & SD Quality",
      "24/7 Support",
      "3 Connections",
    ],
  },
  {
    name: "6 Months",
    price: "39.99",
    features: [
      "7000+ Live Channels",
      "40000+ VOD Movies",
      "1500+ TV Shows",
      "HD & SD Quality",
      "24/7 Support",
      "3 Connections",
      "PPV Events",
    ],
    popular: true,
  },
  {
    name: "12 Months",
    price: "59.99",
    features: [
      "7000+ Live Channels",
      "40000+ VOD Movies",
      "1500+ TV Shows",
      "HD & SD Quality",
      "24/7 Support",
      "4 Connections",
      "PPV Events",
      "Premium Support",
    ],
  },
];

export const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleGetStarted = (planName: string) => {
    setSelectedPlan(planName);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide</title>
        <meta name="description" content="Looking to Buy IPTV? Choose the best IPTV provider offering affordable services in USA, UK & Worldwide with 24K+ channels. Subscribe now!" />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href="https://www.iptvservice.site/pricing" />
      </Helmet>

      <div id="pricing-section" className="bg-dark py-20 relative overflow-hidden">
        {/* Neo-brutalist decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6] opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F97316] opacity-20 blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6 brutal-text transform -rotate-3 text-white">
            Choose Your <span className="text-[#F97316] inline-block transform rotate-2">IPTV Plan</span>
          </h2>
          
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto transform rotate-1 brutal-text text-lg">
            Get the best <a href="https://www.iptvservice.site/" className="text-[#F97316] hover:underline font-black" rel="dofollow">IPTV subscription</a> plans 
            with premium features, HD quality, and extensive content library.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative brutal-border bg-dark p-6 transform hover:-translate-y-2 transition-transform duration-300 ${
                  plan.popular
                    ? "border-[#F97316] brutal-shadow-orange"
                    : "border-white brutal-shadow"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F97316] text-dark px-4 py-1 font-black transform -rotate-2 brutal-border">
                    Most Popular
                  </div>
                )}
                <div className="text-xl font-black mb-4 text-white transform rotate-1">{plan.name}</div>
                <div className="text-4xl font-black mb-6 text-white transform -rotate-2">
                  ${plan.price}
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                      <Check className="w-5 h-5 text-[#F97316]" />
                      <span className="text-gray-300 font-bold">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200 font-black ${
                    plan.popular
                      ? "bg-[#F97316] text-dark hover:bg-[#F97316]/90 brutal-border border-white brutal-shadow"
                      : "bg-dark border-4 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-dark brutal-shadow-orange"
                  }`}
                  onClick={() => handleGetStarted(plan.name)}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F97316]/10 to-transparent h-full w-full transform -rotate-1" />
            <h3 className="text-3xl font-black mb-4 text-white transform -rotate-2 relative">
              Why Choose Our IPTV Service?
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto transform rotate-1 relative font-bold text-lg">
              Experience the best streaming quality with our premium <a href="https://www.iptvservice.site/" className="text-[#F97316] hover:underline font-black" rel="dofollow">IPTV subscription</a> service. 
              We offer extensive channel selection, reliable streams, and dedicated customer support to ensure the best viewing experience.
            </p>
          </div>
        </div>
      </div>

      <BuyerInfoDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
};