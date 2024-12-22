import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Channel {
  channel: string;
  url: string;
  status: string;
}

export const ChannelList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: channels, isLoading } = useQuery({
    queryKey: ["channels"],
    queryFn: async () => {
      const response = await fetch("https://iptv-org.github.io/api/streams.json");
      const data = await response.json();
      return data.slice(0, 100); // Limiting to first 100 channels for better performance
    },
  });

  const filteredChannels = channels?.filter((channel: Channel) =>
    channel.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-neon" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search channels..."
          className="pl-10 bg-dark-gray border-gray-800 focus:border-neon"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="relative">
        <div className="absolute -inset-1 bg-neon/30 rounded-lg blur-md"></div>
        <ScrollArea className="h-[600px] rounded-lg border border-gray-800 relative bg-dark-gray">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-dark-gray/50">
                <TableHead className="text-neon font-bold">Channel Name</TableHead>
                <TableHead className="text-neon font-bold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredChannels?.map((channel: Channel, index: number) => (
                <TableRow 
                  key={index}
                  className="hover:bg-dark-gray/50 transition-colors"
                >
                  <TableCell className="font-medium text-white">
                    {channel.channel}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      channel.status === 'online' 
                        ? 'bg-green-500/20 text-green-500' 
                        : 'bg-red-500/20 text-red-500'
                    }`}>
                      {channel.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
};