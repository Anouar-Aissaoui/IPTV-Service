import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faq.questions.devices.question"),
      answer: t("faq.questions.devices.answer"),
    },
    {
      question: t("faq.questions.simultaneous.question"),
      answer: t("faq.questions.simultaneous.answer"),
    },
    {
      question: t("faq.questions.guarantee.question"),
      answer: t("faq.questions.guarantee.answer"),
    },
    {
      question: t("faq.questions.payment.question"),
      answer: t("faq.questions.payment.answer"),
    },
  ];

  return (
    <div id="faq-section" className="bg-dark py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("faq.title")} <span className="text-neon">Questions</span>
        </h2>
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
                  <div itemProp="text">
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