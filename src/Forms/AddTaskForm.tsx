import React from "react";
import { ChevronDown } from "lucide-react";
import CustomInput from "../pages/Projects/componants/Add Project Drawer/componant/CustomInput";
import CustomSelect from "../pages/Projects/componants/Add Project Drawer/componant/CustomselectList";
import CustomSlider from "../pages/Projects/componants/Add Project Drawer/componant/CustomSlideBar";
import { Option } from "../Types";
import { ProjectIdentificationProps, useProjectIdentification } from "../hook/Project IdentificationLogic";

const AddTaskForm: React.FC<ProjectIdentificationProps> = (props) => {
  const {
  formData,
  showInput,
  handleChange,
  handleSubmit,
  handleToggle,
  mode,
  } = useProjectIdentification(props);
  const options: Option[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-4 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col">
          <div className="flex flex-row items-baseline gap-2 pb-2">
            <label className="text-black text-sm font-semibold">Project Name</label>
            <label className="text-[#707070] text-xs font-semibold">- English</label>
          </div>
          <CustomInput
            value={formData.row1Field1}
            onChange={(value) => handleChange("row1Field1", value)}
            disabled={mode === "view"}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row items-baseline gap-2 pb-2">
            <label className="text-black text-sm font-semibold">Project Name</label>
            <label className="text-[#707070] text-xs font-semibold">- Arabic</label>
          </div>
          <CustomInput
            value={formData.row1Field2}
            onChange={(value) => handleChange("row1Field2", value)}
            disabled={mode === "view"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <div className="flex flex-row items-baseline gap-2 pb-2">
            <label className="text-black text-sm font-semibold">Project Description</label>
            <label className="text-[#707070] text-xs font-semibold">- English</label>
          </div>
          <CustomInput
            value={formData.row2Field1}
            onChange={(value) => handleChange("row2Field1", value)}
            disabled={mode === "view"}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row items-baseline gap-2 pb-2">
            <label className="text-black text-sm font-semibold">Project Description</label>
            <label className="text-[#707070] text-xs font-semibold">- Arabic</label>
          </div>
          <CustomInput
            value={formData.row2Field2}
            onChange={(value) => handleChange("row2Field2", value)}
            disabled={mode === "view"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Project Type</label>
          <CustomSelect
            options={options}
            onChange={(value) => handleChange("row3Field1", value)}
            defaultText={"Select Type"}
            disabled={mode === "view"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Project Number MOF</label>
          <CustomInput
            value={formData.row3Field1}
            onChange={(value) => handleChange("row3Field1", value)}
            disabled={mode === "view"}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Project Nature</label>
          <CustomSelect
            options={options}
          
            onChange={(value) => handleChange("row3Field2", value)}
            defaultText={"Select Nature"}
            disabled={mode === "view"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Project Priority</label>
          <CustomSelect
            options={options}
            onChange={(value) => handleChange("row3Field2", value)}
            defaultText={"Select Priority"}
            disabled={mode === "view"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      
        {(mode === "edit" || mode === "create") && (
            <div className="flex flex-col">
       <label className="text-gray-700 text-sm font-semibold mb-2">Linked to an existing project?</label>
       <CustomSlider showInputField={showInput} onToggle={handleToggle} />
       </div>
      )}
         
       

        {showInput && (
          <div className="flex flex-col">

            <label className="text-gray-700 text-sm font-semibold mb-2">Linked Project</label>
            <CustomSelect
              options={options}
              onChange={(value) => handleChange("row3Field2", value)}
              defaultText={"Select Project"}
              disabled={mode === "view"}
              icon={
                <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                  <ChevronDown size={16} className="text-gray-600" />
                </div>
              }
            />
          </div>
        )}
      </div>

    
    </form>
  );
};

export default AddTaskForm;
