import React, { useContext, useRef, useEffect, useState } from "react";
import { CustomizerContext } from "../context/CustomizerContext";
import { ThemeContext } from "../themes/ThemeContext";

const TShirtPreview = () => {
  const { image, stats, textLines } = useContext(CustomizerContext);
  const theme = useContext(ThemeContext);

  const tshirtRef = useRef(null);
  const [tshirtBounds, setTshirtBounds] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (tshirtRef.current) {
      const { width, height } = tshirtRef.current.getBoundingClientRect();
      setTshirtBounds({ width, height });
    }
  }, [stats.height, stats.weight, stats.build]);

  // Dynamic scaling logic
  let buildFactor = 1;
  if (stats.build === "lean") buildFactor = 0.9;
  if (stats.build === "athletic") buildFactor = 1.1;
  if (stats.build === "big") buildFactor = 1.2;

  const rawWidth = stats.weight * 0.8 * buildFactor;
  const rawHeight = stats.height * 0.3 * buildFactor;

  // Max 50% of container size
  const maxWidth = tshirtBounds.width * 0.5;
  const maxHeight = tshirtBounds.height * 0.5;

  const logoWidth = Math.min(rawWidth, maxWidth);
  const logoHeight = Math.min(rawHeight, maxHeight);

  const fontSize = Math.max(logoHeight * 0.12, 10); // scale text size

  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-start p-6 ${theme.bg} ${theme.text}`}
    >
      <h3 className="text-2xl font-bold mb-4 text-center">
        👕 T-Shirt Preview
      </h3>

      <div
        ref={tshirtRef}
        className={`relative w-full max-w-md rounded-xl shadow-lg ${theme.border} ${theme.bg} flex justify-center items-center overflow-hidden`}
        style={{ height: "80vh" }}
      >
        {/* T-shirt Base */}
        <img
          src="https://res.cloudinary.com/dq8hyeknf/image/upload/v1746955625/t-shirt_g3gbar.png"
          alt="T-shirt"
          style={{
            height: "100%",
            width: "auto",
            objectFit: "contain",
            zIndex: 1,
          }}
        />

        {/* Logo + Text */}
        {image && (
          <>
            <img
              src={image}
              alt="User Design"
              style={{
                width: `${logoWidth}px`,
                height: `${logoHeight}px`,
                maxWidth: maxWidth,
                maxHeight: maxHeight,
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                objectFit: "contain",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />

            {/* Text below logo */}
            <div
              className={`absolute text-center font-semibold ${theme.text}`}
              style={{
                top: `calc(40% + ${logoHeight / 2 + 10}px)`,
                left: "50%",
                transform: "translateX(-50%)",
                maxWidth: logoWidth,
                maxHeight: logoHeight * 0.6,
                overflow: "hidden",
                whiteSpace: "pre-wrap",
                lineHeight: "1.2",
                zIndex: 2,
              }}
            >
              {textLines.slice(0, 3).map((line, i) => (
                <p
                  key={i}
                  className="drop-shadow-md text-black"
                  style={{
                    fontSize: `${fontSize}px`,
                    margin: 0,
                    wordBreak: "break-word",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Stats Summary */}
      <div
        className={`mt-6 text-sm rounded-lg px-4 py-2 shadow-inner ${theme.bgSecondary} ${theme.text}`}
      >
        <p className="text-center">
          👤 Height: <span className="font-bold">{stats.height} cm</span> |
          Weight: <span className="font-bold">{stats.weight} kg</span> | Build:{" "}
          <span className="capitalize font-bold">{stats.build}</span>
        </p>
      </div>
    </div>
  );
};

export default TShirtPreview;
