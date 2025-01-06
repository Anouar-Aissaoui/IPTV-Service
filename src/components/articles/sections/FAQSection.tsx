import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What makes a good IPTV service provider?",
    answer: "A quality IPTV service provider offers stable streaming, extensive channel selection, HD/4K quality, reliable customer support, and competitive pricing."
  },
  {
    question: "Which devices support IPTV services?",
    answer: "Most IPTV services are compatible with Android TV boxes, Amazon Fire Stick, Smart TVs, smartphones, tablets, and computers."
  },
  {
    question: "What internet speed do I need for IPTV?",
    answer: "For optimal IPTV streaming, we recommend at least 25 Mbps for 4K content and 10 Mbps for HD content."
  },
  {
    question: "Are IPTV services legal?",
    answer: "Legal IPTV services must have proper licensing agreements for content distribution. Always verify the legitimacy of any service before subscribing."
  }
];

export const FAQSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black/40 p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};