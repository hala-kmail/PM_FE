import React, { useState } from 'react';
import CustomSelect from '../componant/CustomselectList';
import { Option } from '../../../../../components/common/formComponant/selectList';
import { ChevronDown } from "lucide-react";
import CustomInput from '../componant/CustomInput';
import CustomSlider from '../componant/CustomSlideBar';

const Project_Identification: React.FC = () => {
    const [selected, setSelected] = useState<string | number>("");
  const [formData] = useState({
    row1Field1: '',
    row1Field2: '',
    row2Field1: '',
    row2Field2: '',
    row3Field1: '',
    row3Field2: '',
  });
  const options: Option[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  const [showInput, setShowInput] = useState(false);

  // Handle slider toggle
  const handleToggle = () => {
    setShowInput((prev) => !prev);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-4 bg-white  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col">
        <div className="flex flex-row items-baseline gap-2 pb-2">
  <label className="text-black text-sm font-semibold">Project Name</label>
  <label className="text-[#707070] text-xs font-semibold">- English</label>
</div>

<CustomInput value={''} onChange={function (value: string): void {
                      throw new Error('Function not implemented.');
                      console.log(value);
                  } }/>
        </div>
        <div className="flex flex-col">
        <div className="flex flex-row items-baseline gap-2 pb-2">
  <label className="text-black text-sm font-semibold">Project Name</label>
  <label className="text-[#707070] text-xs font-semibold">- Arabic</label>
</div>
          
          
<CustomInput value={''} onChange={function (value: string): void {
                      throw new Error('Function not implemented.');
                      console.log(value);

                  } }/>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
        <div className="flex flex-row items-baseline gap-2 pb-2">
  <label className="text-black text-sm font-semibold">Project Description</label>
  <label className="text-[#707070] text-xs font-semibold">- English</label>
</div>
<CustomInput value={''} onChange={function (value: string): void {
                      throw new Error('Function not implemented.');
                      console.log(value);
                  } }/>
        </div>
        <div className="flex flex-col">
        <div className="flex flex-row items-baseline gap-2 pb-2">
  <label className="text-black text-sm font-semibold">Project Description</label>
  <label className="text-[#707070] text-xs font-semibold">- Arabic</label>
</div>
<CustomInput value={''} onChange={function (value: string): void {
                      throw new Error('Function not implemented.');
                      console.log(value);
                  } }/>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Project Type</label>
          <CustomSelect
        options={options}
        value={selected}
        defaultText={"Select Type"}

        onChange={setSelected}
        icon={
            <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              <ChevronDown size={16} className="text-gray-600" />
            </div>
          }
      />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Project Number MOF</label>
          <CustomInput value={''} onChange={function (value: string): void {
                      throw new Error('Function not implemented.');
                      console.log(value);
                  } }/>
        </div>
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Project Nature</label>
          <CustomSelect
        options={options}
        value={selected}
        onChange={setSelected}
        defaultText={"Select Nature"}

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
        value={selected}
        onChange={setSelected}
        defaultText={"Select Priority"}

        icon={
            <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              <ChevronDown size={16} className="text-gray-600" />
        </div>
        }
        />
        </div>
        
        

</div>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Linked to an existing project?</label>
          <CustomSlider showInputField={showInput} onToggle={handleToggle} />
          </div>

{/* Conditional Input Field */}

     
       
          
         {showInput && (
           <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Linked Project</label>
 <CustomSelect
 options={options}
 value={selected}
 defaultText={"Select Project"}

 onChange={setSelected}
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

export default Project_Identification;
