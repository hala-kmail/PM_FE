import React from 'react';

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;  // جعله اختيارياً لتخصيص النص
  rows?: number; // عدد الأسطر
  cols?: number; // عدد الأعمدة
};

const CustomTextarea: React.FC<Props> = ({
  value,
  onChange,
  placeholder = "Enter Targeted Goal ....",  // القيمة الافتراضية للـ placeholder
  rows = 4,
  cols = 50,
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}  // يتم تمريرها هنا
      rows={rows}
      cols={cols}
      className="w-full p-4 border border-gray-300 rounded-lg resize-none text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in"
    />
  );
};

export default CustomTextarea;
