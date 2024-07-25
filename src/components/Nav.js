import React from "react";

export default function Nav() {
  return (
    <div className="bg-white w-[100%] grid place-items-center p-2">
      <div className="md:w-[950px] w-[100%] flex justify-between">
        <h1 className="text-[20px] font-bold text-indigo-600"> Flight Booking</h1>
        <button className="font-semibold text-zinc-100 bg-indigo-900 border-2 border-indigo-500 px-5 py-1 rounded-3xl">
          Sign In
        </button>
      </div>
    </div>
  );
}
