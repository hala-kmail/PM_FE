import React, { useState } from "react";
import ProjectCard from "./componants/card";
import FilterDrawer from "./componants/FilterDrawer";
import { FaSearch, FaPlus, FaFilter } from "react-icons/fa";
import { theme } from "../../theme/color";
import { PROJECTS } from "../../Data/Projects";
import AddProject from "./componants/Add Project Drawer/Add Project Drawer";
import PageHeader from "../../hook/PageHeader";

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Control the modal

  const filteredStudies = PROJECTS.filter(
    (PROJECT) =>
      PROJECT.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      PROJECT.projectManager.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 pl-6 relative">
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      <FilterDrawer isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      <AddProject isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pb-10">
    <PageHeader/>
          <div className="flex flex-col gap-2 w-full justify-end sm:flex-col lg:flex-row">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center gap-2"
            >
              <FaFilter />
              Filter
            </button>

            <div className="w-full lg:w-1/2 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title or manager"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#023047]"
              />
            </div>

            <button
              onClick={() => setIsModalOpen(true)} // Open the modal
              className="text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2 whitespace-nowrap"
              style={{ backgroundColor: theme.primary }}
            >
              <FaPlus className="text-base" />
              <span className="text-sm font-medium">New Project</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((PROJECT, index) => (
            <ProjectCard
              key={index}
              directorate={PROJECT.directorate}
              title={PROJECT.title}
              description={PROJECT.description}
              program={PROJECT.program}
              projectManager={PROJECT.projectManager}
              riskLevel={PROJECT.riskLevel}
              progress={PROJECT.progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default ProjectsPage;
