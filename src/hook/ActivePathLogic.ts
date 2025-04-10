import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useActivePath = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState<string>('');

  useEffect(() => {
    const currentPath = location.pathname;
    setActivePath(currentPath);
  }, [location]);

  return { activePath, setActivePath };
};

export default useActivePath;
