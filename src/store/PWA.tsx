
import { useState, useEffect } from 'react';
import { BeforeInstallPromptEvent } from '../Types';

const useInstallPrompt = (menu: any[], onItemClick: (path: string) => void) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    if (menu.length > 0) {
      onItemClick(menu[0].path);
    }
  }, [menu, onItemClick]);

  useEffect(() => {
    console.log('beforeinstallprompt event fired');

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      console.log('beforeinstallprompt event fired');
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if the app is already installed
    window.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      setShowInstall(false);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', () => {});
    };
  }, []);

  const handleItemClick = (path: string) => {
    onItemClick(path);
  };

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      console.error('No install prompt available');
      return;
    }

    console.log('Showing install prompt');
    deferredPrompt.prompt();
    
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);
    
    // We no longer need the prompt
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  return { deferredPrompt, showInstall, handleItemClick, handleInstallClick };
};

export default useInstallPrompt;
