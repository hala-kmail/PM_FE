import { MenuItem } from "./Types";
import { getMenuAsText, MenuModel } from "./constants/sideBarData";

import { useState } from "react";
import Sidebar from "./components/common/navigation/sidebar";
import TopNavbar from "./components/common/navigation/topNav";
// import { useTranslation } from "react-i18next";
import Routers from "./routers";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [activeMenu] = useState<'text' | 'model'>('text'); // Keep only what you need
  const [language, setLanguage] = useState<'ENGLISH' | 'ARABIC'>('ENGLISH');
  // const { i18n } = useTranslation();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ENGLISH' ? 'ARABIC' : 'ENGLISH'));
  };

  const getMenuItems = (): MenuItem[] => {
    switch (activeMenu) {
      case 'model':
        return MenuModel.getInstance().getMenuItems();
      case 'text':
      default:
        return getMenuAsText();
    }
  };

  const handleItemClick = (path: string) => {
    console.log('Navigating to:', path);
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9F9F9" }}>
      {/* Sidebar - fixed width */}
      <Sidebar menu={getMenuItems()}
       onItemClick={handleItemClick}
        

      />
      <div className="flex flex-col flex-1 ml-64">
        {/* TopNavbar - make it sticky */}
        <TopNavbar
          userName="Mai Shalabi"
          userPosition="last sign in in 25 feb 2025"
          language={language}
          onLanguageToggle={toggleLanguage}
  
        />
        {/* Main content with scroll */}
        <main className="py-10  ">
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </main>
      </div>
    </div>
  );
}

export default App;
