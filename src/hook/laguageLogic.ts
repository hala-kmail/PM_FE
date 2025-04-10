import { useState } from 'react';

const useLanguage = () => {
  const [language, setLanguage] = useState<'ENGLISH' | 'ARABIC'>('ENGLISH');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ENGLISH' ? 'ARABIC' : 'ENGLISH'));
  };

  return { language, toggleLanguage };
};

export default useLanguage;
