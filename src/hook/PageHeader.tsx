import { Link, useLocation } from 'react-router-dom';

const PageHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getTitle = () => {
    switch (currentPath) {
      case '/projects':
        return 'Projects';
      case '/dashboard':
        return 'Dashboard';
      case '/settings':
        return 'Settings';
      default:
        return 'Welcome';
    }
  };

  return (
    <h1 className="text-xl font-bold text-gray-800">
         <Link to={`/home`}>
        {getTitle()}
  </Link>

    </h1>
  );
};

export default PageHeader;
