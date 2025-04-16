import React from "react";
import { theme } from "../../theme/color";

type StatusCardProps = {
  icon: React.ReactNode;
  title: string;
  count: number;
  color: string; // اللون الأساسي للستاتس
};

const StatusCard: React.FC<StatusCardProps> = ({ icon, title, count, color }) => {
  const percent = Math.min((count / 100) * 100, 100); // لحساب عرض البار حسب العدد

  return (
    <div className="bg-white rounded-xl p-4 flex items-center space-x-4 w-full">
      <div className=" rounded-full w-14 h-14 flex items-center justify-center shadow-sm" style={{backgroundColor:theme. lightBackground}}>
        {icon}
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-[16px] font-semibold text-black">{title}</h3>
          <span className="text-sm font-medium" style={{ color }}>
            {count} projects
          </span>
        </div>
        <div className="w-full bg-gray-200 h-2 mt-2 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: `${percent}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
