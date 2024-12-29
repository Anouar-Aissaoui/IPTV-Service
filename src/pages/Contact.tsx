import { ContactForm } from "@/components/ContactForm";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-dark text-white">
      <Helmet>
        <title>{t('contact.title')} | {t('meta.title')}</title>
        <meta name="description" content={t('contact.description')} />
        <html lang={i18n.language} />
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site/en/contact" />
        <link rel="alternate" hrefLang="es" href="https://www.iptvservice.site/es/contact" />
        <link rel="alternate" hrefLang="de" href="https://www.iptvservice.site/de/contact" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr/contact" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iptvservice.site/contact" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <Menubar className="mb-8 bg-dark border-[#F97316] text-white">
          <MenubarMenu>
            <MenubarTrigger className="text-white hover:text-[#F97316]">Navigation</MenubarTrigger>
            <MenubarContent className="bg-dark border-[#F97316]">
              <MenubarItem className="text-white hover:text-[#F97316] hover:bg-white/10">
                <Link to="/" className="w-full">Home</Link>
              </MenubarItem>
              <MenubarItem className="text-white hover:text-[#F97316] hover:bg-white/10">
                <Link to="/contact" className="w-full">Contact</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-white hover:text-[#F97316]">Help</MenubarTrigger>
            <MenubarContent className="bg-dark border-[#F97316]">
              <MenubarItem className="text-white hover:text-[#F97316] hover:bg-white/10">
                <a href="https://wa.me/message/R5IYJF3GG635D1" target="_blank" rel="noopener noreferrer" className="w-full">
                  WhatsApp Support
                </a>
              </MenubarItem>
              <MenubarItem className="text-white hover:text-[#F97316] hover:bg-white/10">
                <Link to="/contact" className="w-full">Contact Support</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-neon">{t('contact.title')}</span>
        </h1>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;