import React from 'react';
import { ArrowCircleDownIcon, ArrowCircleUpIcon } from '@heroicons/react/outline';
import DropdownMenu from './dropDown';
import { TopNavbarProps } from '../../../Types';
import { useTopNavbar } from '../../../hook/TopNavlogic';

const TopNavbar: React.FC<TopNavbarProps> = ({
  userName,
  userPosition,
  language,
  onLanguageToggle,
}) => {
  const { menuOpen, toggleMenu, showInstall, handleInstallClick } = useTopNavbar([], () => {}, language, onLanguageToggle);

  return (
    <header className="w-full h-20 bg-white px-4 md:px-6 py-4 flex items-center justify-between relative z-10 flex-wrap">
      <div className="text-lg font-bold hidden sm:block">Hello,</div>
      <div className="flex items-center gap-4 sm:gap-6 ml-auto">
        <div className="flex items-center gap-2">
          <span className="font-semibold hidden sm:block">Language:</span>
          <span className="bg-[#F1F1F1] flex items-center gap-2 rounded-md text-sm px-2 sm:px-3 py-1">
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
          className="flex items-center gap-2 text-gray-700 focus:outline-none hover:bg-gray-200 hover:text-[#023047] transition-all duration-200 px-2 py-1 rounded-md"
        >
          <img
            src="src/assets/user.jpg"
            alt="User"
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full"
          />
          <div className="flex flex-col text-left hidden sm:flex">
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
