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
      "Our premium IPTV service supports a wide range of devices including Smart TVs (Samsung, LG, Android TV), smartphones (iOS and Android), tablets, Amazon Fire Stick, MAG devices, Formuler boxes, and computers. You can watch your favorite content in HD and 4K quality on any device with an internet connection.",
  },
  {
    question: "How many devices can I watch on simultaneously?",
    answer:
      "Depending on your subscription plan, you can watch on 1-4 devices simultaneously. Our premium multi-screen IPTV packages allow flexible viewing options for the whole family. Check our pricing plans for specific details about concurrent streaming limits.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes, we offer a comprehensive 30-day money-back guarantee if you're not completely satisfied with our IPTV streaming service. This risk-free trial period allows you to test our extensive channel lineup and streaming quality.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and cryptocurrency payments for our IPTV subscription packages. All transactions are secure and processed through encrypted payment gateways.",
  },
  {
    question: "What channels are included in the IPTV package?",
    answer:
      "Our IPTV service includes over 40,000 live channels from around the world, featuring premium sports channels, entertainment networks, news broadcasts, and educational content. You'll get access to USA, UK, Canadian, and international channels in HD and 4K quality.",
  },
  {
    question: "Is there a channel guide or EPG available?",
    answer:
      "Yes, we provide a comprehensive Electronic Program Guide (EPG) with our IPTV service. The guide shows program schedules up to 7 days in advance for most channels, making it easy to plan your viewing and never miss your favorite shows.",
  },
  {
    question: "What internet speed do I need for HD streaming?",
    answer:
      "For optimal HD IPTV streaming, we recommend a minimum internet speed of 10 Mbps. For 4K content streaming, a connection speed of 25 Mbps or higher is recommended to ensure smooth playback without buffering.",
  },
  {
    question: "Do you provide technical support?",
    answer:
      "Yes, we offer 24/7 technical support for all our IPTV subscribers. Our experienced support team can help with installation, troubleshooting, and any other questions about your IPTV service via live chat, email, or WhatsApp.",
  },
  {
    question: "Can I record live TV or use catch-up features?",
    answer:
      "Yes, our IPTV service includes catch-up TV features allowing you to watch programs that aired in the last 7 days. Some channels also support DVR functionality, letting you record your favorite shows for later viewing.",
  },
  {
    question: "Are regular updates included with the subscription?",
    answer:
      "Yes, we continuously update our channel lineup, add new features, and optimize streaming quality. All updates are included in your subscription, ensuring you always have access to the latest content and improvements.",
  },
];

export const FAQ = () => {
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