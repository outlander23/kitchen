import React from "react";
import logo from "../assets/logo.png";
export default function Headbar() {
  return (
    <div className="flex justify-between items-center pr-4 pl-4 pb-4">
      <div className="p-4">
        <img src={logo} className="w-[25px] h-[25px] " />
      </div>
      <div>
        <span>
          <span className=" font-poppins text-lg font-bold text-purple-500 ">
            12 Open
          </span>
          <span className=" font-bold pl-2 pr-2 ">|</span>
          <span className=" font-bold  ">25 Completed</span>
        </span>
      </div>
      <div>
        <span className="w-[30px] h-[30px] bg-purple-600  justify-center items-center flex rounded-lg ">
          <span className=" rotate-12  text-white text-lg font-bold tran ">
            &#x21bb;
          </span>
        </span>
      </div>
    </div>
  );
}
