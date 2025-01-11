import React from "react";
import { Play } from "lucide-react";
import { FixedSizeGrid } from 'react-window';
import { useWindowSize } from "@/hooks/use-mobile";
import { ErrorBoundary } from "./ErrorBoundary";

const channels = [
  {
    title: "ESPNU",
    image: "https://www.popcornmovies.to/uploads/poster/APkbKRIvMh.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "Watch live college sports and events on ESPNU",
    width: 300,
    height: 450
  },
  {
    title: "ESPN",
    image: "https://www.popcornmovies.to/uploads/poster/mO23pg6gzk.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "The worldwide leader in sports broadcasting",
    width: 300,
    height: 450
  },
  {
    title: "NBA TV",
    image: "https://www.popcornmovies.to/uploads/poster/iHhVGaE80u.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "24/7 basketball coverage and live NBA games",
    width: 300,
    height: 450
  },
  {
    title: "NFL Network",
    image: "https://www.popcornmovies.to/uploads/poster/A8wOWJX0My.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "Complete NFL coverage and exclusive content",
    width: 300,
    height: 450
  },
  {
    title: "HBO 2 East",
    image: "https://www.popcornmovies.to/uploads/poster/6vf1aSr7gt.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "Premium entertainment and exclusive HBO content",
    width: 300,
    height: 450
  },
  {
    title: "HBO East",
    image: "https://www.popcornmovies.to/uploads/poster/G67HiKK1Nf.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "Original HBO series, movies, and specials",
    width: 300,
    height: 450
  },
  {
    title: "Fox Sports 1",
    image: "https://www.popcornmovies.to/uploads/poster/AyLTRoIo55.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "Live sports coverage and analysis on FS1",
    width: 300,
    height: 450
  },
  {
    title: "National Geographic",
    image: "https://www.popcornmovies.to/uploads/poster/mHrOgAZU75.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "World-class documentaries and educational content",
    width: 300,
    height: 450
  },
];

const ChannelCard = React.lazy(() => import("./MovieCard"));

const LoadingCard = () => (
  <div className="aspect-[2/3] bg-gray-800 animate-pulse border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]">
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  </div>
);

const Cell = ({ columnIndex, rowIndex, style, data }: any) => {
  const index = rowIndex * data.columnCount + columnIndex;
  if (index >= channels.length) return null;
  
  return (
    <div style={style}>
      <ErrorBoundary fallback={<div className="text-red-500">Error loading channel</div>}>
        <React.Suspense fallback={<LoadingCard />}>
          <div className="transform transition-transform duration-200 hover:-translate-y-1 hover:translate-x-1">
            <ChannelCard movie={channels[index]} />
          </div>
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
};

const LiveChannels = () => {
  const { width } = useWindowSize();

  const columnCount = width < 640 ? 2 : 
                     width < 768 ? 3 : 
                     width < 1024 ? 4 : 
                     width < 1280 ? 5 : 6;
  
  const rowCount = Math.ceil(channels.length / columnCount);
  const itemSize = Math.min(300, (width - 32) / columnCount);

  return (
    <section className="bg-dark py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative brutal-container">
        <div className="mb-8 md:mb-12 transform -rotate-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center brutal-text inline-block bg-[#F97316] text-dark px-4 md:px-6 py-2 md:py-3 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Live <span className="text-white bg-dark px-2">Channels</span>
          </h2>
        </div>
        
        <ErrorBoundary fallback={<div className="text-red-500">Error loading grid</div>}>
          <FixedSizeGrid
            columnCount={columnCount}
            columnWidth={itemSize}
            height={Math.min(600, rowCount * itemSize)}
            rowCount={rowCount}
            rowHeight={itemSize}
            width={width - 32}
            itemData={{ columnCount }}
          >
            {Cell}
          </FixedSizeGrid>
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default LiveChannels;
