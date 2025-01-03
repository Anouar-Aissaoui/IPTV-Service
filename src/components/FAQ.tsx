import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of devices are supported?",
    answer:
      "Our service supports a wide range of devices including Smart TVs, smartphones, tablets, and computers. You can watch on any device with an internet connection.",
  },
  {
    question: "How many devices can I watch on simultaneously?",
    answer:
      "Depending on your subscription plan, you can watch on 1-4 devices simultaneously. Check our pricing plans for specific details.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and cryptocurrency payments.",
  },
];

export const FAQ = () => {
  return (
    <div id="faq-section" className="bg-dark py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 brutal-text transform -rotate-2">
          Frequently Asked <span className="text-neon">Questions</span>
        </h2>
        <div itemScope itemType="https://schema.org/FAQPage">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-dark brutal-border brutal-shadow brutal-hover px-6 transform hover:-rotate-1"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger 
                  className="text-left text-white hover:text-neon brutal-text"
                  itemProp="name"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-gray-400 brutal-text"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div itemProp="text" className="transform rotate-1">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};