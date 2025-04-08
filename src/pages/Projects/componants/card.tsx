import React from 'react';
import { FaUser } from 'react-icons/fa';
import { AiFillWarning } from 'react-icons/ai';

// Define types for the component props
interface ProjectCardProps {
  directorate: string;
  title: string;
  description: string;
  program: string;
  projectManager: string;
  riskLevel: string;
  progress: number;
}

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

  return (
    <div className="max-w-sm big-red rounded-2xl shadow-md p-5 space-y-4">
      <div className="text-sm text-gray-500 font-medium">{directorate}</div>
      <div>
        <h2 className="text-lg font-bold text-gray-800 leading-snug">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
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
            className="bg-red-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-right text-xs text-red-500 mt-1 font-medium">{progress}%</div>
      </div>
    </div>
  );
};

export default ProjectCard;
