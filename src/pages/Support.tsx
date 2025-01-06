import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Headset, Mail, MessageSquare, Phone } from "lucide-react";
import { FAQ } from "@/components/FAQ";

const Support = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
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
            <Button variant="outline">Send Email</Button>
          </Card>
          
          <Card className="p-6 flex flex-col items-center text-center space-y-4">
            <MessageSquare className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">WhatsApp Support</h3>
            <p className="text-muted-foreground">Quick responses via WhatsApp</p>
            <Button variant="outline">WhatsApp</Button>
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
  );
};

export default Support;