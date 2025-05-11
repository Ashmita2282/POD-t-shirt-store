import React, { useContext } from "react";
import { CustomizerContext } from "../context/CustomizerContext";
import { ThemeContext } from "../themes/ThemeContext";

const PreviewDisplay = () => {
  const { stats, image, textLines } = useContext(CustomizerContext);
  const theme = useContext(ThemeContext);

  return (
    <div className={`border mt-4 p-4 rounded ${theme.border}`}>
      <h2 className="text-lg font-bold mb-2">Live Preview</h2>
      <p>Height: {stats.height} cm</p>
      <p>Weight: {stats.weight} kg</p>
      <p>Build: {stats.build}</p>
      <div className="my-2">
        <img src={image} alt="Preview" className="w-32 h-auto" />
      </div>
      <div className="bg-gray-100 p-2 rounded text-sm text-center italic">
        {textLines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default PreviewDisplay;
