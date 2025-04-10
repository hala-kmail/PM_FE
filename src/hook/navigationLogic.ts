import { useNavigate } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    console.log('Navigating to:', path);
    navigate(path);
  };

  return { navigateTo };
};

export default useNavigation;
