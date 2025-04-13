import React, { useState, useEffect } from 'react';

import { ChevronDown } from "lucide-react";
import ReferenceDateUsingValue from '../pages/Projects/componants/Add Project Drawer/componant/customcalender';
import CustomTextarea from '../pages/Projects/componants/Add Project Drawer/componant/CustomTextArea';
import CustomSelect from '../pages/Projects/componants/Add Project Drawer/componant/CustomselectList';
import { Option } from '../Types';

type Props = {
  mode: "create" | "view" | "edit";
  RiskData?: any;
};

const Add_Risk: React.FC<Props> = ({ mode, RiskData }) => {
  const [, setSelected] = useState<string | number>(RiskData?.Goal || "");

  const [formData, setFormData] = useState({
   
    RiskImpact: RiskData?.RiskImpact || '',
    RiskDate: RiskData?.RiskDate || '',
    TargetedGoal: RiskData?.TargetedGoal || '',
    RiskProbability: RiskData?.RiskProbability || '',
  });

  useEffect(() => {
    if (mode === "view") {
      setSelected(RiskData?.Goal || "");
      setFormData({
      
        RiskImpact: RiskData?.RiskImpact || '',
        RiskDate: RiskData?.RiskDate || '',
        TargetedGoal: RiskData?.TargetedGoal || '',
        RiskProbability: RiskData?.RiskProbability || '',
      });
    }
  }, [mode, RiskData]);

  const options: Option[] = [
    { label: "Low", value: "Low" },
    { label: "High", value: "High" },
   
  ];

  const handleChange = (field: string, value: string | number) => {
    if (mode === "edit" || mode === "create") {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-4 bg-white p-2">
      {/* Budget Section */}

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-black text-sm font-semibold">Risk Date</label>
          <ReferenceDateUsingValue
  value={formData.RiskDate}
  onChange={(date) => handleChange("Risk date", date ? date.toISOString() : '')}
  disabled={mode === "view"}
  mode={mode}
/>
        </div>
     
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-6">
 <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">Targeted Goal</label>
          <CustomTextarea
            value={formData.TargetedGoal}
            onChange={(e) => handleChange("Targeted Goal", e.target.value)}
            disabled={mode === "view"}
          />
        </div></div>

     


    

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col w-full">
          <label className="text-black text-sm font-semibold">Risk Probability</label>
          <CustomSelect
            options={options}
            value={formData.RiskProbability}
            onChange={(value) => handleChange("Risk Probability", value)}
            defaultText={"Low"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-black text-sm font-semibold">Risk Impact</label>
          <CustomSelect
            options={options}
            value={formData.RiskImpact}
            onChange={(value) => handleChange("Risk Impact", value)}
            defaultText={"High"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
      </div>

   
    </form>
  );
};

export default Add_Risk;
