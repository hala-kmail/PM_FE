import React from "react";
import PhaseTable from "./componant/phasestable";
import { theme } from "../../theme/color";
import { FaPlus } from "react-icons/fa";

const PhaseTab: React.FC = () => {
  return (
    <div className="space-y-6 mt-2">
      {/* Header */}
      <div className="flex justify-between items-center">
      <span className="text-lg font-bold" style={{ color: theme.black }}>Tasks List</span>

          {/* <button
              type="button"
              className="w-full sm:w-48 py-2 rounded-lg text-sm font-medium"
              style={{
                backgroundColor: theme.text,
                border: `1px solid ${theme.text}`,
                color: theme.white,
              }}
            >
             Add new Task
            </button> */}

             <button
                           // Open the modal
                          className="text-white px-8 py-3 rounded-lg  flex items-center gap-2 whitespace-nowrap"
                          style={{
                            backgroundColor: theme.text,
                            border: `1px solid ${theme.text}`,
                            color: theme.white,
                          }}
                        >
                          <FaPlus className="text-base" />
                          <span className="text-sm font-medium">Add new Task</span>
                        </button>
      </div>

      {/* Table Section */}
      <div className="grid grid-cols-1 gap-2">
        <div className="flex flex-col">
          <PhaseTable />
        </div>
      </div>
    </div>
  );
};

export default PhaseTab;
