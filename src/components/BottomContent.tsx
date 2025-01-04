import React from "react";

export const BottomContent = () => {
  return (
    <section className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <div className="prose prose-invert max-w-none">
          <div className="mb-12 transform -rotate-2">
            <h2 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-[#F97316] text-dark px-6 py-3 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Why Choose Our IPTV Service?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-black p-6 border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-[#F97316]">Unmatched Entertainment Experience</h3>
              <p className="text-white mb-4">
                Experience entertainment like never before with our premium IPTV subscription service. Access over 40,000 channels and 54,000+ VOD options, bringing you content from across the globe in stunning HD and 4K quality.
              </p>
            </div>
            
            <div className="bg-black p-6 border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-[#F97316]">Cutting-Edge Technology</h3>
              <p className="text-white mb-4">
                Our service utilizes advanced streaming technology to ensure buffer-free playback and crystal-clear picture quality. Compatible with multiple devices, including Smart TVs, smartphones, tablets, and streaming devices.
              </p>
            </div>
            
            <div className="bg-black p-6 border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-[#F97316]">Comprehensive Sports Coverage</h3>
              <p className="text-white mb-4">
                Never miss a game with our extensive sports package. Watch live matches, tournaments, and championships from major leagues worldwide, including NFL, NBA, MLB, NHL, Premier League, and more.
              </p>
            </div>
            
            <div className="bg-black p-6 border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] transform hover:-translate-y-1 hover:translate-x-1 transition-transform">
              <h3 className="text-2xl font-bold mb-4 text-[#F97316]">Premium Support Services</h3>
              <p className="text-white mb-4">
                Enjoy peace of mind with our 24/7 customer support team. We provide detailed setup guides, instant technical assistance, and regular system updates to ensure your entertainment stays uninterrupted.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-black p-8 border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]">
            <h3 className="text-2xl font-bold mb-4 text-[#F97316]">Your Gateway to Global Entertainment</h3>
            <p className="text-white mb-4">
              Our IPTV service brings you an unparalleled streaming experience with access to channels from the USA, UK, Canada, and international networks. Enjoy movies, TV shows, documentaries, news, and children's programming in multiple languages.
            </p>
            <p className="text-white">
              With flexible subscription plans, high-quality streams, and reliable service, we're committed to providing the best IPTV experience. Join thousands of satisfied customers who have made us their preferred choice for home entertainment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};