import React from "react";
import Navigation from "@/components/navigation/Navigation";
import OptimizedHelmet from "@/components/seo/OptimizedHelmet";
import LiveChannels from "@/components/LiveChannels";
import { seoKeywords } from "@/components/seo/Keywords";
import { cn } from "@/lib/utils";

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
        title="IPTV Channel List 2025 | 40,000+ Live TV Channels & Premium Content"
        description="Access 40,000+ premium IPTV channels including sports, movies, entertainment, and international content. Stream in HD/4K quality with our reliable IPTV service. Start your free trial today!"
        keywords={[
          ...seoKeywords,
          "live TV channels",
          "streaming channels",
          "premium IPTV content",
          "sports channels",
          "movie channels",
          "international channels",
          "HD channels",
          "4K channels",
          "entertainment channels",
          "news channels"
        ]}
        pageType="channels"
      />
      
      <Navigation onScrollToSection={handleScrollToSection} />
      
      <main className="pt-20 min-h-screen bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 transform -rotate-2">
              Premium <span className="text-[#F97316] bg-white px-2 py-1">IPTV Channels</span>
            </h1>
            <p className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              Stream 40,000+ channels worldwide in HD/4K quality
            </p>
          </div>

          {/* Channel Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 p-6 rounded-lg border-2 border-[#F97316] hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-white mb-3">Sports Channels</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• ESPN Network</li>
                <li>• Sky Sports</li>
                <li>• BeIN Sports</li>
                <li>• NBA TV</li>
                <li>• NFL Network</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg border-2 border-[#F97316] hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-white mb-3">Entertainment</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• HBO</li>
                <li>• Netflix</li>
                <li>• Disney+</li>
                <li>• Amazon Prime</li>
                <li>• Showtime</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg border-2 border-[#F97316] hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-white mb-3">News Networks</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• CNN</li>
                <li>• BBC</li>
                <li>• Fox News</li>
                <li>• Al Jazeera</li>
                <li>• MSNBC</li>
              </ul>
            </div>
          </div>

          <LiveChannels />

          {/* SEO Content Section */}
          <article className="prose prose-invert max-w-none mb-16">
            <h2 className="text-2xl font-bold mb-4">Premium IPTV Channels List 2025 - Stream 40,000+ Live Channels</h2>
            
            <p className="mb-6">
              Welcome to the most comprehensive <strong>IPTV channel list</strong> available in 2025. Our premium IPTV service 
              offers access to over 40,000 live channels from around the world, including sports, entertainment, movies, news, 
              and international programming. Experience crystal-clear HD and 4K streaming quality with our reliable and 
              stable IPTV service.
            </p>

            <h3 className="text-xl font-bold mb-3">Sports Coverage Like Never Before</h3>
            <p className="mb-6">
              Never miss a game with our extensive sports channel lineup. Watch all major leagues including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>NFL, NBA, MLB, and NHL games</li>
              <li>Premier League, La Liga, Serie A, and Bundesliga soccer</li>
              <li>UFC, Boxing, and WWE events</li>
              <li>Formula 1, NASCAR, and MotoGP racing</li>
              <li>Tennis Grand Slams and Golf Majors</li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Premium Entertainment Channels</h3>
            <p className="mb-6">
              Access the latest shows, movies, and exclusive content from premium networks. Our entertainment package includes:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>HBO, Showtime, and Starz networks</li>
              <li>Netflix, Disney+, and Amazon Prime content</li>
              <li>AMC, FX, and TNT series</li>
              <li>Lifetime, Hallmark, and Discovery channels</li>
              <li>Comedy Central, MTV, and VH1</li>
            </ul>

            <h3 className="text-xl font-bold mb-3">International Channels</h3>
            <p className="mb-6">
              Stay connected to your culture with our vast selection of international channels:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>European channels from UK, France, Germany, Italy, and Spain</li>
              <li>Asian channels from India, China, Japan, and Korea</li>
              <li>Middle Eastern channels in Arabic and Persian</li>
              <li>Latin American channels in Spanish and Portuguese</li>
              <li>African channels covering multiple regions</li>
            </ul>

            <h3 className="text-xl font-bold mb-3">News and Documentary</h3>
            <p className="mb-6">
              Stay informed with 24/7 access to global news networks and documentary channels:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>CNN, BBC, Fox News, and MSNBC</li>
              <li>Al Jazeera, RT, and France 24</li>
              <li>National Geographic and Discovery channels</li>
              <li>History Channel and Science Channel</li>
              <li>Local news networks from various regions</li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Kids and Family Entertainment</h3>
            <p className="mb-6">
              Keep the whole family entertained with our child-friendly channels:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Disney Channel and Nickelodeon</li>
              <li>Cartoon Network and Boomerang</li>
              <li>PBS Kids and Baby TV</li>
              <li>Educational content and documentaries</li>
              <li>Family-friendly movies and shows</li>
            </ul>

            <div className="bg-[#F97316]/10 p-6 rounded-lg border-2 border-[#F97316] mb-8">
              <h3 className="text-xl font-bold mb-3">Why Choose Our IPTV Service?</h3>
              <ul className="list-disc pl-6">
                <li>40,000+ live channels and VOD content</li>
                <li>HD and 4K streaming quality</li>
                <li>99.9% uptime and reliable service</li>
                <li>24/7 customer support</li>
                <li>Compatible with all devices</li>
                <li>Affordable pricing plans</li>
                <li>Regular channel updates</li>
                <li>Anti-freeze technology</li>
              </ul>
            </div>

            <div className="text-center">
              <a 
                href="/free-trial" 
                className={cn(
                  "inline-block px-8 py-4 text-lg font-bold text-white",
                  "bg-[#F97316] hover:bg-[#F97316]/90 transition-colors",
                  "rounded-lg shadow-lg transform hover:-translate-y-1"
                )}
              >
                Start Your Free Trial Today
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default Channels;