import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { theme } from "../../../../../theme/color";
import exportIcon from "../../../../../assets/export.svg";

type Props = {
  onFileSelect?: (file: File | null) => void;
};

const CustomFileUpload: React.FC<Props> = ({ onFileSelect }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setFileName(file.name);
        onFileSelect?.(file); // 👈 إشعار للأب
        // console.log("Selected file:", file);
      }
    },
    [onFileSelect]
  );

  const removeFile = () => {
    setFileName(null);
    onFileSelect?.(null); // 👈 إزالة الملف
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        {...getRootProps()}
        className={`w-full border border-dashed rounded-lg py-7 px-4 flex flex-col items-center justify-center text-sm text-gray-500 cursor-pointer transition
          ${isDragActive ? "bg-gray-100 border-gray-400" : ""}
        `}
        style={{
          color: theme.buttonGraytext,
          borderColor: theme.buttonGrayborder,
        }}
      >
        <input {...getInputProps()} />
        <div className="flex items-center gap-2 flex-wrap justify-center text-center">
          <img src={exportIcon} alt="upload" />
          {fileName ? (
            <>
              <span className="text-gray-700 font-medium">{fileName}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                className="ml-2 text-red-500 hover:text-red-700 text-sm"
              >
                ❌
              </button>
            </>
          ) : (
            <span>
              {isDragActive
                ? "Drop the file here..."
                : "Upload File Or Drag Drop It Here"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomFileUpload;
