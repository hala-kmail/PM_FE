
import { theme } from '../../theme/color';
import Card from './components/cards'; // تأكد من المسار الصحيح لمكون Card
import Chart from './components/Chart';
import Overall_progress_chart from './components/Overall Progress';
import Projects_Durations_chart from './components/Projects Durations';

const Homepage = () => {
  return (
    <main className=" p-2 " style={{ color: theme.lightBackground }}>
      <Card /> {/* استدعاء مكون Card هنا */}
      <div className="flex justify-between mt-10 gap-6 h-full">
        <div className="h-full bg-white w-2/3 ">
          <Chart />
        </div>
        <div className="flex flex-col w-1/3 gap-6 h-full ">
          <div className="h-1/2 bg-white">
            <Overall_progress_chart />
          </div>
          <div className="h-1/2 bg-white">
            <Projects_Durations_chart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
