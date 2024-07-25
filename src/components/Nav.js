import React from "react";
import { MdOutlineFlightTakeoff } from "react-icons/md";

export default function Nav() {
  return (
    <div className="bg-white w-[100%] grid place-items-center md:p-2 p-3 sticky top-0 z-50">
      <div className="md:w-[950px] w-[100%] flex justify-between">
        <h1 className="md:text-[20px]  text-[18px] font-bold text-indigo-900 flex items-center justify-center gap-2">
          {" "}
          <MdOutlineFlightTakeoff /> Flight Booking
        </h1>
        <button className="font-semibold text-zinc-100 bg-indigo-900 border-2 border-indigo-500 px-5 py-1 rounded-3xl">
          Sign In
        </button>
      </div>
    </div>
  );
}
