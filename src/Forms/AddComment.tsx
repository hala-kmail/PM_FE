import React, { useState } from 'react';
import CustomTextarea from '../pages/Projects/componants/Add Project Drawer/componant/CustomTextArea';

type Props = {
  mode: "create" | "view" | "edit";
  CommentData?: any;
};
const Add_Comment: React.FC<Props> = ({ mode, CommentData }) => {

  const [formData, setFormData] = useState({
    content: CommentData?.content || '',
  });
  
 
 
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
      {/* Comment Type */}
      

      {/* Comment Description */}
      <div className="mb-5">
      <div className="flex flex-col gap-2">
        <label className="text-black text-sm font-semibold">Task</label>
        <CustomTextarea
          value={formData.content}
          placeholder="Add your comment"
          onChange={(e) => handleChange("content", e.target.value)}
          disabled={mode === "view"}
        />
      </div>
      </div>
     
    </form>
  );
};

export default Add_Comment;
