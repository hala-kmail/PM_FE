import React from "react";
import { FaTimes  } from "react-icons/fa";
// Import filter data and custom hook
import { useFilterLogic } from "../../../hook/Add filter";
import { FilterDrawerProps } from "../../../Types";
import AddTaskForm from "../../../Forms/AddTaskForm";

const AddTaskDrawer: React.FC<FilterDrawerProps> = ({ isOpen, onClose }) => {
  const { selectedFilters,  } = useFilterLogic();

  return (
    <div
      className={`fixed top-0 right-0 h-full lg:w-1/3 w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-row justify-between items-center p-4 border-b">
        <div className="flex flex-row gap-4">
          <h2 className="text-md font-semibold">
            Filters ({selectedFilters.length})
          </h2>
          <button>
            <span className="bg-gray-100 text-sm pl-2 pr-2 pt-1 pb-1 rounded-lg">
              Clear all
            </span>
          </button>
        </div>
        <button onClick={onClose} className="text-gray-600 hover:text-red-500">
          <FaTimes />
        </button>
      </div>

      <div className="flex flex-col gap-5 p-4 overflow-y-auto max-h-[100vh]">
       <AddTaskForm mode={"create"}/>
      
      </div>
      {/* <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          onClick={() => {
            alert("Apply Filters");
            onClose();
          }}
        >
          Apply Filters
        </button> */}
    </div>
  );
};

export default AddTaskDrawer;
