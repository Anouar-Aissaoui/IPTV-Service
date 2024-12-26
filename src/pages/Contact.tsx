import { ContactForm } from "@/components/ContactForm";
import { SEOContent } from "@/components/SEOContent";

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Contact <span className="text-neon">Us</span>
        </h1>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
      <SEOContent />
    </div>
  );
};

export default Contact;