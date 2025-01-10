import { useNavigate as useRouterNavigate, useSearch, Link } from '@tanstack/react-router';

export const useNavigation = () => {
  const navigate = useRouterNavigate();
  const search = useSearch();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    navigate,
    search,
    scrollToSection,
    Link,
  };
};