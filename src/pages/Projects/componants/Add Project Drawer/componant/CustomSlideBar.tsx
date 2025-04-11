import React from "react";
import { theme } from "../../../../../theme/color";

type Props = {
  showInputField: boolean;
  onToggle: () => void;
};

const CustomSlider: React.FC<Props> = ({ showInputField, onToggle }) => {
  return (
    <div className=" max-w-xs">
      {/* Custom Slider */}
      <div className="">
     
        <div
          onClick={onToggle}
          className={`relative inline-block w-full h-12 cursor-pointer rounded-md transition duration-300 ease-in `}
        >
          {/* Split into Yes/No sections */}
          <div className="absolute inset-0 flex">
            {/* "No" section */}
            <div
              className={`w-1/2 h-full flex items-center justify-center text-white font-semibold rounded-l-md 
                
              }`}
              style={{ backgroundColor: showInputField ? 'rgb(209, 213, 219)':theme.primary   }} // default gray-300 color
            >
              No
            </div>
            {/* "Yes" section */}
            <div
  className={`w-1/2 h-full flex items-center justify-center text-white font-semibold rounded-r-md`}
  style={{ backgroundColor: showInputField ? theme.primary : 'rgb(209, 213, 219)' }} // default gray-300 color
>
  Yes
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
