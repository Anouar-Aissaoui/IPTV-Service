import * as React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { BlurImage } from "@/components/ui/blur-image";

const MobileSetup = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/R5IYJF3GG635D1', '_blank');
  };

  return (
    <div className="min-h-screen bg-dark">
      <Helmet>
        <title>Mobile IPTV Setup Guide - Easy Installation Steps for Android & iOS</title>
        <meta name="description" content="Learn how to set up IPTV on your mobile device with our step-by-step guide. Compatible with Android and iOS. Get started now!" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 transform -rotate-2">
          <h1 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-[#F97316] text-dark px-6 py-3 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Mobile IPTV Setup Guide
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-6">
            <div className="bg-dark border-4 border-[#F97316] p-6 transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200 shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]">
              <h2 className="text-2xl font-bold text-white mb-4 transform -rotate-1">
                Easy Installation Steps
              </h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#F97316] font-bold">1.</span>
                  Download IPTV Player from App Store/Play Store
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F97316] font-bold">2.</span>
                  Open the app and click "Add Playlist"
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F97316] font-bold">3.</span>
                  Enter your M3U URL and credentials
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#F97316] font-bold">4.</span>
                  Click Save and enjoy your content
                </li>
              </ul>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#F97316] text-white hover:bg-[#F97316]/90 font-bold transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              Get Your IPTV Subscription
            </Button>
          </div>

          <div className="relative transform hover:scale-105 transition-duration-300 rotate-2">
            <div className="absolute -inset-1 bg-[#F97316]/30 rounded-none blur"></div>
            <BlurImage
              src="/devices.png"
              alt="Mobile IPTV Setup Guide - Easy Installation Steps for Android & iOS"
              width={600}
              height={400}
              className="relative border-4 border-white shadow-[12px_12px_0px_0px_rgba(249,115,22,1)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Compatible Devices",
              content: "Works on both Android and iOS devices, including tablets and smartphones."
            },
            {
              title: "Easy Setup",
              content: "Simple installation process that takes less than 5 minutes to complete."
            },
            {
              title: "24/7 Support",
              content: "Get help anytime with our dedicated customer support team."
            }
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-dark border-4 border-[#F97316] p-6 transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200 shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]"
            >
              <h3 className="text-xl font-bold text-white mb-3 transform -rotate-1">
                {feature.title}
              </h3>
              <p className="text-gray-300 transform rotate-1">
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSetup;