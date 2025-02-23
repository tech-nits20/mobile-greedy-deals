import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useBackPress = () => {
  const location = useLocation();
  const [backPressed, setBackPressed] = useState(false);

  useEffect(() => {
    const handleBack = () => {
      setBackPressed(true);
    };

    window.addEventListener('popstate', handleBack);

    return () => {
      window.removeEventListener('popstate', handleBack);
      setBackPressed(false);
    };
  }, [location]);

  return { backPressed };
};
