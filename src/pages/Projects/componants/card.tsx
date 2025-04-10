import React from 'react';
import { FaUser } from 'react-icons/fa';
import { AiFillWarning } from 'react-icons/ai';
import { BsThreeDots } from "react-icons/bs";
import { ProjectCardProps } from '../../../Types';

const ProjectCard: React.FC<ProjectCardProps> = ({
  directorate,
  title,
  description,
  program,
  projectManager,
  riskLevel,
  progress,
}) => {
  const riskColors: { [key: string]: string } = {
    "No Risk": "bg-green-100 text-green-700",
    "Medium Risk": "bg-yellow-100 text-yellow-700",
    "High Risk": "bg-red-100 text-red-700",
  };

  const riskClass = riskColors[riskLevel] || "bg-gray-100 text-gray-700";

  // تحديد لون progress حسب النسبة
  let progressColorClass = "bg-green-500";
  if (progress <= 33) {
    progressColorClass = "bg-red-500";
  } else if (progress <= 66) {
    progressColorClass = "bg-yellow-500";
  }

  return (
    <div className="max-w-sm rounded-2xl shadow-md overflow-hidden">
      {/* First Half - White Background */}
      <div className="bg-white p-5 space-y-4 flex flex-col">
        <div className="flex justify-between items-start">
          <div className="text-sm text-gray-500 font-medium bg-[#F2F2F2]">{directorate}</div>
          <BsThreeDots className="text-xl text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800 leading-snug">{title}</h2>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>

      {/* Second Half - Gray Background */}
      <div className="bg-gray-50 p-5 space-y-4">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-500">📘 Program:</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">{program}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="text-gray-500" />
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{projectManager}</span>
          </div>
          <div className="flex items-center gap-2">
            <AiFillWarning className="text-yellow-500" />
            <span className={`px-2 py-1 rounded-md ${riskClass}`}>{riskLevel}</span>
          </div>
        </div>

        <div>
          <span className="text-sm text-gray-500">Progress</span>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
              className={`h-2 rounded-full ${progressColorClass}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className={`text-right text-xs mt-1 font-medium ${progressColorClass.replace('bg-', 'text-')}`}>
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
