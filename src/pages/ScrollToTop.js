import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// To allow the property details page to come at the top 
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;