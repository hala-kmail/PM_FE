import React from 'react';
import { theme } from '../../../../../theme/color';
import Project_Identification from '../../../../../Forms/Project Identification';
import Strategic_Alignment from '../../../../../Forms/Strategic Alignment';
import Ownership_Responsibility from '../../../../../Forms/Ownership& Responsibility';
import Other_Details from '../../../../../Forms/Other Details';

type CircularFormsProps = {
  activeForm: number;
  goToForm: (formNumber: number) => void;
};

const CircularForms: React.FC<CircularFormsProps> = ({ activeForm, goToForm }) => {
  const circleLabels = [
    "Project Identification",
    "Strategic Alignment",
    "Ownership& Responsibility",
    "Other Details"
  ];

  const splitLabel = (label: string) => {
    return label.split(' ').map((word, index) => (
      <span key={index} className="block text-xs sm:text-sm text-gray-700 text-center">{word}</span>
    ));
  };

  return (
    <div className="flex flex-col items-center w-full relative pb-28">
      {/* الدوائر */}
      <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center gap-4 sm:gap-8 w-full px-2 sm:px-4 py-2">
        {circleLabels.map((label, index) => (
          <div key={index} className="flex flex-col items-center space-y-1 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div
              className={`relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                activeForm === index + 1
                  ? `bg-[${theme.primary}] text-white`
                  : 'bg-gray-100 text-gray-500'
              }`}
              onClick={() => goToForm(index + 1)}
            >
              <span className="text-base font-semibold">{index + 1}</span>
            </div>
            <div className="sm:ml-2 text-center sm:text-left">
              {splitLabel(label)}
            </div>
          </div>
        ))}
      </div>

      {/* المحتوى المتغير حسب الفورم */}
      <div className="mt-6 w-full">
        {activeForm === 1 && <Project_Identification mode={'create'} />}
        {activeForm === 2 && <Strategic_Alignment mode={'create'} />}
        {activeForm === 3 && <Ownership_Responsibility mode={'create'} />}
        {activeForm === 4 && <Other_Details mode={'create'} />}
      </div>
    </div>
  );
};

export default CircularForms;
