import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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

export const Pricing = () => {
  return (
    <div className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Choose Your <span className="text-neon">IPTV Plan</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-6 ${
                plan.popular
                  ? "bg-gradient-to-br from-neon/20 to-dark-gray border-2 border-neon"
                  : "bg-dark-gray"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-dark px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="text-xl font-bold mb-4">{plan.name}</div>
              <div className="text-4xl font-bold mb-6">
                ${plan.price}
                <span className="text-sm text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-neon" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-neon text-dark hover:bg-neon/90"
                    : "bg-dark-gray border border-gray-700 hover:border-neon"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};