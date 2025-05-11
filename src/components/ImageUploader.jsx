// import React, { useContext } from "react";
// import { ThemeContext } from "../themes/ThemeContext";
// import { CustomizerContext } from "../context/CustomizerContext";

// const ImageUploader = () => {
//   const theme = useContext(ThemeContext);
//   const { image, setImage } = useContext(CustomizerContext);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div
//       className={`flex h-full flex-col items-center justify-center border-2 border-dashed ${theme.border} p-4 rounded`}
//       onDragOver={(e) => e.preventDefault()}
//       onDrop={handleDrop}
//     >
//       <div className="flex item-center justify-center text-center">
//         <p className="mb-2 text-center border p-2">
//           Drop an image here or click to upload
//           {image && (
//             <img
//               src={image}
//               alt="Uploaded Preview"
//               className="w-20 h-auto object-contain mt-2"
//             />
//           )}{" "}
//         </p>
//       </div>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleUpload}
//         className="mb-2 border"
//       />
//     </div>
//   );
// };

// export default ImageUploader;
import React, { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";
import { CustomizerContext } from "../context/CustomizerContext";

const ImageUploader = () => {
  const theme = useContext(ThemeContext);
  const { image, setImage } = useContext(CustomizerContext);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-full border-2 border-dashed ${theme.border} p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="flex items-center justify-center text-center mb-4">
        <p className="text-lg text-gray-700 dark:text-gray-400 font-semibold">
          Drop an image here or click to upload
        </p>
      </div>
      <div className="mb-4">
        {image && (
          <img
            src={image}
            alt="Uploaded Preview"
            className="w-24 h-24 object-contain mx-auto border-2 border-gray-300 rounded-md shadow-md"
          />
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="border-2 border-gray-300 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-400 rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-500 transition duration-200"
      />
    </div>
  );
};

export default ImageUploader;
