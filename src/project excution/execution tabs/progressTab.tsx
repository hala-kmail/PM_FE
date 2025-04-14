import { FC, useState } from "react";
import { theme } from "../../theme/color";
// تأكد من المسار الصحيح للملف

const SubTabs = ["Current Tasks", "Upcoming Tasks", "Completed Tasks"];

export const TabProgress: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="border-t-0 pt-4">
      <h3 className="text-sm font-semibold mb-4">Tasks</h3>

      {/* Sub Tabs */}
      <div className="flex rounded-t-md overflow-hidden border-b" style={{ borderColor: theme.buttonGrayborder }}>
        {SubTabs.map((label, i) => {
          const isActive = activeTab === i;

          return (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex-1 py-4 text-sm font-semibold text-center transition`}
              style={{
                backgroundColor: theme.buttonGraybg,
                color: isActive ? theme.primary : theme.buttonGraytext,
                borderBottom: isActive ? `1px solid ${theme.primary}` : 'none',
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="py-6 text-center text-sm" style={{ color: theme.text }}>
        {activeTab === 0 && <p>No Current Tasks</p>}
        {activeTab === 1 && <p>No Upcoming Tasks</p>}
        {activeTab === 2 && <p>No Completed Tasks</p>}
      </div>
    </div>
  );
};
