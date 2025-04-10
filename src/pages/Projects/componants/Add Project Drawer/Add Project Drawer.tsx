import React from 'react';
import { FaTimes } from 'react-icons/fa';
import CircularProgress from './componant/circule progress';
import useCircularFormsNavigation from '../../../../hook/CircularFormsNavigationLogic';
import CircularForms from './componant/circule progress';
import { theme } from '../../../../theme/color';
import { BsBorderStyle } from 'react-icons/bs';

type AddProjectProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddProject = ({ isOpen, onClose }: AddProjectProps) => {
  const {
    activeForm,
    goToNextForm,
    goToPreviousForm,
    goToForm
  } = useCircularFormsNavigation();

  const closeDrawer = () => {
    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full lg:w-1/2 w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 gap-5 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-row justify-between items-center p-4 ">
        <div className="flex flex-row gap-4">
          <h2 className="text-md font-semibold">Add Project</h2>
        </div>
        <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
  <button
    onClick={closeDrawer}
    className="text-gray-600 hover:text-red-500"
  >
    <FaTimes />
  </button>
</div>

      </div>

      <div className="flex flex-col gap-5 p-4 overflow-y-auto max-h-[100vh]">
        <CircularProgress activeForm={activeForm} goToForm={goToForm} />
   
      </div>

      {/* الأزرار */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-[#F9F9F9] h-20 flex items-center px-6 gap-5">
        <div className="flex justify-start items-center gap-4">
          {/* {activeForm > 1 && (
            <button
              type="button"
              className="bg-gray-500 text-white px-6 py-2 rounded-lg"
              onClick={goToPreviousForm}
            >
              العودة
            </button>
          )} */}

          {activeForm < 4 ? (
           <button
           type="button"
           className="text-white w-48 py-2 rounded-lg"
           style={{ backgroundColor: theme.primary }}
           onClick={goToNextForm}
         >
           save & continue
         </button>
         
          ) : (
            <button
              type="button"
              className="text-white w-48 py-2 rounded-lg"
              style={{ backgroundColor: theme.primary }}
              onClick={() => alert('تم الإرسال')}
            >
              Add Project
            </button>
          )}
        </div>
        <button
           type="button"
           className="text-white w-48 py-2 rounded-lg"
           style={{ backgroundColor: theme.buttonGraybg,
            border: `1px solid ${theme.buttonGrayborder}`, // عدّل على حسب اسم اللون المناسب بداخل الـ theme
            color: theme.buttonGraytext // أو أي لون تريده



            }}
           onClick={closeDrawer}
         >
close         </button>
      </div>
    </div>
  );
};

export default AddProject;
