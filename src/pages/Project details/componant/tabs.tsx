import React, { FC, useState } from "react";

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

// 👇 Tabs Component
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

  return (
    <div
      className={`${
        orientation === "vertical" ? "flex flex-row gap-4" : ""
      } ${className}`}
    >
      <div
        role="tablist"
        aria-orientation={orientation}
        className={`${
          orientation === "vertical"
            ? "flex flex-col border-r border-gray-300"
            : "flex border-b border-gray-300"
        }`}
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
            className={`px-4 py-2 border text-sm font-medium transition ${
              orientation === "vertical"
                ? "border-l-4"
                : "border-b-4"
            } ${
              selectedTab === tab.index
                ? "border-white-600 rounded-lg bg-white text-gray-800  border-b-0"
                : "border-transparent hover:border-gray-300 text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
        className="p-4 bg-white border-t-0 flex-1 "
      >
        {Panel && <Panel.Component index={selectedTab} />}
      </div>
    </div>
  );
};

export default Tabs;
