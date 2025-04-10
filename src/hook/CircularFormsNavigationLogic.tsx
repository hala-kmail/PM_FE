import { useState } from 'react';

const useCircularFormsNavigation = (initialForm: number = 1, totalForms: number = 4) => {
  const [activeForm, setActiveForm] = useState<number>(initialForm);

  const goToNextForm = () => {
    if (activeForm < totalForms) setActiveForm(activeForm + 1);
  };

  const goToPreviousForm = () => {
    if (activeForm > 1) setActiveForm(activeForm - 1);
  };

  const goToForm = (formNumber: number) => {
    if (formNumber >= 1 && formNumber <= totalForms) {
      setActiveForm(formNumber);
    }
  };

  return {
    activeForm,
    goToNextForm,
    goToPreviousForm,
    goToForm,
  };
};

export default useCircularFormsNavigation;
