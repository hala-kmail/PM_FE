import React, { useEffect, useState } from "react";
import ProjectCard from "./componants/card";
import { FaSearch, FaPlus, FaFilter } from "react-icons/fa";

// Define types for the study object
interface Study {
  directorate: string;
  title: string;
  description: string;
  program: string;
  projectManager: string;
  riskLevel: string;
  progress: number;
}

const ProjectsPage: React.FC = () => {
  const [card, setCard] = useState<Study[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const studies: Study[] = [
    {
      directorate: "General Directorate of Economic Sectors",
      title: "Feasibility Study on Using Renewable Energy as a Natural Gas Substitute",
      description: "Aiming to reduce production costs and enhance the competitiveness of the industrial sector.",
      program: "Economic Diversification Policies",
      projectManager: "Humaid Al-Saadi",
      riskLevel: "No Risk",
      progress: 20,
    },
    {
      directorate: "General Directorate of Economic Sectors",
      title: "Study on Hydrogen as Future Fuel",
      description: "Evaluating hydrogen's potential in the national energy mix.",
      program: "Green Innovation",
      projectManager: "Aisha Al-Naimi",
      riskLevel: "Medium Risk",
      progress: 45,
    },
  ];

  const filteredStudies = studies.filter(
    (study) =>
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.projectManager.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
        <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title or manager"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Add New Button */}
          <button
            onClick={() => alert("Open Add New Modal")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <FaPlus />
            Add New
          </button>

          {/* Filter Button */}
          <button
            onClick={() => alert("Open Filter Sidebar")}
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center gap-2"
          >
            <FaFilter />
            Filter
          </button>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study, index) => (
            <ProjectCard
              key={index}
              directorate={study.directorate}
              title={study.title}
              description={study.description}
              program={study.program}
              projectManager={study.projectManager}
              riskLevel={study.riskLevel}
              progress={study.progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
