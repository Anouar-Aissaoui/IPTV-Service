import { Button } from "@/components/ui/button";
import { Check, Monitor } from "lucide-react";
import { Helmet } from "react-helmet";

const keywords = [
  'buy IPTV',
  'IPTV service',
  'best IPTV service',
  'IPTV subscription',
  'premium IPTV',
  'HD IPTV service',
  'streaming TV channels',
  'live TV streaming',
  '4K IPTV service',
  'affordable IPTV subscription'
];

const plans = [
  {
    name: "1 Month",
    price: "14.99",
    features: [
      "HD/4K/8K IPTV",
      "+15.000 Channels",
      "+100.000 Vod",
      "Watch Channels",
      "7 days money back guarantee",
    ],
  },
  {
    name: "3 Months",
    price: "24.99",
    features: [
      "HD/4K/8K IPTV",
      "+15.000 Channels",
      "+100.000 Vod",
      "Watch Channels",
      "7 days money back guarantee",
    ],
  },
  {
    name: "6 Months",
    price: "39.99",
    features: [
      "HD/4K/8K IPTV",
      "+15.000 Channels",
      "+100.000 Vod",
      "Watch Channels",
      "7 days money back guarantee",
    ],
    popular: true,
  },
  {
    name: "12 Months",
    price: "59.99",
    features: [
      "HD/4K/8K IPTV",
      "+15.000 Channels",
      "+100.000 Vod",
      "Watch Channels",
      "7 days money back guarantee",
    ],
  },
];

export const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Premium IPTV Subscription Plans & Pricing - Best IPTV Service 2024</title>
        <meta name="description" content="Choose from our flexible IPTV subscription plans starting at $14.99. Get access to 7000+ live channels, 40000+ VOD content in HD & 4K quality." />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href="https://iptvsubscription.news/pricing" />
      </Helmet>

      <div className="bg-[#1A1F2C] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 bg-[#1E2435] border border-gray-800 hover:border-neon/40 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="text-xl font-bold mb-4 text-white">{plan.name}</div>
                <div className="text-5xl font-bold mb-2 text-white">
                  ${plan.price}
                </div>
                <div className="text-purple-400 text-sm mb-8">+1 Month Free</div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-purple-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white gap-2"
                >
                  <Monitor className="w-5 h-5" />
                  Buy Now
                </Button>
                <div className="mt-4 text-center text-sm text-gray-400">
                  Ready within 5-7mins
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <img src="/apple.svg" alt="Apple" className="h-5 w-5 opacity-50" />
                  <img src="/android.svg" alt="Android" className="h-5 w-5 opacity-50" />
                  <img src="/windows.svg" alt="Windows" className="h-5 w-5 opacity-50" />
                  <img src="/youtube.svg" alt="Youtube" className="h-5 w-5 opacity-50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
