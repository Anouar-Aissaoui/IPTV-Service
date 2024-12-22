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
import { Loader2 } from "lucide-react";

interface Channel {
  channel: string;
  url: string;
  status: string;
}

export const ChannelList = () => {
  const { data: channels, isLoading } = useQuery({
    queryKey: ["channels"],
    queryFn: async () => {
      const response = await fetch("https://iptv-org.github.io/api/streams.json");
      const data = await response.json();
      return data.slice(0, 100); // Limiting to first 100 channels for better performance
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-neon" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-20">
      <ScrollArea className="h-[600px] rounded-md border border-gray-800">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-neon">Channel Name</TableHead>
              <TableHead className="text-neon">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {channels?.map((channel: Channel, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-white">
                  {channel.channel}
                </TableCell>
                <TableCell className="text-white">{channel.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};