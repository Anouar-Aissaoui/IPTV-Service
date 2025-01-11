import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Headset, Mail, MessageSquare, Phone } from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { SEOOptimizer } from "@/components/seo/SEOOptimizer";

const Support = () => {
  const { toast } = useToast();
  const whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello, I need support with my IPTV subscription.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <SEOOptimizer
        title="24/7 IPTV Support - Customer Service & Technical Assistance"
        description="Get instant IPTV support through live chat, WhatsApp, email, or phone. Our technical team is available 24/7 to help with your streaming service needs."
        keywords={["iptv support", "technical support", "customer service", "streaming help", "24/7 support", "iptv assistance"]}
        type="support"
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            24/7 Customer Support
          </h1>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 flex flex-col items-center text-center space-y-4">
              <Headset className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Live Support</h3>
              <p className="text-muted-foreground">Available 24/7 for technical assistance</p>
              <Button variant="outline">Chat Now</Button>
            </Card>
            
            <Card className="p-6 flex flex-col items-center text-center space-y-4">
              <Mail className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Email Support</h3>
              <p className="text-muted-foreground">support@iptvservice.site</p>
              <Button variant="outline" onClick={() => window.location.href = 'mailto:support@iptvservice.site'}>
                Send Email
              </Button>
            </Card>
            
            <Card className="p-6 flex flex-col items-center text-center space-y-4">
              <MessageSquare className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">WhatsApp Support</h3>
              <p className="text-muted-foreground">Quick responses via WhatsApp</p>
              <Button variant="outline" onClick={() => window.open(whatsappUrl, '_blank')}>
                WhatsApp
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your issue..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>

          {/* FAQ Section */}
          <FAQ />
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Support;