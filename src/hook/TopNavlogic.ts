import { useState } from 'react';
import useInstallPrompt from '../store/PWA';

export const useTopNavbar = (menu: any[], onItemClick: (path: string) => void, language: string, onLanguageToggle: () => void) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { showInstall, handleInstallClick } = useInstallPrompt(menu, onItemClick);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return {
    menuOpen,
    toggleMenu,
    showInstall,
    handleInstallClick,
    language,
    onLanguageToggle,
  };
};
