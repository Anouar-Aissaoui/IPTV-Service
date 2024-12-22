import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What devices can I use with your IPTV service?",
    answer:
      "Our IPTV service is compatible with a wide range of devices including Smart TVs (Samsung, LG, Android TV), smartphones (iOS/Android), tablets, computers, and streaming devices like Amazon Fire Stick, Apple TV, and Android TV boxes.",
  },
  {
    question: "How many devices can I use simultaneously?",
    answer:
      "Depending on your subscription plan, you can stream on 1-4 devices simultaneously. Our premium plans allow for multiple concurrent streams, perfect for families or sharing with friends.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all our subscription plans. If you're not completely satisfied with our service, simply contact our support team within 30 days of purchase for a full refund.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various cryptocurrency payments for your convenience and security.",
  },
  {
    question: "What's the streaming quality like?",
    answer:
      "We offer HD and 4K quality streams depending on the channel and your internet connection. Most channels are available in full HD (1080p), with select content available in 4K UHD quality.",
  },
  {
    question: "Do I need a VPN with your service?",
    answer:
      "While our service works without a VPN, we recommend using one for enhanced privacy and security. This also helps ensure stable connections and access to geo-restricted content.",
  },
];

export const FAQ = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked <span className="text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text">Questions</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-dark-gray/30 backdrop-blur-sm border border-primary/10 rounded-xl px-6 hover:border-primary/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-white hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};