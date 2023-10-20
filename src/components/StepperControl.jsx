import React from "react";

const StepperControl = ({handleClick, currentStep, step}) => {
  return (
    <div className="container flex justify-around mt-5 mb-8">
      {/* back button */}
      <button
      onClick={() => handleClick()}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl 
        font-semibold cursor-pointer border-2 border-slate-300 hover:bg-green-700 hover:text-white transition
        duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursour-not-allowed" : ""}`}>
        Back
      </button>
      {/* next button */}
      <button
      onClick={() => handleClick("next")}
        className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl 
            font-semibold cursor-pointer  hover:bg-white hover:text-blue-300 transition
            duration-200 ease-in-out">
        {currentStep === step.length - 1 ? "Confirem" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;
