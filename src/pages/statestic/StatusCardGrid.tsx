import { theme } from "../../theme/color";
import StatusCard from "./StatusCard";
import IconInit from "../../assets/IconInit.svg";
import IconPlanning from "../../assets/IconPlanning.svg";
import IconExecution from "../../assets/IconExecution.svg";
import IconClosed from "../../assets/IconClosed.svg";
import IconReject from "../../assets/IconReject.svg";

const statuses = [
  { title: "Initialization", count: 80, color: "#003049", icon: IconInit },
  { title: "Planning", count: 10, color: theme.secondary, icon: IconPlanning },
  { title: "Execution", count: 20, color: theme.green_color, icon: IconExecution },
  { title: "Closed", count: 3, color: "#333333", icon: IconClosed },
  { title: "Reject", count: 0, color: "#EA3957", icon: IconReject },
];

const StatusCardsGrid = () => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mb-4" style={{ color: theme.text }}>Projects By Status</h2>
      <div className="space-y-4">
        {statuses.map((status, index) => (
          <StatusCard
            key={index}
            icon={<img src={status.icon} alt={status.title} className="w-10 h-10" />}
            title={status.title}
            count={status.count}
            color={status.color}
          />
        ))}
      </div>
    </div>
  );
};

export default StatusCardsGrid;
