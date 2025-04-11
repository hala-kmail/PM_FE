
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectName } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Project: {decodeURIComponent(projectName || '')}
      </h1>
      {/* باقي التفاصيل حسب المشروع */}
    </div>
  );
};

export default ProjectDetails;
