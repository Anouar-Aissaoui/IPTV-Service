import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const IPTVFAQs = () => {
  const faqs = [
    {
      question: "What devices are compatible with your IPTV service?",
      answer: "Our IPTV service works with Smart TVs, Android boxes, iOS/Android devices, MAG devices, Fire TV Stick, and more."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes, we offer a 24-hour money-back guarantee if you're not satisfied with our service."
    },
    {
      question: "How reliable is your streaming service?",
      answer: "We maintain 99.9% uptime with our premium servers and provide anti-buffering technology for smooth streaming."
    },
    {
      question: "Can I watch in multiple locations?",
      answer: "Yes, our service supports multiple concurrent connections depending on your subscription plan."
    }
  ];

  return (
    <section className="py-8 px-4 bg-dark/50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
              <AccordionTrigger className="text-white hover:text-neon">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};