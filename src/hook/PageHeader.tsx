import { useLocation } from 'react-router-dom';

export const getTitle = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath.includes('/projects')) {
    return 'Projects';
  } else if (currentPath.includes('/dashboard')) {
    return 'Dashboard';
  } else if (currentPath.includes('/settings')) {
    return 'Settings';
  } else {
    return 'Home';
  }
};
