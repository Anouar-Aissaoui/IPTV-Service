import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQContent } from "@/types/page-content";

interface FAQProps {
  content?: FAQContent;
}

export const FAQ: React.FC<FAQProps> = ({ content }) => {
  const faqs = content?.questions || [];

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div id="faq-section" className="bg-dark py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked <span className="text-neon">Questions</span>
        </h2>
        <div className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">
          <p>
            Find answers to common questions about our premium IPTV service, including device compatibility,
            channel listings, streaming quality, and technical support options.
          </p>
        </div>
        <div itemScope itemType="https://schema.org/FAQPage">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-dark border border-neon/20 rounded-lg px-6 hover:border-neon/40 transition-colors duration-300"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger 
                  className="text-left text-white hover:text-neon"
                  itemProp="name"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-gray-400"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text" className="leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </div>
    </div>
  );
};
