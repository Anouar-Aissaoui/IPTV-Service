import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("buyer_info").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
          selected_plan: "Contact Form Submission",
        },
      ]);

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-neon">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our IPTV service? We're here to help! Contact our
            support team for quick assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 p-8 bg-dark-gray rounded-xl border border-neon/20">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-neon w-6 h-6" />
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-400">support@iptvsubscription.news</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="text-neon w-6 h-6" />
                <div>
                  <h3 className="text-white font-medium">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MessageCircle className="text-neon w-6 h-6" />
                <div>
                  <h3 className="text-white font-medium">Live Chat</h3>
                  <p className="text-gray-400">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="text-neon w-6 h-6" />
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-400">United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-dark-gray rounded-xl border border-neon/20">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Send us a Message
            </h2>
            
            <div className="space-y-4">
              <Input
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
                className="bg-dark border-neon/20 text-white"
              />
              
              <Input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-dark border-neon/20 text-white"
              />
              
              <Input
                type="tel"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="bg-dark border-neon/20 text-white"
              />
              
              <Textarea
                placeholder="Your Message *"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="bg-dark border-neon/20 text-white min-h-[150px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-neon text-dark hover:bg-neon/90"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;