import { Helmet } from "react-helmet";
import { FAQ as FAQComponent } from "@/components/FAQ";
import { Navigation } from "@/components/navigation/Navigation";

const FAQ = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      <Helmet>
        <title>Frequently Asked Questions | IPTV Service</title>
        <meta 
          name="description" 
          content="Find answers to common questions about our IPTV service, including technical support, channel listings, and subscription details."
        />
        <link rel="canonical" href="https://www.iptvservice.site/faq" />
      </Helmet>

      <Navigation onScrollToSection={handleScrollToSection} />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked <span className="text-neon">Questions</span>
        </h1>
        <FAQComponent />
      </div>
    </div>
  );
};

export default FAQ;