import { theme } from "../../theme/color";

type ProgramCardProps = {
    count: number;
    label: string;
  };
  
 
  const getNumberStyle = (count: number) => {
    if (count === 5) {
      return {
        backgroundColor: theme.green_color_bg,
        color: theme.green_color,
      };
    }
    if (count === 2) {
        return {
          backgroundColor: theme.cardColor,
          color: theme.primary,
        };
      }
    if (count === 3) {
        return {
          backgroundColor: theme.red_color_bg,
          color: theme.red_color,
        };
      }
      if (count === 7) {
        return {
          backgroundColor: theme.blue_color_bg,
          color: theme.blue_color,
        };
      }
      if (count === 6) {
        return {
          backgroundColor: theme.gold_color_bg,
          color: theme.secondary,
        };
       
      }
    return {
      backgroundColor: theme.buttonGraybg,
      color: theme.text,
    };
  };
  
  const ProgramCard: React.FC<ProgramCardProps> = ({ count, label }) => {
    const style = getNumberStyle(count);
  
    return (
      <div className=" shadow-sm rounded-lg flex flex-col justify-center p-4 " style={{backgroundColor: theme.lightBackground}}>
        <div
          className="w-12 h-12 flex items-center justify-center rounded-full text-[20px] font-bold"
          style={{ backgroundColor: style.backgroundColor, color: style.color }}
        >
          {count}
        </div>
        <p className="text-[20px] font-medium mt-4" style={{ color: style.color }}>
          {label}
        </p>
      </div>
    );
  };
export default ProgramCard;  