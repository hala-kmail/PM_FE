import React, { useState } from 'react';
import CustomSelect from '../componant/CustomselectList';
import { Option } from '../../../../../components/common/formComponant/selectList';
import { ChevronDown } from "lucide-react";

import CustomTextarea from '../componant/CustomTextArea';

const Strategic_Alignment: React.FC = () => {
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
  const [] = useState(false);

  // Handle slider toggle


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-4 bg-white  ">
      <div className="grid grid-cols-1  gap-4 ">
        <div className="flex flex-col gap-2">
      
  <label className="text-black text-sm font-semibold">Project Name</label>

<CustomTextarea value={''} onChange={function (e: React.ChangeEvent<HTMLTextAreaElement>): void {
                      throw new Error('Function not implemented.');
                      console.log(e);
                  } }/>
        </div>
        <div className="flex flex-col">
     
          
          

        </div>
      </div>

     

     
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="flex flex-col w-full">
          <label className="text-gray-700 text-sm font-semibold mb-2">Goal</label>
          <CustomSelect
        options={options}
        value={selected}
        onChange={setSelected}
        icon={
            <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              <ChevronDown size={16} className="text-gray-600" />
            </div>
          }

          defaultText={"Select Goal"}
      />
        </div>
        
        
        

</div>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Five year plan</label>
          <CustomSelect
        options={options}
        value={selected}
        onChange={setSelected}
        defaultText={"Select plan"}

        icon={
            <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              <ChevronDown size={16} className="text-gray-600" />
            </div>
          }
      />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Annual plan</label>
          <CustomSelect
        options={options}
        value={selected}
        onChange={setSelected}
        defaultText={"Select plan"}

        icon={
            <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              <ChevronDown size={16} className="text-gray-600" />
        </div>
        }
        />
        </div>
        
        

</div>
     
    </form>
  );
};

export default Strategic_Alignment;
