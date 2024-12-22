import { FC } from 'react';
import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  data: Record<string, any>;
}

export const StructuredData: FC<StructuredDataProps> = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};