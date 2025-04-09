import { MenuItem } from "./Types";
import { getMenuAsText, MenuModel } from "./constants/sideBarData";
import { useState } from "react";
import Sidebar from "./components/common/navigation/sidebar";
import TopNavbar from "./components/common/navigation/topNav";
import Routers from "./routers";
import { BrowserRouter, useLocation } from "react-router-dom";

// Create a wrapper to access useLocation
function AppContent() {
  const [activeMenu] = useState<'text' | 'model'>('text');
  const [language, setLanguage] = useState<'ENGLISH' | 'ARABIC'>('ENGLISH');
  const location = useLocation();

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

  // Check if current route is login
  const isLoginPage = location.pathname === "/";

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#F9F9F9" }}>
      {/* Only show Sidebar if not on login */}
      {!isLoginPage && (
        <Sidebar menu={getMenuItems()} onItemClick={handleItemClick} />
      )}

      <div className={`flex flex-col flex-1 ${!isLoginPage ? 'ml-64' : ''}`}>
        {/* Only show TopNavbar if not on login */}
        {!isLoginPage && (
          <TopNavbar
            userName="Mai Shalabi"
            userPosition="last sign in in 25 feb 2025"
            language={language}
            onLanguageToggle={toggleLanguage}
          />
        )}

        <main className="">
          <Routers />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
