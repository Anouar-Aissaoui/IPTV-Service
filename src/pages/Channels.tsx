import React from "react";
import Navigation from "@/components/navigation/Navigation";
import OptimizedHelmet from "@/components/seo/OptimizedHelmet";
import LiveChannels from "@/components/LiveChannels";

const Channels = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <OptimizedHelmet
        title="IPTV Channel List | Premium Live TV Channels"
        description="Browse our extensive collection of premium IPTV channels including sports, movies, entertainment, and international content. High-quality streaming available 24/7."
        keywords={[
          "IPTV channels",
          "live TV channels",
          "streaming channels",
          "premium IPTV content",
          "sports channels",
          "movie channels",
          "international channels",
        ]}
      />
      
      <Navigation onScrollToSection={handleScrollToSection} />
      
      <main className="pt-20 min-h-screen bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 brutal-text inline-block bg-[#F97316] px-6 py-3 transform -rotate-2 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Channel List
            </h1>
            <p className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              Explore our extensive collection of premium channels, featuring sports, movies,
              entertainment, and international content.
            </p>
          </div>
        </div>
        
        <LiveChannels />
      </main>
    </>
  );
};

export default Channels;