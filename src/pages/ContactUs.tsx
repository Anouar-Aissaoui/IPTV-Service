import { Contact } from "@/components/Contact";
import Hero from "@/components/Hero";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Get in Touch with <span className="text-neon">Our Support Team</span>
          </h1>
          <p className="text-gray-400 text-lg mb-12 text-center">
            We're here to help! Our dedicated support team is available 24/7 to assist you with any questions or concerns.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dark-gray p-6 rounded-lg border border-neon/20 hover:border-neon/40 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-neon">WhatsApp Support</h3>
              <p className="text-gray-400 mb-4">
                Get instant support through WhatsApp. Our team typically responds within minutes.
              </p>
              <a 
                href="https://wa.me/your_number_here" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-neon hover:text-neon/80 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact on WhatsApp
              </a>
            </div>
            
            <div className="bg-dark-gray p-6 rounded-lg border border-neon/20 hover:border-neon/40 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-neon">Email Support</h3>
              <p className="text-gray-400 mb-4">
                Send us an email for detailed inquiries. We'll get back to you within 24 hours.
              </p>
              <a 
                href="mailto:support@iptvservice.site" 
                className="inline-flex items-center text-neon hover:text-neon/80 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email Support Team
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactUs;