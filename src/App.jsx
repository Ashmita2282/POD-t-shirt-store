import React, { useContext } from "react";
import { ThemeContext } from "./themes/ThemeContext";
import CustomizerForm from "./components/CustomizerForm";
import ImageUploader from "./components/ImageUploader";
import TextPrintBox from "./components/TextPrintBox";
import TShirtPreview from "./components/TShirtPreview";

const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen p-6 flex flex-col md:flex-row gap-4 ${theme.background} ${theme.text} transition-all`}
    >
      {/* Image Uploader Section */}
      <div className="flex-1 border rounded-lg p-4 flex flex-col items-center justify-center">
        <TShirtPreview />
      </div>

      {/* Form + Text Box Section */}
      <div className="flex-[1.5] border rounded-lg p-4 space-y-4">
        <CustomizerForm />
        <TextPrintBox />
      </div>
    </div>
  );
};

export default App;
// import React from "react";
// import ImageUploader from "./components/ImageUploader";
// import CustomizerForm from "./components/CustomizerForm";
// import { ThemeProvider } from "./themes/ThemeContext";
// import { CustomizerProvider } from "./context/CustomizerContext";

// const App = () => {
//   return (
//     <ThemeProvider>
//       <CustomizerProvider>
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//           <ImageUploader />
//           <CustomizerForm />
//         </div>
//       </CustomizerProvider>
//     </ThemeProvider>
//   );
// };

// export default App;
