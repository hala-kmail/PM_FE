
import React from 'react';

import Card from './components/cards'; // تأكد من المسار الصحيح لمكون Card
import Chart from './components/Chart';
import NestedRadialChart from './components/radialChart';
const Homepage = () => {
  return (
   

      <main className="p-2">
        <Card /> {/* استدعاء مكون Card هنا */}
        <div className="flex justify-between mt-10 gap-10">
  <div className="h-auto bg-white w-2/3">
    <Chart />
  </div>
  <div className="h-auto bg-white w-1/3">
    <NestedRadialChart />
  </div>
</div>

      
      </main>
    
  );
};

export default Homepage;
