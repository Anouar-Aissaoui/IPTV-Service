import { IPTVProviders as IPTVProvidersComponent } from "@/components/IPTVProviders";
import { SEOContent } from "@/components/SEOContent";

const IPTVProvidersPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <IPTVProvidersComponent />
      <SEOContent />
    </div>
  );
};

export default IPTVProvidersPage;