import { SEOContent } from "@/components/SEOContent";
import { Navigation } from "@/components/Navigation";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-dark-gray text-white">
      <SEOContent />
      <Navigation />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
            Get in Touch
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Have questions about our IPTV service? Our team is here to help you 24/7. 
            Choose your preferred way to reach us.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-dark-gray/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Email Us</h3>
                </div>
                <p className="text-gray-300">
                  support@iptvservice.com<br />
                  Available 24/7 for your inquiries
                </p>
              </div>

              <div className="bg-dark-gray/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Call Us</h3>
                </div>
                <p className="text-gray-300">
                  +1 (555) 123-4567<br />
                  Mon-Sun: 9:00 AM - 8:00 PM EST
                </p>
              </div>

              <div className="bg-dark-gray/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Live Chat</h3>
                </div>
                <p className="text-gray-300">
                  Chat with our support team<br />
                  Response time: Under 5 minutes
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-dark-gray/30 backdrop-blur-sm border border-primary/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-dark-gray/50 border-primary/20 text-white placeholder:text-gray-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-dark-gray/50 border-primary/20 text-white placeholder:text-gray-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="bg-dark-gray/50 border-primary/20 text-white placeholder:text-gray-500 min-h-[120px]"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 font-bold shadow-lg shadow-primary/30 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Our Support?</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-dark-gray/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">24/7 Availability</h4>
                <p className="text-gray-300">Round-the-clock support for all your IPTV needs</p>
              </div>
              <div className="bg-dark-gray/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">Quick Response</h4>
                <p className="text-gray-300">Get answers to your questions within minutes</p>
              </div>
              <div className="bg-dark-gray/30 backdrop-blur-sm border border-primary/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-primary mb-2">Expert Team</h4>
                <p className="text-gray-300">Knowledgeable staff ready to assist you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)]"></div>
      </div>
    </div>
  );
};

export default Contact;