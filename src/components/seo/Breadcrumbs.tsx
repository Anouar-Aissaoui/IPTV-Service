import React from 'react';
import { useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const breadcrumbItems = [
    {
      name: "Home",
      path: "/"
    },
    ...pathSegments.map((segment, index) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      path: '/' + pathSegments.slice(0, index + 1).join('/')
    }))
  ];

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol 
        className="flex items-center space-x-2 text-sm text-gray-400"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbItems.map((item, index) => (
          <li 
            key={item.path}
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
            className="flex items-center"
          >
            {index > 0 && <span className="mx-2">/</span>}
            <a
              href={item.path}
              itemProp="item"
              className="hover:text-neon transition-colors"
            >
              <span itemProp="name">{item.name}</span>
            </a>
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
};