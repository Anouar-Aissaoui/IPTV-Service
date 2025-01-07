import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
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