import React from "react";
import { useTranslation } from "react-i18next";
import { BlurImage } from "./ui/blur-image";

const channels = [
  {
    name: "Channel 1",
    logo: "https://example.com/logo1.png",
    description: "Description for Channel 1",
  },
  {
    name: "Channel 2",
    logo: "https://example.com/logo2.png",
    description: "Description for Channel 2",
  },
  {
    name: "Channel 3",
    logo: "https://example.com/logo3.png",
    description: "Description for Channel 3",
  },
  {
    name: "Channel 4",
    logo: "https://example.com/logo4.png",
    description: "Description for Channel 4",
  },
  // Add more channels as needed
];

const LiveChannels: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-dark py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="mb-12 transform -rotate-2">
          <h2 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-neon text-dark px-6 py-3 brutal-border brutal-shadow">
            {t("live.channels")} <span className="text-white bg-dark px-2">{t("live.tv")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="group relative transform transition-transform duration-200 hover:-translate-y-1 hover:translate-x-1"
            >
              <div className="brutal-border brutal-shadow bg-dark">
                <BlurImage
                  src={channel.logo}
                  alt={channel.name}
                  width={300}
                  height={169}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <h3 className="text-brutal-lg text-white brutal-text transform -rotate-1">
                    {channel.name}
                  </h3>
                  <p className="text-brutal-base text-gray-400 mt-2 transform rotate-1">
                    {channel.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Neo-brutalist decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-neon brutal-border transform rotate-12 hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-dark brutal-border brutal-shadow transform -rotate-12 hidden lg:block" />
    </div>
  );
};

export default LiveChannels;
