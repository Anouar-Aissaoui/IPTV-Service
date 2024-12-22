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
    <div className="bg-dark py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked <span className="text-neon">Questions</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-dark-gray rounded-lg px-6"
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};