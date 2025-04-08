import React, { useState, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import {  BeforeInstallPromptEvent, SidebarProps } from '../../../Types';






declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

const Sidebar: React.FC<SidebarProps> = ({ menu, onItemClick }) => {
  const [activePath, setActivePath] = useState<string>(menu[0]?.path || '');
 

  useEffect(() => {
    if (menu.length > 0) {
      onItemClick(menu[0].path);
    }
  }, [menu, onItemClick]);


  

   

    // Check if the app is already installed
   

 

  const handleItemClick = (path: string) => {
    setActivePath(path);
    onItemClick(path);
  };



  return (
    <aside className="fixed top-0 left-0 flex flex-col justify-between h-screen w-64 bg-white p-2 z-50">
      {/* Logo and Menu */}
      <div>
        <div className="mb-1 text-center">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="mx-auto h-30 w-full"
          />
        </div>

        <nav className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = activePath === item.path;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.path)}
                className={`flex items-center justify-between w-full text-left px-3 py-2 rounded 
                  ${isActive ? 'bg-[#023047] text-white' : 'text-gray-800'}`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                  <span>{item.title}</span>
                </div>
                {isActive && <ChevronRightIcon className="w-5 h-5 text-white" />}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Install App + Logout */}
      <div className="flex flex-col space-y-3 mb-6">
      
         


        <div className="flex flex-row items-center text-red-600 cursor-pointer hover:opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 m-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
          <span className="text-sm font-medium">Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;