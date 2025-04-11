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
    const handler = (e: Event) => {
      const event = e as BeforeInstallPromptEvent;
      event.preventDefault();
      setDeferredPrompt(event);
      setShowInstall(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setShowInstall(false);
    };

    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', handleAppInstalled);
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

    setDeferredPrompt(null);
    setShowInstall(false);
  };

  return { deferredPrompt, showInstall, handleItemClick, handleInstallClick };
};

export default useInstallPrompt;
