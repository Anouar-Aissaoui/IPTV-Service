import { Helmet } from "react-helmet";
import { useSEOData } from "@/hooks/useSEOData";
import { generateMetaTags } from "@/utils/seo";
import { StructuredData } from "./StructuredData";
import { useLocation } from "react-router-dom";

export const SEOContent = () => {
  const location = useLocation();
  const route = location.pathname === "/" ? "index" : location.pathname.slice(1);
  const { data: seoData } = useSEOData(route);

  if (!seoData) return null;

  const metaTags = generateMetaTags({
    title: seoData.title,
    description: seoData.description,
    url: seoData.canonical_url,
    image: "/og-image.png",
  });

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{metaTags.title}</title>
        {metaTags.meta.map((meta, index) => (
          <meta key={index} {...meta} />
        ))}
        <link rel="canonical" href={seoData.canonical_url} />
      </Helmet>
      
      <StructuredData data={seoData.structured_data} />
    </>
  );
};