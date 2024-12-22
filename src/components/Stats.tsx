export const Stats = () => {
  return (
    <div className="bg-dark-gray py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-neon">+7K</div>
            <div className="text-gray-400">Live Channels</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-neon">+40K</div>
            <div className="text-gray-400">Movies</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-neon">+1,500</div>
            <div className="text-gray-400">TV Shows</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-neon">+54K</div>
            <div className="text-gray-400">Watch Hours</div>
          </div>
        </div>
      </div>
    </div>
  );
};