import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Json } from '@/integrations/supabase/types';

interface StructuredDataProps {
  data: Json;
}

export const StructuredData: FC<StructuredDataProps> = ({ data }) => {
  // Convert Json to a string, handling potential nested objects
  const stringifyData = (jsonData: Json): string => {
    try {
      return JSON.stringify(jsonData);
    } catch (error) {
      console.error('Error stringifying structured data:', error);
      return '{}';
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {stringifyData(data)}
      </script>
    </Helmet>
  );
};