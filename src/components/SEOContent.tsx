import { Helmet } from "react-helmet";

export const SEOContent = () => {
  // Enhanced Schema.org structured data for IPTV service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Premium IPTV Subscription Service",
    "description": "High-quality IPTV service offering 40,000+ channels and 54,000+ VOD content in 4K & HD quality",
    "brand": {
      "@type": "Brand",
      "name": "Premium IPTV Service"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "14.99",
      "highPrice": "59.99",
      "offerCount": "4",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    },
    "image": "https://iptvsubscription.news/og-image.png",
    "url": "https://iptvsubscription.news",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Number of Channels",
        "value": "40000+"
      },
      {
        "@type": "PropertyValue",
        "name": "VOD Content",
        "value": "54000+"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Premium IPTV Subscription | Best USA IPTV Service 2024 - 4K & HD</title>
        <meta name="description" content="Get premium IPTV subscription with 40,000+ channels and VOD content in 4K & HD quality. Best IPTV provider in USA with 24/7 support." />
        <meta name="keywords" content="IPTV subscription, buy IPTV, best IPTV service, 4K IPTV, HD channels, USA IPTV, streaming service" />
        <link rel="canonical" href="https://iptvsubscription.news" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-dark-gray py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-5xl font-bold mb-10 text-white bg-gradient-to-r from-neon to-white bg-clip-text text-transparent">
              Best IPTV Subscription Service
            </h1>
            
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-neon">
                Ultimate Guide to Premium IPTV Service in 2024
              </h2>
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Looking for the best IPTV service in 2024? Our premium IPTV subscription offers an unparalleled streaming experience with over 40,000 channels and 54,000+ VOD content in stunning 4K and HD quality. Whether you're a sports enthusiast, movie buff, or TV show fanatic, our comprehensive IPTV service delivers entertainment right to your preferred device.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-6 text-white border-l-4 border-neon pl-4">
                Why Choose Our IPTV Subscription?
              </h3>
              
              <ul className="list-none pl-6 text-gray-300 mb-8 space-y-4">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  <span>Extensive Content Library: Access to 40,000+ live channels and 54,000+ movies and TV shows</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  <span>Premium Quality: Crystal clear 4K and HD streaming quality</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  <span>Multi-device Support: Watch on Smart TV, Android, iOS, Windows, and more</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  <span>24/7 Customer Support: Round-the-clock technical assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full"></span>
                  <span>99.9% Uptime: Reliable service with minimal interruptions</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-6 text-white border-l-4 border-neon pl-4">
                How to Get Started with Your IPTV Subscription
              </h3>
              
              <ol className="list-none pl-6 text-gray-300 mb-8 space-y-4 counter-reset-item">
                {[
                  "Choose your preferred subscription plan (1 month, 3 months, 6 months, or 12 months)",
                  "Complete the secure payment process",
                  "Receive instant activation credentials via email",
                  "Download our IPTV app or use with your favorite IPTV player",
                  "Start enjoying thousands of channels and VOD content"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neon text-dark font-bold">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-6 text-white border-l-4 border-neon pl-4">
                Features of Our IPTV Service
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-dark-gray/50 p-8 rounded-xl border border-neon/20 hover:border-neon/40 transition-colors">
                  <h4 className="text-2xl font-semibold mb-6 text-white">
                    Compatible Devices
                  </h4>
                  <ul className="list-none space-y-3 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-neon rounded-full"></span>
                      <span>Smart TVs (Samsung, LG, Android TV)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-neon rounded-full"></span>
                      <span>Mobile devices (iOS and Android)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-neon rounded-full"></span>
                      <span>Streaming devices (Fire Stick, Apple TV, Roku)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-neon rounded-full"></span>
                      <span>Computers (Windows and Mac)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-neon rounded-full"></span>
                      <span>Gaming consoles</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-dark-gray/50 p-8 rounded-xl border border-neon/20 hover:border-neon/40 transition-colors">
                  <h4 className="text-2xl font-semibold mb-6 text-white">
                    Premium Features
                  </h4>
                  <ul className="list-none space-y-3 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-neon rounded-full"></span>
                      <span>Electronic Program Guide (EPG)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-neon rounded-full"></span>
                      <span>Catch-up TV functionality</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-neon rounded-full"></span>
                      <span>Multi-language support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-neon rounded-full"></span>
                      <span>PPV events included</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-neon rounded-full"></span>
                      <span>Regular content updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-dark-gray to-dark p-8 rounded-xl border border-neon/20 hover:border-neon/40 transition-colors text-center">
              <h4 className="text-2xl font-semibold mb-4 text-neon">Ready to Experience Premium IPTV?</h4>
              <p className="text-gray-300 text-lg">
                Start your journey with our risk-free trial and discover why thousands of customers trust us as their IPTV service provider. Join the streaming revolution today!
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};