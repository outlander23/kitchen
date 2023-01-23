import React from "react";

const GreenBox = () => {
  return (
    <div className="h-[20px] w-[20px] flex justify-center items-center border-2 border-green-500 cursor-pointer ">
      <span className="text-green-500">&#x2713;</span>
    </div>
  );
};

export default GreenBox;
