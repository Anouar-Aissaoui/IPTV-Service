import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <div className="bg-dark py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Have Questions? <span className="text-neon">Contact us</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          If you're having any questions or need help, don't hesitate to contact
          our team. We're here to help 24/7.
        </p>
        <Button className="bg-neon text-dark hover:bg-neon/90 text-lg px-8 py-6">
          <MessageCircle className="mr-2" /> Contact Support
        </Button>
      </div>
    </div>
  );
};