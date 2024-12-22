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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 animate-fade-in text-center">
            Frequently Asked Questions About{" "}
            <span className="text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text">
              IPTV Service
            </span>
          </h1>
          
          <div className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            <p className="mb-6">
              Looking to <a href="https://www.iptvservice.site/" className="text-primary hover:text-white transition-colors" rel="dofollow">buy IPTV subscription</a>? 
              Our comprehensive FAQ guide answers all your questions about our premium IPTV service.
            </p>
          </div>

          <div className="mt-16">
            <FAQSection />
          </div>

          <section className="mt-20 text-gray-300">
            <h2 className="text-3xl font-bold mb-8 text-white">
              Complete Guide to Understanding IPTV Services
            </h2>

            <div className="space-y-6">
              <p>
                When it comes to choosing the best <a href="https://www.iptvservice.site/" className="text-primary hover:text-white transition-colors" rel="dofollow">IPTV service</a>, understanding how our FAQ section can help you make an informed decision is crucial. Our comprehensive FAQ guide covers everything you need to know about premium IPTV subscriptions, from technical requirements to channel availability and streaming quality.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8">Why Our IPTV Service FAQ Matters</h3>
              <p>
                Our FAQ section is designed to provide detailed insights into our premium IPTV subscription service. Whether you're new to IPTV or looking to switch providers, our carefully curated questions and answers will help you understand the benefits of choosing our service. From device compatibility to content availability, we've covered all aspects of our IPTV streaming solution.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8">Technical Requirements and Setup</h3>
              <p>
                Understanding the technical aspects of IPTV is essential for optimal performance. Our FAQ section thoroughly explains internet speed requirements, compatible devices, and step-by-step setup instructions. We ensure you have all the information needed to start streaming your favorite channels in crystal-clear HD and 4K quality.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8">Content and Channel Information</h3>
              <p>
                Discover our extensive channel lineup through our FAQ section. We provide detailed information about our 40,000+ channels, including sports, entertainment, news, and international programming. Learn about our VOD service featuring over 54,000 movies and TV shows, all available with your IPTV subscription.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8">Subscription and Payment Details</h3>
              <p>
                Our FAQ addresses common questions about subscription plans, payment methods, and account management. We believe in transparency, which is why we provide clear information about our flexible pricing options and the features included in each subscription tier.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8">Customer Support and Troubleshooting</h3>
              <p>
                Learn about our dedicated customer support system through our FAQ. We provide comprehensive troubleshooting guides and explain how our 24/7 support team can assist you with any technical issues or questions about your IPTV service.
              </p>

              <div className="bg-dark-gray/50 p-8 rounded-xl border border-primary/20 mt-12">
                <h4 className="text-xl font-semibold text-white mb-4">Ready to Experience Premium IPTV?</h4>
                <p>
                  Our FAQ section is regularly updated to address new questions and provide the latest information about our IPTV service. If you're ready to enjoy unlimited entertainment with our premium IPTV subscription, explore our comprehensive FAQ section to learn more about what makes us the best IPTV service provider.
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