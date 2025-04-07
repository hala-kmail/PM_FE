// src/components/NestedRadialChart.tsx

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// بيانات الدائرة الداخلية
const innerData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },

];

// بيانات الدائرة الخارجية
const outerData = [
  { name: "Sub A1", value: 100 },
  { name: "Sub A2", value: 100 },


];

// الألوان
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF", "#FF66C4"];

const NestedRadialChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Tooltip />

          {/* الدائرة الداخلية */}
          <Pie
            data={innerData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {innerData.map((entry, index) => (
              <Cell key={`inner-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          {/* الدائرة الخارجية */}
          <Pie
            data={outerData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={120}
            fill="#82ca9d"
            label
          >
            {outerData.map((entry, index) => (
              <Cell key={`outer-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NestedRadialChart;
