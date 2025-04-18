import React, { useState } from 'react';

import { ChevronDown } from "lucide-react";
import ReferenceDateUsingValue from '../pages/Projects/componants/Add Project Drawer/componant/customcalender';
import CustomTextarea from '../pages/Projects/componants/Add Project Drawer/componant/CustomTextArea';
import CustomSelect from '../pages/Projects/componants/Add Project Drawer/componant/CustomselectList';
import { Option } from '../Types';
import CustomInput from '../pages/Projects/componants/Add Project Drawer/componant/CustomInput';
import { theme } from '../theme/color';
import { FaTimes } from 'react-icons/fa';
import CustomFileUpload from '../pages/Projects/componants/Add Project Drawer/componant/CustomFileUpload';

type Props = {
  mode: "create" | "view" | "edit";
  PaymentData?: any;
};
const Add_Payment: React.FC<Props> = ({ mode, PaymentData }) => {
  // const [selected, setSelected] = useState<string | number>(PaymentData?. || "");
  const [showFileInputs, setShowFileInputs] = useState(false);

  const [formData, setFormData] = useState({
    PaymentType: PaymentData?.PaymentType || '',
    PaymentDesc: PaymentData?.PaymentDesc || '',
    Amount: PaymentData?.Amount || '',
    paymentDate: PaymentData?.paymentDate || '',
    Document_Title: PaymentData?.Document_Title || '',
    Document_Type: PaymentData?.Document_Type || '',
    Document_File: PaymentData?.Document_File || null,
  });
  
  // useEffect(() => {
  //   if (mode === "view") {
  //     setSelected(PaymentData?.Goal || "");
  //     setFormData({
  //       PaymentType: PaymentData?.PaymentType || '',
  //       PaymentDesc: PaymentData?.PaymentDesc || '',
  //       Amount: PaymentData?.Amount || '',
  //       paymentDate: PaymentData?.paymentDate || '',
  //       Document_Title: PaymentData?.Document_Title || '',
  //       Document_Type: PaymentData?.Document_Type || '',
  //       Document_File: PaymentData?.Document_File || null,
  //     });
      
  //   }
  // }, [mode, PaymentData]);

  const options: Option[] = [
    { label: "pay1", value: "pay1" },
    { label: "pay2", value: "pay2" },
  ];

  const handleChange = (field: string, value: string | number | File |null) => {
    if (mode === "edit" || mode === "create") {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto bg-white ">
      {/* Payment Type */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">Payment Type</label>
          <CustomSelect
            options={options}
            value={formData.PaymentType}
            onChange={(value) => handleChange("PaymentType", value)}
            defaultText={"Select Type"}
            icon={
              <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                <ChevronDown size={16} className="text-gray-600" />
              </div>
            }
            disabled={mode === "view"}
          />
        </div>
      </div>

      {/* Payment Description */}
      <div className="mb-5">
      <div className="flex flex-col gap-2">
        <label className="text-black text-sm font-semibold">Payment Description</label>
        <CustomTextarea
          value={formData.PaymentDesc}
          placeholder="Enter Payment Description"
          onChange={(e) => handleChange("PaymentDesc", e.target.value)}
          disabled={mode === "view"}
        />
      </div>
      </div>
      {/* Amount & Payment Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
        <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">Amount</label>
          <CustomInput
            value={formData.Amount}
            placeholder="Enter Payment Amount"
            onChange={(value) => handleChange("Amount", value)}
            disabled={mode === "view"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">Payment Date</label>
          <ReferenceDateUsingValue
            value={formData.paymentDate}
            onChange={(date) => handleChange("paymentDate", date ? date.toISOString() : '')}
            disabled={mode === "view"}
            mode={mode}
          />
        </div>
      </div>

      {/* Upload File Section */}
      <div className="mt-4">
        {!showFileInputs ? (
         <button
         type="button"
         onClick={() => setShowFileInputs(true)}
         className="w-full border border-dashed rounded-lg py-7 flex items-center justify-center"
         style={{
           color: theme.buttonGraytext,
           borderColor: theme.buttonGrayborder,
           
         }}
       >
         + Add File
       </button>
       
        ) : (
          <div className="relative   rounded-lg">
            {/* Close Button */}

            <div className="flex items-center justify-between my-5">
  <span className="text-sm font-medium" style={{ color: theme.lightTitle }}>Document</span>
  <button
    type="button"
    onClick={() => setShowFileInputs(false)}
    className="w-6 h-6 rounded-full border-[2px] flex items-center justify-center hover:text-red-500 hover:border-red-500"
    style={{
      color: theme.black,
      borderColor: theme.black,
    }}
  >
     <FaTimes />
  </button>
</div>





            {/* Document Title & Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label className="text-black text-sm font-semibold">Document Title</label>
                <CustomInput
                  value={formData.Document_Title}
                  placeholder="Enter Document Title"
                  onChange={(value) => handleChange("Document_Title", value)}
                  disabled={mode === "view"}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-black text-sm font-semibold">Document Type</label>
                <CustomSelect
                  options={[
                    { label: "Phase 1", value: "phase1" },
                    { label: "Phase 2", value: "phase2" },
                  ]}
                  value={formData.Document_Type}
                  onChange={(value) => handleChange("Document_Type", value)}
                  defaultText="Select Phase"
                  icon={
                    <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                      <ChevronDown size={16} className="text-gray-600" />
                    </div>
                  }
                  disabled={mode === "view"}
                />
              </div>
            </div>

  <CustomFileUpload onFileSelect={(file) => handleChange("Document_File", file)} />
            
{/*             
             <div className="flex justify-end mt-4">
  {mode !== "view" && (
    <button
      type="submit"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      {mode === "edit" ? "Update" : "Create"}
    </button>
  )}
</div> */}

          </div>
        )}
      </div>
    </form>
  );
};

export default Add_Payment;
