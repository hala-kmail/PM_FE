import { useEffect, useState } from "react";

export interface ProjectIdentificationProps {
  mode: "create" | "view" | "edit";
  projectData?: any;
}

export const useProjectIdentification = ({ mode, projectData }: ProjectIdentificationProps) => {
  const [formData, setFormData] = useState({
    row1Field1: projectData?.projectNameEnglish || "",
    row1Field2: projectData?.projectNameArabic || "",
    row2Field1: projectData?.projectDescriptionEnglish || "",
    row2Field2: projectData?.projectDescriptionArabic || "",
    row3Field1: projectData?.projectNumberMOF || "",
    projectType: projectData?.projectType || "",
    projectNature: projectData?.projectNature || "",
    projectPriority: projectData?.projectPriority || "",
    linkedProject: projectData?.linkedProject || "",
  });

  const [showInput, setShowInput] = useState(() => {
    return mode === "view" && projectData?.linkedProject?.toLowerCase() === "yes";
  });

  useEffect(() => {
    if (formData.linkedProject?.toLowerCase() === "yes") {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  }, [formData.linkedProject]);

  const handleToggle = () => {
    if (mode !== "view") {
      const newValue = !showInput;
      setShowInput(newValue);
      // تحديث قيمة linkedProject بناءً على السويتش
      const updatedValue = newValue ? "yes" : "no";
      setFormData((prev) => ({
        ...prev,
        linkedProject: updatedValue,
      }));
    }
  };

  const handleChange = (field: string, value: string | number) => {
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
    // تقدري تضيفي إرسال البيانات للسيرفر هون
  };

  return {
    formData,
    showInput,
    handleChange,
    handleSubmit,
    handleToggle,
    mode,
  };
};
