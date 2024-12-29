import * as React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { BlurImage } from "./ui/blur-image";
import { BuyerInfoDialog } from "./BuyerInfoDialog";
import { Navigation } from "./navigation/Navigation";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState("");
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/R5IYJF3GG635D1', '_blank');
  };

  const handleTrialClick = () => {
    setSelectedPlan("Free Trial");
    setIsDialogOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-dark">
      <Navigation onScrollToSection={scrollToSection} />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              {t('hero.title')}
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
              Welcome to the future of television streaming with our premium IPTV service. As the leading IPTV service provider in the USA, we offer an unparalleled streaming experience with over 40,000 live TV channels and premium content in stunning HD quality. Whether you're looking to buy IPTV for entertainment, sports, or international content, our affordable IPTV subscription packages cater to all your streaming needs.
            </p>
            
            <div className="relative w-full max-w-[280px] mx-auto lg:mx-0 animate-float">
              <div className="absolute -inset-1 bg-[#F97316]/20 rounded-lg blur-sm"></div>
              <BlurImage 
                src="/devices.png"
                alt="Supported Devices"
                className="relative w-full h-auto hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 240px, 280px"
                width={280}
                height={160}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleTrialClick}
                className="bg-[#F97316] text-white hover:bg-[#F97316]/90 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 font-bold shadow-lg shadow-[#F97316]/30 transform hover:scale-105 transition-all duration-300 animate-pulse w-full sm:w-auto"
              >
                {t('hero.cta.trial')}
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-dark border-2 border-[#F97316] text-white hover:bg-[#F97316] hover:text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('hero.cta.contact')}
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative max-w-[480px] mx-auto transform hover:scale-105 transition-duration-300">
              <div className="absolute -inset-1 bg-[#F97316]/30 rounded-lg blur"></div>
              <BlurImage
                src="/iptv-subscription.png"
                alt="IPTV Service Preview"
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                width={480}
                height={320}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-dark border border-[#F97316]/20 p-4 md:p-6 rounded-xl hover:border-[#F97316] hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-white">+7K</div>
            <div className="text-[#F97316] text-xs md:text-sm font-semibold">{t('stats.customers')}</div>
          </div>
          <div className="bg-dark border border-[#F97316]/20 p-4 md:p-6 rounded-xl hover:border-[#F97316] hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-white">+40K</div>
            <div className="text-[#F97316] text-xs md:text-sm font-semibold">{t('stats.channels')}</div>
          </div>
          <div className="bg-dark border border-[#F97316]/20 p-4 md:p-6 rounded-xl hover:border-[#F97316] hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-white">+1,500</div>
            <div className="text-[#F97316] text-xs md:text-sm font-semibold">{t('stats.sports')}</div>
          </div>
          <div className="bg-dark border border-[#F97316]/20 p-4 md:p-6 rounded-xl hover:border-[#F97316] hover:scale-105 transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-white">+54K</div>
            <div className="text-[#F97316] text-xs md:text-sm font-semibold">{t('stats.vod')}</div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)]"></div>
      </div>

      <BuyerInfoDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};

export default Hero;