import { theme } from '../../theme/color';
import ProgramCardsGrid from '../statestic/ProgramCardsGrid';
import StatisticCard from '../statestic/StatisticCards';
import StatusCardsGrid from '../statestic/StatusCardGrid';
import Card from './components/cards'; // تأكد من المسار الصحيح لمكون Card
import Chart from './components/Chart';

const Homepage = () => {
  return (
    <main className="" style={{ color: theme.lightBackground }}>
      <StatisticCard/>
      <Card />
      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6 h-full">
        {/* المخطط الرئيسي */}
        <div className="hidden lg:block w-full lg:w-2/3 bg-white">
  <Chart />
</div>


        {/* المخططات الجانبية */}
        {/* <ProgramCardsGrid /> */}
        <StatusCardsGrid />
        {/* <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="bg-white">
            <Overall_progress_chart />
          </div>
          <div className="bg-white">
            <Projects_Durations_chart />
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Homepage;
