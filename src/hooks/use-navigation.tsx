import { useNavigate, Link } from '@tanstack/react-router';

export const useNavigation = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    navigate,
    scrollToSection,
    Link,
  };
};