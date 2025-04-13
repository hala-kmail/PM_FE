import React from 'react';
import { theme } from '../../../../../theme/color';
import Project_Identification from '../Forms/Project Identification';
import Strategic_Alignment from '../Forms/Strategic Alignment';
import Ownership_Responsibility from '../Forms/Ownership& Responsibility';
import Other_Details from '../Forms/Other Details';

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
      <span key={index} className="block text-sm text-gray-700">{word}</span>
    ));
  };

  return (
    <div className="flex flex-col items-center w-full relative pb-28">
      {/* الدوائر */}
      <div className="flex items-center gap-8 w-full justify-between p-2">
        {circleLabels.map((label, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className={`relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                activeForm === index + 1
                  ? `bg-[${theme.primary}] text-white`
                  : 'bg-gray-100 text-gray-500'
              }`}
              onClick={() => goToForm(index + 1)}
            >
              <span className="text-xl font-semibold">{index + 1}</span>
            </div>
            <div className="ml-2">
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
