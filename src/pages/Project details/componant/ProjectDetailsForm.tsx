import React, { useState } from 'react';


import { ChevronDown } from "lucide-react";
import CustomSelect from '../../Projects/componants/Add Project Drawer/componant/CustomselectList';
import ReferenceDateUsingValue from '../../Projects/componants/Add Project Drawer/componant/customcalender';
import Other_Details from '../../Projects/componants/Add Project Drawer/Forms/Other Details';
import Project_Identification from '../../Projects/componants/Add Project Drawer/Forms/Project Identification';
import Strategic_Alignment from '../../Projects/componants/Add Project Drawer/Forms/Strategic Alignment';
import Ownership_Responsibility from '../../Projects/componants/Add Project Drawer/Forms/Ownership& Responsibility';


const ProjectDetailsForm: React.FC = () => {
    const [selected, setSelected] = useState<string | number>("");





 

  return (
    <form  className="w-full mx-auto p-4 bg-white p-2  ">

<div className='flex flex-row mb-2 mt-2 '>
<span className='text-[#707070] text-sm'>Project Identification</span>
<div className='border-b-2 w-full mb-2 ml-2  '></div>


</div>

<div className="grid grid-cols-1  gap-6 mb-6">
        <div className="flex flex-col">
         
          <Project_Identification mode={'view'}/>
        </div>
        <div className='flex flex-row mb-2 mt-2 '>
<span className='text-[#707070] text-sm'>Strategic Alignment</span>
<div className='border-b-2 w-full mb-2 ml-2  '></div>


</div>

<div className="grid grid-cols-1  gap-6 mb-6">
        <div className="flex flex-col">
         
          <Strategic_Alignment mode={'view'}/>
        </div>

        
        </div>
        <div className='flex flex-row mb-2 mt-2 '>
<span className='text-[#707070] text-sm'>Ownership & Responsibility</span>
<div className='border-b-2 w-full mb-2 ml-2  '></div>


</div>

<div className="grid grid-cols-1  gap-6 mb-6">
        <div className="flex flex-col">
         
          <Ownership_Responsibility mode={'view'}/>
        </div>

        
        </div>
        
        <div className="grid grid-cols-1  gap-6 mb-6">
        <div className="flex flex-col">
         
          <Other_Details mode={'view'}/>
        </div>

        
        </div>
</div>




    



     
    </form>
  );
};

export default ProjectDetailsForm;
