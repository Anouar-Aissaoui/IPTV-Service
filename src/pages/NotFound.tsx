import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <Helmet>
        <title>{t('pages.404.title')}</title>
        <meta name="description" content={t('pages.404.description')} />
      </Helmet>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-neon mb-4">404</h1>
        <h2 className="text-2xl text-white mb-8">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
        </p>
        <Button asChild className="bg-neon hover:bg-neon/90 text-dark">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;