import { getOrganizationSchema } from './schemas/OrganizationSchema';
import { getWebsiteSchema } from './schemas/WebsiteSchema';
import { getProductSchema } from './schemas/ProductSchema';
import { getFAQSchema } from './schemas/FAQSchema';
import { getServiceSchema } from './schemas/ServiceSchema';

export const getStructuredData = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getOrganizationSchema(),
    getWebsiteSchema(),
    getProductSchema(),
    getFAQSchema(),
    getServiceSchema()
  ]
});