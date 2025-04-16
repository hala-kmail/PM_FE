import React, { useState } from 'react';

import { ChevronDown } from "lucide-react";
import ReferenceDateUsingValue from '../pages/Projects/componants/Add Project Drawer/componant/customcalender';
import CustomTextarea from '../pages/Projects/componants/Add Project Drawer/componant/CustomTextArea';
import CustomSelect from '../pages/Projects/componants/Add Project Drawer/componant/CustomselectList';
import { Option } from '../Types';


type Props = {
  mode: "create" | "view" | "edit";
  EscalateTaskType?:any
};
const Escalate_Task: React.FC<Props> = ({ mode, EscalateTaskType }) => {
  // const [selected, setSelected] = useState<string | number>(EscalateTaskType?. || "");
//   const [showFileInputs, setShowFileInputs] = useState(false);

  const [formData, setFormData] = useState({
    User: EscalateTaskType?.User || '',
    Task_Description: EscalateTaskType?.Task_Description || '',
    Escalation_date: EscalateTaskType?.Escalation_date || '',
  });
  
  
  const options: Option[] = [
    { label: "pay1", value: "pay1" },
    { label: "pay2", value: "pay2" },
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
    <form onSubmit={handleSubmit} className="w-full mx-auto bg-white ">
      {/* Payment Type */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mb-5">
      <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">Escalation Date</label>
          <ReferenceDateUsingValue
            value={formData.Escalation_date}
            onChange={(date) => handleChange("Escalation_date", date ? date.toISOString() : '')}
            disabled={mode === "view"}
            mode={mode}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">User</label>
          <CustomSelect
            options={options}
            value={formData.User}
            onChange={(value) => handleChange("User", value)}
            defaultText={"Select Type"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
      </div>

      {/* Payment Description */}
      <div className="mb-5">
      <div className="flex flex-col gap-2">
        <label className="text-black text-sm font-semibold">Task Description</label>
        <CustomTextarea
          value={formData.Task_Description}
          placeholder="Enter Task Description"
          onChange={(e) => handleChange("Task_Description", e.target.value)}
          disabled={mode === "view"}
        />
      </div>
      </div>
      {/* Amount & Payment Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
       
       
      </div>

    
    </form>
  );
};

export default Escalate_Task;
