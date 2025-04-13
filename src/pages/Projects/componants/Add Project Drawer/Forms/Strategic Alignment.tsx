import React, { useState, useEffect } from "react";
import CustomSelect from "../componant/CustomselectList";
import { Option } from "../../../../../Types";
import { ChevronDown } from "lucide-react";
import CustomTextarea from "../componant/CustomTextArea";

export interface StrategicAlignmentProps {
  mode: "create" | "view" | "edit";
  projectData?: any;
}

const Strategic_Alignment: React.FC<StrategicAlignmentProps> = ({ mode, projectData }) => {
  const [selected, setSelected] = useState<string | number>("");
  const [formData, setFormData] = useState({
    row1Field1: projectData?.projectName || "",
    row1Field2: projectData?.projectDescription || "",
    row2Field1: projectData?.goal || "",
    row2Field2: projectData?.fiveYearPlan || "",
    row3Field1: projectData?.annualPlan || "",
  });

  useEffect(() => {
    if (mode === "view" && projectData) {
      setFormData({
        row1Field1: projectData.projectName,
        row1Field2: projectData.projectDescription,
        row2Field1: projectData.goal,
        row2Field2: projectData.fiveYearPlan,
        row3Field1: projectData.annualPlan,
      });
    }
  }, [mode, projectData]);

  const options: Option[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];

  const handleChange = (field: string, value: string | number) => {
    if (mode !== "view") {
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
      <div className="grid grid-cols-1 gap-4">
        {/* Project Name */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">Project Name</label>
          <CustomTextarea
            value={formData.row1Field1}
            onChange={(e) => handleChange("row1Field1", e.target.value)}
            disabled={mode === "view"}
          />
        </div>

        {/* Project Description */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">Project Description</label>
          <CustomTextarea
            value={formData.row1Field2}
            onChange={(e) => handleChange("row1Field2", e.target.value)}
            disabled={mode === "view"}
          />
        </div>
      </div>

      {/* Goal */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="flex flex-col w-full">
          <label className="text-gray-700 text-sm font-semibold mb-2">Goal</label>
          <CustomSelect
            options={options}
            value={formData.row2Field1}
            onChange={(value) => handleChange("row2Field1", value)}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
            defaultText={"Select Goal"}
          />
        </div>
      </div>

      {/* Five Year Plan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Five Year Plan</label>
          <CustomSelect
            options={options}
            value={formData.row2Field2}
            onChange={(value) => handleChange("row2Field2", value)}
            disabled={mode === "view"}
            defaultText={"Select Plan"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
          />
        </div>

        {/* Annual Plan */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Annual Plan</label>
          <CustomSelect
            options={options}
            value={formData.row3Field1}
            onChange={(value) => handleChange("row3Field1", value)}
            disabled={mode === "view"}
            defaultText={"Select Plan"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
          />
        </div>
      </div>

      {/* Submit Button */}
      {(mode === "edit" || mode === "create") && (
        <button type="submit" className="btn btn-primary">
          {mode === "create" ? "Create Project" : "Save Changes"}
        </button>
      )}
    </form>
  );
};

export default Strategic_Alignment;
