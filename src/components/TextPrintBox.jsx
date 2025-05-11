import React, { useState, useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";
import { CustomizerContext } from "../context/CustomizerContext";

const TextPrintBox = () => {
  const [text, setText] = useState("");
  const theme = useContext(ThemeContext);
  const { setTextLines } = useContext(CustomizerContext);

  const handleChange = (e) => {
    let inputValue = e.target.value;

    // Split into words and enforce 30-word limit
    const words = inputValue.trim().split(/\s+/);
    if (words.length > 30) {
      inputValue = words.slice(0, 30).join(" ");
    }

    // Update local text state
    setText(inputValue);

    // Split into lines for preview (up to 3 lines)
    const lines = inputValue
      .trim()
      .split(/\n/)
      .slice(0, 3); // max 3 lines

    setTextLines(lines);
  };

  return (
    <div className="w-full p-4 flex flex-col justify-start">
      <label className="block mb-3 text-lg font-semibold text-gray-700 dark:text-gray-400">
        Text to print (Max 3 lines / 30 words)
      </label>
      <textarea
        rows="6"
        value={text}
        onChange={handleChange}
        placeholder="Type your message..."
        className={`w-full h-full p-4 rounded-lg border-2 ${theme.border} ${theme.text} bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out shadow-md dark:shadow-lg`}
      />
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {text.trim().split(/\s+/).length} / 30 words
      </div>
    </div>
  );
};

export default TextPrintBox;
