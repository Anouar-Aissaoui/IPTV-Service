import { SEOContent } from "@/components/SEOContent";
import { Navigation } from "@/components/Navigation";
import { FAQ as FAQSection } from "@/components/FAQ";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-dark-gray text-white">
      <SEOContent />
      <Navigation />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <article className="prose prose-invert max-w-none mb-12" itemScope itemType="https://schema.org/FAQPage">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/90">
            Your Complete IPTV FAQ Guide
          </h1>
          
          <div className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            <p className="mb-6">
              Get instant answers to all your questions about our premium IPTV service. From technical setup to content availability, we've got you covered.
            </p>
          </div>

          <div className="mt-16">
            <FAQSection />
          </div>

          <section className="mt-20 text-gray-300">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
              Understanding Your IPTV Service
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="bg-dark-gray/30 backdrop-blur-sm border border-primary/10 rounded-xl p-8 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Premium Content Access
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our IPTV service provides access to over 40,000 channels and a vast library of on-demand content. Enjoy everything from live sports to the latest movies in stunning HD and 4K quality.
                </p>
              </div>

              <div className="bg-dark-gray/30 backdrop-blur-sm border border-primary/10 rounded-xl p-8 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Seamless Streaming Experience
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  With our optimized streaming technology, enjoy buffer-free playback across all your devices. Our service supports Smart TVs, smartphones, tablets, and streaming devices.
                </p>
              </div>

              <div className="bg-dark-gray/30 backdrop-blur-sm border border-primary/10 rounded-xl p-8 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  24/7 Customer Support
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our dedicated support team is available around the clock to help you with any questions or technical issues. Experience premium service with premium support.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)]"></div>
      </div>
    </div>
  );
};

export default FAQ;