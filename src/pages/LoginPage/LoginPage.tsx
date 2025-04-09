import React, { useState } from "react";
import logo from "../../assets/logo.png"; // adjust if your logo path is different

const LoginPage: React.FC = () => {
  const [language, setLanguage] = useState<"AR" | "EN">("AR");
  const [showPassword, setShowPassword] = useState(false);

  const toggleLanguage = (lang: "AR" | "EN") => {
    setLanguage(lang);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-12">
        <img
            src={logo}
            alt="logo"
            className="w-[179px] h-[58px] mb-8 mt-16"
        />

        <h2 className="text-2xl font-bold mb-1 text-center">Welcome Back</h2>
        <p className="text-gray-500 mb-6 text-center mt-3">
          Welcome Back, Please Add Your Credentials
        </p>
        <p className="text-gray-500 mb-6 text-center">
          Select Your Prefernce Language
        </p>
        <div className="flex mb-6 w-full max-w-sm">
          {["AR", "EN"].map((lang) => (
            <button
              key={lang}
              onClick={() => toggleLanguage(lang as "AR" | "EN")}
              className={`w-1/2 py-2 text-sm font-medium border ${
                language === lang
                  ? "bg-gray-200 text-black"
                  : "bg-white text-gray-500"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <form className="w-full max-w-sm">
          <label className="block mb-1 text-sm font-medium">User Name</label>
          <input
            type="text"
            placeholder="Enter User Name"
            className="w-full px-4 py-2 mb-4 border rounded outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block mb-1 text-sm font-medium">Password</label>
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-2 text-gray-500"
              aria-label="Toggle password visibility"
            >
              {/* {showPassword ? "🙈" : "👁️"} */}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#002D3E] text-white py-2 rounded font-semibold hover:bg-[#001d29] transition"
          >
            Sign In
          </button>

          <p className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Change Your Password
            </a>
          </p>
        </form>
      </div>

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
