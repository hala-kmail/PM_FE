import React, { useState } from 'react';
import { ArrowCircleDownIcon, ArrowCircleUpIcon } from '@heroicons/react/outline';
import DropdownMenu from './dropDown';
import { TopNavbarProps } from '../../../Types';
import useInstallPrompt from '../../../store/PWA';



const TopNavbar: React.FC<TopNavbarProps> = ({
  userName,
  userPosition,
  language,
  onLanguageToggle,
}) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the visibility of the nav menu
  };
  const menu = [{ path: '/profile' }]; // Example menu, adjust as needed
  const onItemClick = (path: string) => {
    // Handle item click, navigate or perform an action
    console.log(`Navigating to ${path}`);
  };
  const {  showInstall, handleInstallClick } = useInstallPrompt(menu, onItemClick);

  return (
    <header className="w-full h-20 bg-white px-6 py-4 flex items-center justify-between relative z-10">
      {/* Left: You can put logo here if needed */}
      <div className="text-lg font-bold">Hello,</div>

      <div className="flex items-center gap-6">
        {/* Language Section */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">Language:</span>
          <span className="bg-[#F1F1F1] flex items-center gap-2 rounded-md text-sm px-3 py-1">
            {language}
            <button
          onClick={onLanguageToggle}
          className="flex items-center gap-1 text-gray-700 hover:text-[#023047]"
        >
          <ArrowCircleDownIcon className="h-5 w-5" />
        </button>
          </span>
        </div>

        <button
  onClick={toggleMenu}
  className="flex items-center gap-2 text-gray-700 focus:outline-none hover:bg-gray-200 hover:text-[#023047] transition-all duration-200"
>
  <img
    src="src/assets/user.jpg"
    alt="User"
    className="mx-auto h-10 w-10 rounded-full"
  />
  <div className="flex flex-col">
    <span className="font-medium">{userName}</span>
    <span className="text-sm text-gray-500">{userPosition}</span>
  </div>
  {menuOpen ? (
            <ArrowCircleUpIcon className="h-5 w-5" />
          ) : (
            <ArrowCircleDownIcon className="h-5 w-5" />
          )}
</button>


       
      </div>

      {/* Navigation Menu (will toggle visibility based on menuOpen state) */}
      {menuOpen && (
       
       <DropdownMenu 
       showInstall={showInstall} 
       handleInstallClick={handleInstallClick} 
     />
        
      )}
    </header>
  );
};

export default TopNavbar;
