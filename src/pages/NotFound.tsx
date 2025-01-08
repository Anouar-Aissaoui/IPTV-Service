import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const NotFound = () => {
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const log404Error = async () => {
      try {
        const { error } = await supabase
          .from('error_404_logs')
          .insert([
            {
              url: window.location.href,
              referrer: document.referrer,
              user_agent: navigator.userAgent,
              // Note: IP address will be logged by Supabase automatically
            }
          ]);

        if (error) {
          console.error('Error logging 404:', error);
        }

        // Check if there's a redirect configured for this URL
        const { data: redirectData } = await supabase
          .from('error_404_logs')
          .select('redirect_url')
          .eq('url', window.location.href)
          .not('redirect_url', 'is', null)
          .single();

        if (redirectData?.redirect_url) {
          toast({
            title: "Redirecting...",
            description: "We're taking you to the correct page.",
          });
          window.location.href = redirectData.redirect_url;
        }
      } catch (err) {
        console.error('Error in 404 handling:', err);
      }
    };

    log404Error();
  }, [location.pathname, toast]);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <Helmet>
        <title>404: Page Not Found | IPTV Service</title>
        <meta name="description" content="The page you're looking for cannot be found. Please check the URL or navigate back to our homepage." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#F97316] mb-4">404</h1>
        <h2 className="text-2xl text-white mb-8">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you're looking for cannot be found. Please check the URL or navigate back to our homepage.
        </p>
        <Button asChild className="bg-[#F97316] hover:bg-[#F97316]/90 text-white">
          <Link to="/">Back to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;