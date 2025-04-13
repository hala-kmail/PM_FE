import React from "react";
import { Option } from "../../../../../Types";

type Props = {
  options: Option[];
  value?: string | number;
  onChange: (value: string) => void; // تغيير الدالة لتقبل string فقط
  icon?: React.ReactNode; // أيقونة مخصصة
  defaultText?: string; // النص الافتراضي عندما لا يتم اختيار أي شيء
  disabled?: boolean; // إضافة خاصية disabled
};

const CustomSelect: React.FC<Props> = ({
  options,
  value,
  onChange,
  icon,
  defaultText = "Select an option",
  disabled = false, // قيمة افتراضية للمراجعة
}) => {
  // تغيير القيم على حسب النوع
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    onChange(newValue); // هنا نمرر القيمة كـ string فقط
  };

  return (
    <div className="relative w-full">
      <select
        value={value ? String(value) : ""} // تحويل القيمة إلى string إذا كانت number
        onChange={handleChange}
        className="w-full p-3 appearance-none border border-gray-300 rounded-lg pr-10 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={disabled} // استخدم الـ disabled هنا
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
