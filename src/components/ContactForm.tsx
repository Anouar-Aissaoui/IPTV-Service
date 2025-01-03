import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-dark-gray border-neon/20 focus:border-neon"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-dark-gray border-neon/20 focus:border-neon"
        />
      </div>
      <div>
        <Input
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-dark-gray border-neon/20 focus:border-neon"
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-dark-gray border-neon/20 focus:border-neon min-h-[150px]"
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
  );
};