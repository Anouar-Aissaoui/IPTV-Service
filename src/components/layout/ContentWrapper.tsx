import React from 'react';

interface ContentWrapperProps {
  children: React.ReactNode;
  as?: 'article' | 'section' | 'main' | 'div';
  className?: string;
  ariaLabel?: string;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  as = 'div',
  className = '',
  ariaLabel
}) => {
  const Component = as;
  
  return (
    <Component 
      className={`content-wrapper ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
};

// Also export as default for backward compatibility if needed
export default ContentWrapper;