import React, { useState } from "react";
import logo from "../../assets/logo.png"; // adjust if your logo path is different
import { useTranslation } from "react-i18next";

// Inside the component
const LoginPage: React.FC = () => {
//   const [language, setLanguage] = useState<"AR" | "EN">("AR");
  const [showPassword, setShowPassword] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = (lang: "AR" | "EN") => {
    i18n.changeLanguage(lang); // 🔄 switches translation
    document.documentElement.dir = lang === "EN" ? "ltr" : "rtl"; // ⬅️ RTL/LTR
  };
   
  
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex h-screen font-poppins">
      {/* Left Panel */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-12">
        <img src={logo} alt="logo" className="w-[179px] h-[58px] mb-4 mt-4" />

        <h2 className="text-2xl font-bold mb-1 text-center">{t("auth.welcome")}</h2>

        <p className="text-[#707070] text-sm font-normal mb-2 text-center">
        {t("auth.instruction")}        
        </p>

        <p className="text-[#707070] text-sm font-normal mb-6 text-center">
        {t("auth.selectLanguage")}        
        </p>

        {/* Language Toggle */}
        <div className="flex bg-[#F1F1F1] rounded-[12px] h-[56px] w-full max-w-sm mb-6 overflow-hidden">
          {["EN", "AR"].map((lang) => (
            <button
              key={lang}
              onClick={() => toggleLanguage(lang as "EN" | "AR")}
              className={`w-1/2 text-sm font-medium ${
                i18n.language.toUpperCase() === lang ?  "text-[#707070]":"bg-[#E4E4E4] text-black" 
            }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Form */}
        <form className="w-full max-w-sm font-poppins">
          <label className="block mb-1 text-sm font-medium">{t("auth.username")}</label>
          <input
            type="text"
            placeholder={t("auth.usernamePlaceholder")}
            className="w-full h-[56px] px-4 py-2 mb-4 text-sm border rounded-[12px] outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block mb-1 text-sm font-medium">{t("auth.password")}</label>
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="*******"
              className="w-full h-[56px] px-4 py-2 pr-10 text-sm border rounded-[12px] outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              aria-label="Toggle password visibility"
            >
              👁️
            </button>
          </div>

          <button
            type="submit"
            className="w-full h-[56px] bg-[#023047] text-white text-sm font-semibold rounded-[12px] hover:bg-[#001d29] transition"
          >
            {t("auth.signIn")}
          </button>

          <p className="mt-4 text-center">
          <a
            href="#"
            className="text-[14px] text-[#707070] underline font-normal"
            >
           {t("auth.changePassword")}
          </a>

          </p>
        </form>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 h-full">
        <img
          src="src/assets/building.jpeg"
          alt="Ministry Building"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
