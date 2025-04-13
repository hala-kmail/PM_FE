import React, { useState } from 'react';

import Other_Details from '../../Forms/Other Details';
import Project_Identification from '../../Forms/Project Identification';
import Strategic_Alignment from '../../Forms/Strategic Alignment';
import Ownership_Responsibility from '../../Forms/Ownership& Responsibility';


const ProjectDetailsForm: React.FC = () => {





 

  return (
    <form  className="w-full mx-auto p-4 bg-white p-2 border-t-0  ">

<div className='flex flex-row mb-2 mt-2 '>
<span className='text-[#707070] text-sm'>Project Identification</span>
<div className='border-b-2 w-full mb-2 ml-2  '></div>


</div>

<div className="grid grid-cols-1  gap-2 ">
        <div className="flex flex-col">
         
          <Project_Identification mode={'view'}/>
        </div>
        <div className='flex flex-row mb-2 mt-2 '>
<span className='text-[#707070] text-sm'>Strategic Alignment</span>
<div className='border-b-2 w-full mb-2 ml-2  '></div>


</div>

<div className="grid grid-cols-1  gap-2 ">
        <div className="flex flex-col">
         
          <Strategic_Alignment mode={'view'}/>
        </div>

        
        </div>
        <div className='flex flex-row mb-2 mt-2 '>
<span className='text-[#707070] text-sm'>Ownership & Responsibility</span>
<div className='border-b-2 w-full mb-2 ml-2  '></div>


</div>

<div className="grid grid-cols-1  gap-2 ">
        <div className="flex flex-col">
         
          <Ownership_Responsibility mode={'view'}/>
        </div>

        
        </div>
        
        <div className="grid grid-cols-1  gap-2 ">
        <div className="flex flex-col">
         
          <Other_Details mode={'view'}/>
        </div>

        
        </div>
</div>




    



     
    </form>
  );
};

export default ProjectDetailsForm;
