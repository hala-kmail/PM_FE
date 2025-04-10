import Sidebar from './components/common/navigation/sidebar';
import TopNavbar from './components/common/navigation/topNav';
import Routers from './routers/route';
import useNavigation from './hook/navigationLogic';
import useMenu from './hook/MenuLogic';
import  useSidebar from './hook/SidemenueLogic';// استخدام Hook الشريط الجانبي
import useLanguage from './hook/laguageLogic'; // استخدام Hook اللغة

function App() {
  const { navigateTo } = useNavigation(); // Hook التنقل
  const { getMenuItems } = useMenu(); // Hook القوائم
  const { sidebarOpen, toggleSidebar } = useSidebar(); // Hook الشريط الجانبي
  const { language, toggleLanguage } = useLanguage(); // Hook اللغة

  const handleItemClick = (path: string) => {
    navigateTo(path); // استخدام التنقل
  };

  return (
    <div className="flex min-h-screen bg-[#F9F9F9]">
      {/* Sidebar */}
      <Sidebar
        menu={getMenuItems()}
        onItemClick={handleItemClick}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* المحتوى الرئيسي */}
      <div
        className={`
          flex flex-col flex-1 transition-all duration-300
          ${sidebarOpen ? 'ml-64' : 'ml-0'} 
          md:ml-64
        `}
      >
        <TopNavbar
          userName="Mai Shalabi"
          userPosition="last sign in in 25 feb 2025"
          language={language}
          onLanguageToggle={toggleLanguage} // تمرير الـ toggleLanguage
        />
        <main className="py-10">
          <Routers />
        </main>
      </div>
    </div>
  );
}

export default App;
