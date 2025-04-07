import React from 'react';


import { ArrowCircleDownIcon } from '@heroicons/react/outline';

type TopNavbarProps = {
  userName: string;
  userPosition: string;
  language: string;
  onLanguageToggle: () => void;
};

const TopNavbar: React.FC<TopNavbarProps> = ({
  userName,
  userPosition,
  language,
  onLanguageToggle,
}) => {
  return (
    <header className="w-full h-20 bg-white px-6 py-4 flex items-center justify-between">
      {/* Left: You can put logo here if needed */}
      <div className="text-lg font-bold">Hello ,</div>
 
     
      <div className="flex items-center gap-6">

        <div className=" flex items-center gap-2">
        language :
  <span className="bg-[#F1F1F1] flex flex-row font-semibold  rounded-md text-sm gap-2 ">{language}   <ArrowCircleDownIcon className="h-5 w-5" /></span>
  

</div>


        <div className="flex items-center gap-2 text-gray-700">
          {/* <ArrowCircleDownIcon className="h-5 w-5 text-gray-500" /> */}
          <img
            src="public/user.jpg"
            alt="Logo"
            className="mx-auto h-10 w-10"
          />
          <div className="flex flex-col">
  <span className="font-medium">{userName}</span>
  <span className="text-sm text-gray-500">{userPosition}</span>
  
</div>

        </div>

        {/* Language Switch */}
        <button
          onClick={onLanguageToggle}
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
        >
         
          <ArrowCircleDownIcon className="h-5 w-5" />
        </button>
        
      </div>
    </header>
  );
};

export default TopNavbar;
