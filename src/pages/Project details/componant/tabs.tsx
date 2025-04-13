import React, { FC, useState } from "react";
import { theme } from "../../../theme/color";

// 👇 Components for each tab
export const TabOne: FC<{ index: number }> = ({ index }) => (
  <div className="border-t-0">
    <h3 className="text-xl font-semibold">Tab One Content</h3>
    <p>This is the content of tab one. (Index: {index})</p>
  </div>
);

export const TabTwo: FC<{ index: number }> = ({ index }) => (
  <div>
    <h3 className="text-xl font-semibold">Tab Two Content</h3>
    <p>This is the content of tab two. (Index: {index})</p>
  </div>
);

export const TabThree: FC<{ index: number }> = ({ index }) => (
  <div>
    <h3 className="text-xl font-semibold">Tab Three Content</h3>
    <p>This is the content of tab three. (Index: {index})</p>
  </div>
);

type TabsProps = {
  tabs: {
    label: string;
    index: number;
    Component: FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export const Tabs: FC<TabsProps> = ({
  className = "",
  tabs = [],
  selectedTab = 0,
  onClick,
  orientation = "horizontal",
}) => {
  const Panel = tabs.find((tab) => tab.index === selectedTab);
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`w-full ${isVertical ? "flex flex-col sm:flex-row gap-4" : ""} ${className}`}
    >
      {/* Tabs Container with grid layout */}
      <div
        role="tablist"
        aria-orientation={orientation}
        className={`${
          isVertical
            ? "flex flex-row sm:flex-col border-b sm:border-b-0 sm:border-r border-gray-300"
            : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-2 border-b-0 border-gray-300 "
        } w-full sm:w-full`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.index}
            onClick={() => onClick(tab.index)}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
            className={`w-1/2 md:w-full lg:w-full px-4 py-2 text-sm font-medium transition rounded-md ${
              selectedTab === tab.index
                ? "border  bg-white text-blue-700 border-0"
                : "border border-transparent hover:border-gray-300 text-gray-600"
            }`}

            style={{
              borderColor: selectedTab === tab.index ? theme.primary : "transparent",
              color: selectedTab === tab.index ? theme.primary : "",
            }}
          >
          
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
        className="p-4 bg-white border-t-0 flex-1 w-full"
      >
        {Panel && <Panel.Component index={selectedTab} />}
      </div>
    </div>
  );
};

export default Tabs;
