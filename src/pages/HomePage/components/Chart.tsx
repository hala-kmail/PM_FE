import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// البيانات
const data = [
  { name: "Page A", read1: 1200, read2: 1500, read3: 2000, read4: 2500 },
  { name: "Page B", read1: 1000, read2: 1200, read3: 1500, read4: 2000 },
  { name: "Page C", read1: 500, read2: 700, read3: 900, read4: 1100 },
  { name: "Page D", read1: 1500, read2: 1700, read3: 1900, read4: 2100 },
  { name: "Page E", read1: 700, read2: 800, read3: 900, read4: 1000 },
  { name: "Page F", read1: 1300, read2: 1400, read3: 1500, read4: 1600 },
  { name: "Page G", read1: 800, read2: 1000, read3: 1200, read4: 1400 },
  { name: "Page G", read1: 800, read2: 1000, read3: 1200, read4: 1400 },
];

// المكون
const Chart = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center mt-9 px-4">
      {/* البادجات التعريفية */}
    
      <div className="flex gap-2 m-7">
      <span className="mr-8 font-[Poppins] font-extrabold text-[16px] leading-[100%] tracking-[0%] text-[#4D4D4D]">
  Task By Intitiy
</span>

        <div className="flex flex-row gap-4">
       
        <span className="px-3  rounded-sm text-[#023047] text-sm gap-4">
        <span className="px-3  rounded-sm text-white text-sm mr-2" style={{ backgroundColor: "#023047" }}>
          
          </span>
        Not Due
        </span>
        </div>
        <div className="flex flex-row gap-4">
       
       <span className="px-3  rounded-sm text-[#C89E4F] text-sm gap-4">
       <span className="px-3  rounded-sm text-white text-sm mr-2" style={{ backgroundColor: "#C89E4F" }}>
         
         </span>
         Over Due
       </span>
       </div>
       <div className="flex flex-row gap-4">
       
       <span className="px-3  rounded-sm text-[#4D4D4D] text-sm gap-4">
       <span className="px-3  rounded-sm text-white text-sm mr-2" style={{ backgroundColor: "#4D4D4D" }}>
         
         </span>
         Started
       </span>
       </div>
       <div className="flex flex-row gap-4">
       
       <span className="px-3  rounded-sm text-[#707070] text-sm gap-4">
       <span className="px-3  rounded-sm text-white text-sm mr-2" style={{ backgroundColor: "#707070" }}>
         
         </span>
         Running
       </span>
       </div>
      </div>

      {/* المخطط العمودي */}
      <ResponsiveContainer width="100%" height={420}>
  <BarChart
    data={data}
    margin={{
      top: 20,
      right: 30,
      left: 10,
      bottom: 10,
    }}
  >
    <CartesianGrid vertical={false} stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />

    <Bar dataKey="read1" fill="#023047" radius={[12, 12, 0, 0]} />
    <Bar dataKey="read2" fill="#C89E4F" radius={[12, 12, 0, 0]} />
    <Bar dataKey="read3" fill="#4D4D4D" radius={[12, 12, 0, 0]} />
    <Bar dataKey="read4" fill="#707070" radius={[12, 12, 0, 0]} />
  </BarChart>
</ResponsiveContainer>

    </div>
  );
};

export default Chart;
