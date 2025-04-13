
import { Link, useLocation, useParams } from 'react-router-dom';
import { getTitle } from '../../hook/PageHeader';
import { PROJECT } from '../../Types';
import { StageColors, theme } from '../../theme/color';
import  Tabs, { TabOne, TabThree, TabTwo } from './componant/tabs';
import { useState } from 'react';
import { Plainingtabs } from '../../Data/PlainningTabs';

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state as PROJECT;
  const { projectName } = useParams();
  const stageClass = StageColors[project.stage] || "bg-gray-100 text-gray-700";


  const [selectedTab, setSelectedTab] = useState<number>(Plainingtabs[0].index);

  return (
    <div className="p-6 flex flex-col gap-8">
    <div className="p-6 flex flex-row gap-2">

<h1 className="text-md font-bold text-gray-800">

         <Link to={`/projects`}>
        {getTitle()}
  </Link>
  

    </h1>
    <h1 className="text-md font-bold text-gray-800">\</h1>

      <h1 className="text-md font-bold text-gray-800">
        {decodeURIComponent(projectName || '')}
      </h1>
      {/* باقي التفاصيل حسب المشروع */}
    </div>
    <div className="p-6 flex justify-between ">
    <div className="p-6 flex flex-row gap-2">
<span className='text-md  px-2 py-1 font-bold text-gray-800'>Project details</span>
    <span className={`px-2 py-1 rounded-md ${stageClass}`}>
    {project.stage}
      </span>

      </div>
      <div className="p-6 flex flex-row gap-2">
       <button
                type="button"
                className="text-white w-20 py-2 rounded-lg"
                style={{ backgroundColor: theme.buttonGraybg,
                 border: `1px solid ${theme.buttonGrayborder}`, // عدّل على حسب اسم اللون المناسب بداخل الـ theme
                 color: theme.buttonGraytext // أو أي لون تريده
     
     
     
                 }}
                // onClick={closeDrawer}
              >
     edit         </button>

     <button
                type="button"
                className="text-white w-48 py-2 rounded-lg"
                style={{ backgroundColor: theme.lightBackground,
                 border: `1px solid ${theme.borderred}`, // عدّل على حسب اسم اللون المناسب بداخل الـ theme
                 color: theme.borderred // أو أي لون تريده
     
     
     
                 }}
                // onClick={closeDrawer}
              >
     Cancel request         </button>
      </div>
      </div>
      <div>
      <Tabs
        tabs={Plainingtabs}
        selectedTab={selectedTab}
        onClick={setSelectedTab}
        orientation="horizontal"
      />
      </div>

    </div>
  );
};

export default ProjectDetails;
