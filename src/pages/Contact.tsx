import { ContactForm } from "@/components/ContactForm";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-dark text-white">
      <Helmet>
        <title>{t('pages.contact.title')}</title>
        <meta name="description" content={t('pages.contact.description')} />
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
          Contact <span className="text-neon">Us</span>
        </h1>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;