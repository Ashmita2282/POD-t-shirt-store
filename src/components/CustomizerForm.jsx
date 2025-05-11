import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../themes/ThemeContext";
import { CustomizerContext } from "../context/CustomizerContext";
import ImageUploader from "./ImageUploader";

const CustomizerForm = () => {
  const theme = useContext(ThemeContext);
  const { stats, setStats } = useContext(CustomizerContext);

  const { register, watch } = useForm({
    defaultValues: {
      height: 180,
      weight: 80,
      build: "athletic",
    },
  });

  const height = watch("height");
  const weight = watch("weight");
  const build = watch("build");

  useEffect(() => {
    setStats({ height, weight, build });
  }, [height, weight, build, setStats]);

  return (
    <>
      <div className="flex items-center justify-center">
        <h2 className="italic text-l font-semibold">Please press Alt + Q to switch the Theme </h2>
      </div>

      <div className="flex items-stretch flex-col md:flex-row gap-6 p-4 w-full">
        {/* Image uploader section */}

        <div className="w-full h-full md:w-1/2 flex items-stretch ">
          <ImageUploader />
        </div>

        {/* Form section */}
        <form
          className={`w-full h-full md:w-1/2 space-y-4 p-6 border rounded-lg shadow-md ${theme.border} ${theme.text}`}
        >
          <h2 className="text-xl font-semibold mb-4">Customize Your Fit</h2>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Height (cm)
            </label>
            <input
              type="number"
              {...register("height")}
              className={`w-full p-2 rounded border ${theme.border} ${theme.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Weight (kg)
            </label>
            <input
              type="number"
              {...register("weight")}
              className={`w-full p-2 rounded border ${theme.border} ${theme.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Build</label>
            <select
              {...register("build")}
              className={`w-full p-2 rounded border ${theme.border} ${theme.text} bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="lean">Lean</option>
              <option value="regular">Regular</option>
              <option value="athletic">Athletic</option>
              <option value="big">Big</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomizerForm;
