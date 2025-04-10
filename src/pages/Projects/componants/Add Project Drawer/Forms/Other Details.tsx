import React, { useState } from 'react';
import CustomSelect from '../componant/CustomselectList';
import { Option } from '../../../../../components/common/formComponant/selectList';
import { ChevronDown } from "lucide-react";

import ReferenceDateUsingValue from '../componant/customcalender';

const Other_Details: React.FC = () => {
    const [selected, setSelected] = useState<string | number>("");

  const options: Option[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];



 

  return (
    <form  className="w-full mx-auto p-4 bg-white p-2  ">

<div className='flex flex-row mb-2 mt-2 '>
<span className='text-[#707070] text-sm'>Budget</span>
<div className='border-b-2 w-full mb-2 ml-2  '></div>


</div>

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
      />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Directorate</label>
          <CustomSelect
        options={options}
        value={selected}
        onChange={setSelected}
        defaultText={"Select Directorate"}

        icon={
            <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              <ChevronDown size={16} className="text-gray-600" />
        </div>
        }
        />
        </div>
        
        

</div>

<div className='flex flex-row mb-2 mt-2'>
<span className='text-[#707070]  text-sm'>Timeline</span>
<div className='border-b-2 w-full mb-2 ml-2  '></div>


</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Start Date</label>
          <ReferenceDateUsingValue/>  
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-semibold mb-2">Due Date</label>
          <ReferenceDateUsingValue/>  

        </div>
        
        

</div>
    

     
<div className='flex flex-row mb-2 mt-2'>
<span className='text-[#707070]  text-sm'>Location </span>
<div className='border-b-2 w-full mb-2 ml-2  '></div>


</div>
     
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="flex flex-col w-full">
          <label className="text-gray-700 text-sm font-semibold mb-2">Project Location</label>
          <CustomSelect
        options={options}
        value={selected}
        onChange={setSelected}
        icon={
            <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
              <ChevronDown size={16} className="text-gray-600" />
            </div>
          }

          defaultText={"Select Project Manager"}
      />
        </div>
        
        
        

</div>


     
    </form>
  );
};

export default Other_Details;
