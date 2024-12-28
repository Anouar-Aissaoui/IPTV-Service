import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404s for monitoring
    console.error(`404 error: ${location.pathname} not found`);
  }, [location]);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <Helmet>
        <title>404 - Page Not Found | IPTV Service</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="text-center">
        <h1 className="text-6xl font-bold text-neon mb-4">404</h1>
        <h2 className="text-2xl text-white mb-8">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-dark bg-neon hover:bg-neon/90 transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;