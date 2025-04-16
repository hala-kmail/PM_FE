import React, { useState } from "react";
import { theme } from "../../../../../theme/color";

type Props = {
  value: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
};

const CustomProgressBar: React.FC<Props> = ({ value, onChange, disabled = false }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const percentage = `${value}%`;

  return (
    <div className="w-full relative">
      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        disabled={disabled}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="w-full h-4 appearance-none rounded-full border"
        style={{
          background: `linear-gradient(to right, ${theme.primary} ${value}%, white ${value}%)`,
          borderColor: theme.buttonGrayborder // Tailwind gray-300
        }}
      />

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="absolute -top-7 text-xs bg-black text-xs text-white px-1 py-1 rounded shadow transition"
          style={{ left: `calc(${percentage} - 15px)` }}
        >
          {value}%
        </div>
      )}

      {/* Marks */}
      <div className="flex justify-between text-xs text-gray-500 mt-1 ">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i}>{i * 20}</span>
        ))}
      </div>

      {/* Custom Thumb Style */}
      <style >{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: ${theme.primary};
          cursor: pointer;
        //    margin-left: -1px;
        //   border: 2px solid white;
        }

        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: ${theme.primary};
          cursor: pointer;
          border: 2px solid white;
        }

        input[type="range"]::-ms-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: ${theme.primary};
          cursor: pointer;
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
};

export default CustomProgressBar;
