import React, { useState, useEffect } from 'react';
import CustomSelect from '../componant/CustomselectList';
import { Option } from '../../../../../Types';
import { ChevronDown } from "lucide-react";
import CustomTextarea from '../componant/CustomTextArea';

type Props = {
  mode: "create" | "view" | "edit";
  projectData?: any;
};

const Ownership_Responsibility: React.FC<Props> = ({ mode, projectData }) => {
  const [selected, setSelected] = useState<string | number>(projectData?.entity || "");
  const [formData, setFormData] = useState({
    row1Field1: projectData?.entity || '',
    row1Field2: projectData?.directorate || '',
    row2Field1: projectData?.sector || '',
    row2Field2: projectData?.responsibility || '',
    row3Field1: projectData?.projectName || '',
    row3Field2: projectData?.projectManager || '',
  });

  useEffect(() => {
    if (mode === "view") {
      setSelected(projectData?.entity || "");
      setFormData({
        row1Field1: projectData?.entity || '',
        row1Field2: projectData?.directorate || '',
        row2Field1: projectData?.sector || '',
        row2Field2: projectData?.responsibility || '',
        row3Field1: projectData?.projectName || '',
        row3Field2: projectData?.projectManager || '',
      });
    }
  }, [mode, projectData]);

  const options: Option[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
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
    <form onSubmit={handleSubmit} className="w-full mx-auto p-4 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Entity</label>
          <CustomSelect
            options={options}
            value={selected}
            onChange={setSelected}
            defaultText={"Select Entity"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Directorate</label>
          <CustomSelect
            options={options}
            value={formData.row1Field2}
            onChange={(value) => handleChange("row1Field2", value)}
            defaultText={"Select Directorate"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Sector</label>
          <CustomSelect
            options={options}
            value={formData.row2Field1}
            onChange={(value) => handleChange("row2Field1", value)}
            defaultText={"Select Sector"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Entity Responsibility</label>
          <CustomSelect
            options={options}
            value={formData.row2Field2}
            onChange={(value) => handleChange("row2Field2", value)}
            defaultText={"Select Responsibility"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">Project Name</label>
          <CustomTextarea
            value={formData.row3Field1}
            onChange={(e) => handleChange("row3Field1", e.target.value)}
            disabled={mode === "view"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="flex flex-col w-full">
          <label className="text-gray-700 text-sm font-semibold mb-2">Project Manager</label>
          <CustomSelect
            options={options}
            value={formData.row3Field2}
            onChange={(value) => handleChange("row3Field2", value)}
            defaultText={"Select Project Manager"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        {mode !== "view" && (
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            {mode === "create" ? "Create" : "Save"}
          </button>
        )}
      </div>
    </form>
  );
};

export default Ownership_Responsibility;
