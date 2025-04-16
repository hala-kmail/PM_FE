

import React, { useState } from 'react';

import { ChevronDown } from "lucide-react";
import ReferenceDateUsingValue from '../pages/Projects/componants/Add Project Drawer/componant/customcalender';
import CustomTextarea from '../pages/Projects/componants/Add Project Drawer/componant/CustomTextArea';
import CustomSelect from '../pages/Projects/componants/Add Project Drawer/componant/CustomselectList';
import { Option } from '../Types';
import CustomProgressBar from '../pages/Projects/componants/Add Project Drawer/componant/CustomProgressBar';
import CustomFileUpload from '../pages/Projects/componants/Add Project Drawer/componant/CustomFileUpload';


type Props = {
  mode: "create" | "view" | "edit";
  ChangeProgressType?:any
};
const Change_Progress: React.FC<Props> = ({ mode, ChangeProgressType }) => {
  // const [selected, setSelected] = useState<string | number>(ChangeProgressType?. || "");
//   const [showFileInputs, setShowFileInputs] = useState(false);

const [formData, setFormData] = useState({
    Task: ChangeProgressType?.Task || '',
    Task_month: ChangeProgressType?.Task_month || '',
    Completion_date: ChangeProgressType?.Completion_date || '',
    Progress: ChangeProgressType?.Progress || 0,
    File: ChangeProgressType?.File || '',
    Document_File: ChangeProgressType?.Document_File || null,
  });
  
  const monthOptions: Option[] = [
    { label: "Jan", value: "Jan" },
    { label: "Feb", value: "Feb" },
    { label: "Mar", value: "Mar" },
    { label: "Apr", value: "Apr" },
    { label: "May", value: "May" },
    { label: "Jun", value: "Jun" },
    { label: "Jul", value: "Jul" },
    { label: "Aug", value: "Aug" },
    { label: "Sep", value: "Sep" },
    { label: "Oct", value: "Oct" },
    { label: "Nov", value: "Nov" },
    { label: "Dec", value: "Dec" },
  ];
  

 

  const handleChange = (field: string, value: string | number | File |null) => {
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

<div className="mb-5">
      <div className="flex flex-col gap-2">
        <label className="text-black text-sm font-semibold">Task</label>
        <CustomTextarea
          value={formData.Task}
          rows={1}
          placeholder="Enter Task Description"
          onChange={(e) => handleChange("Task", e.target.value)}
          disabled={mode === "view"}
        />
      </div>
      </div>

      {/* Payment Type */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mb-5">
       <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">Task month</label>
          <CustomSelect
            options={monthOptions}
            value={formData.Task_month}
            onChange={(value) => handleChange("Task_month", value)}
            defaultText={"Select month"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">Completion date</label>
          <ReferenceDateUsingValue
            value={formData.Completion_date}
            onChange={(date) => handleChange("Completion_date", date ? date.toISOString() : '')}
            disabled={mode === "view"}
            mode={mode}
          />
        </div>
       
      </div>

      <div className="flex flex-col gap-2 mb-5">
  <label className="text-black text-sm font-semibold">Progress</label>
  <CustomProgressBar
    value={formData.Progress}
    onChange={(value) => handleChange("Progress", value)}
    disabled={mode === "view"}
  />
</div>


<div className="flex flex-col gap-2 mb-5">
          <label className="text-black text-sm font-semibold">File</label>
          <CustomSelect
            options={monthOptions}
            value={formData.File}
            onChange={(value) => handleChange("File", value)}
            defaultText={"Select File"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
    
        <CustomFileUpload onFileSelect={(file) => handleChange("Document_File", file)} />
      
        {/* <div className="flex justify-end mt-4">
  {mode !== "view" && (
    <button
      type="submit"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      {mode === "edit" ? "Update" : "Create"}
    </button>
  )}
</div> */}


    </form>
    
  );
};

export default Change_Progress;

