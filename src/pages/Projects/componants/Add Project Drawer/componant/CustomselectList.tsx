import React from "react";
import { Option } from "../../../../../components/common/formComponant/selectList";

type Props = {
  options: Option[];
  value?: string | number;
  onChange: (value: string | number) => void;
  icon?: React.ReactNode; // أيقونة مخصصة
  defaultText?: string; // النص الافتراضي عندما لا يتم اختيار أي شيء
};

const CustomSelect: React.FC<Props> = ({ options, value, onChange, icon, defaultText = "Select an option" }) => {
  return (
    <div className="relative w-full ">
      <select
        value={value || ""} // تأكد من أن القيمة فارغة أو غير محددة في البداية
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 appearance-none border border-gray-300 rounded-lg pr-10 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {/* قيمة افتراضية تظهر أولاً */}
        <option value="" disabled>
          {defaultText}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
        {icon}
      </div>
    </div>
  );
};

export default CustomSelect;
