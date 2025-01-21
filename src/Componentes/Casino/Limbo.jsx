import React from "react";
import { useState } from "react";
import AutoMode from "../GamesComponent/MinesGame/AutoMode";
import Manual from "../GamesComponent/Limbo/Manual";

export default function Limbo() {
  const [selected, setSelected] = useState("Manual");
  const [isBetPlaced, setIsBetPlaced] = useState();

  const handleClick = (type) => {
    setSelected(type);
  };

  const isBetPlacedFunction = (betPlaced) => {
    if (betPlaced) {
      setIsBetPlaced(true);
    } else {
      setIsBetPlaced(false);
    }
  };

  return (
    <div className="min-h-screen ">
      {/* {isFlashPopup && <FlashPopup handleClose={handleClose} />} */}
      <div className="flex flex-wrap-reverse m-auto  max-w-[421px] md:max-w-[500px] lg:max-w-5xl">
        <div className="w-[100%]  lg:w-[30%]  p-6 h-screen/2 bg-gray-500">
          <div className="w-full flex space-x-2 bg-gray-800 rounded-full px-2 py-3">
            <button
              onClick={() => handleClick("Manual")}
              disabled={isBetPlaced}
              className={`relative w-1/2 px-6 py-2 rounded-full overflow-hidden  font-medium   transition-all  ${
                selected === "Manual"
                  ? "bg-blue-500 text-gray-100"
                  : "bg-gray-300 text-gray-900"
              }`}
            >
              <span
                className={`absolute rounded-lg inset-0 z-[-1] bg-blue-500 transition-all duration-300 ease-in-out 
            ${
              selected === 1 ? "transform scale-x-100" : "transform  scale-x-0"
            } origin-right`}
              />
              Manual
            </button>

            <button
              onClick={() => handleClick("Auto")}
              disabled={isBetPlaced}
              className={`relative w-1/2 px-6 py-2 rounded-full overflow-hidden  font-medium transition-all  ${
                selected === "Auto"
                  ? "bg-blue-500 text-gray-100"
                  : "bg-gray-300 text-gray-900"
              }`}
            >
              <span
                className={`absolute rounded-lg inset-0 z-[-1] bg-blue-500 transition-all duration-300 ease-in-out 
            ${
              selected === 2 ? "transform scale-x-100" : "transform scale-x-0"
            } origin-left`}
              />
              Auto
            </button>
          </div>

          {selected === "Manual" ? (
            <Manual
              isBetPlacedFunction={(isBetPlaced) =>
                isBetPlacedFunction(isBetPlaced)
              }
            />
          ) : (
            <AutoMode
              isBetPlacedFunction={(isBetPlaced) =>
                isBetPlacedFunction(isBetPlaced)
              }
            />
          )}
        </div>
        <div
          id="limboBoard"
          className=" relative w-[100%]  lg:w-[70%]  px-6 py-2 h-screen/2 bg-[#0F212E]"
        ></div>
      </div>
    </div>
  );
}
