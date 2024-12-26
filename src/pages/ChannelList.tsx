import { LiveSports } from "@/components/LiveSports";
import Hero from "@/components/Hero";

const ChannelList = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <LiveSports />
    </div>
  );
};

export default ChannelList;