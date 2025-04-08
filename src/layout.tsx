import { useEffect, useState } from "react";

const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
const [canInstall, setCanInstall] = useState(false);

useEffect(() => {
  const handler = (e: any) => {
    e.preventDefault();
    setDeferredPrompt(e);
    setCanInstall(true);
  };

  window.addEventListener('beforeinstallprompt', handler);
  return () => window.removeEventListener('beforeinstallprompt', handler);
}, []);

const handleInstallClick = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Install outcome: ${outcome}`);
    setDeferredPrompt(null);
    setCanInstall(false);
  }
};
