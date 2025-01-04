import * as React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
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
  'USA IPTV service',
  'affordable IPTV subscription'
];

const plans = [
  {
    name: "1 Month",
    price: "14.99",
    features: [
      "pricing.features.channels",
      "pricing.features.movies",
      "pricing.features.shows",
      "pricing.features.quality",
      "pricing.features.support"
    ],
  },
  {
    name: "3 Months",
    price: "24.99",
    features: [
      "pricing.features.channels",
      "pricing.features.movies",
      "pricing.features.shows",
      "pricing.features.quality",
      "pricing.features.support",
      "pricing.features.connections"
    ],
  },
  {
    name: "6 Months",
    price: "39.99",
    features: [
      "pricing.features.channels",
      "pricing.features.movies",
      "pricing.features.shows",
      "pricing.features.quality",
      "pricing.features.support",
      "pricing.features.connections",
      "pricing.features.ppv"
    ],
    popular: true,
  },
  {
    name: "12 Months",
    price: "59.99",
    features: [
      "pricing.features.channels",
      "pricing.features.movies",
      "pricing.features.shows",
      "pricing.features.quality",
      "pricing.features.support",
      "pricing.features.connections",
      "pricing.features.ppv",
      "pricing.features.premium"
    ],
  },
];

export const Pricing: React.FC = () => {
  const { t } = useTranslation();
  
  const handleGetStarted = () => {
    window.open('https://wa.me/message/R5IYJF3GG635D1', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href="https://www.iptvservice.site/pricing" />
      </Helmet>

      <div id="pricing-section" className="bg-dark py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 transform -rotate-2">
            {t("pricing.title")} <span className="text-neon">IPTV Plan</span>
          </h2>
          
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto transform rotate-1">
            {t("pricing.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative border-4 ${
                  plan.popular
                    ? "border-neon shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]"
                    : "border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                } bg-dark p-6 transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-dark px-4 py-1 font-bold transform -rotate-2 border-2 border-white">
                    {t("pricing.popular")}
                  </div>
                )}
                <div className="text-xl font-bold mb-4 text-white transform rotate-1">{plan.name}</div>
                <div className="text-4xl font-bold mb-6 text-white transform -rotate-2">
                  ${plan.price}
                  <span className="text-sm text-gray-400">/{t("pricing.month")}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 transform hover:translate-x-1 transition-transform duration-200">
                      <Check className="w-5 h-5 text-neon" />
                      <span className="text-gray-300">{t(feature)}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200 ${
                    plan.popular
                      ? "bg-neon text-dark hover:bg-neon/90 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-dark border-4 border-neon text-neon hover:bg-neon hover:text-dark shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]"
                  }`}
                  onClick={handleGetStarted}
                >
                  {t("pricing.cta")}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white transform -rotate-2">{t("pricing.why_choose")}</h3>
            <p className="text-gray-300 max-w-3xl mx-auto transform rotate-1">
              {t("pricing.why_description")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};