import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <Helmet>
        <title>{t('notFound.title')} | {t('meta.title')}</title>
        <meta name="description" content={t('notFound.description')} />
        <html lang={i18n.language} />
      </Helmet>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-neon mb-4">404</h1>
        <h2 className="text-2xl text-white mb-8">{t('notFound.title')}</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          {t('notFound.description')}
        </p>
        <Button asChild className="bg-neon hover:bg-neon/90 text-dark">
          <Link to="/">{t('notFound.button')}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;