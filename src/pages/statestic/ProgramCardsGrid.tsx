import { theme } from "../../theme/color";
import ProgramCard from "./ProgramCard";



const programs = [
  { count: 6, label: 'تنوع انتقائي' },
  { count: 5, label: 'تنوع انتقائي' },
  { count: 1, label: 'تنوع انتقائي' },
  { count: 2, label: 'تنوع انتقائي' },
  { count: 3, label: 'تنوع انتقائي' },
  { count: 7, label: 'تنوع انتقائي' },
  { count: 3, label: 'تنوع انتقائي' },
  { count: 7, label: 'تنوع انتقائي' },
];

const ProgramCardsGrid = () => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mb-4" style={{ color: theme.text }}>Projects By Program</h2>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 ">
        {programs.map((prog, index) => (
          <ProgramCard key={index} count={prog.count} label={prog.label} />
        ))}
      </div>
    </div>
  );
};

export default ProgramCardsGrid;
