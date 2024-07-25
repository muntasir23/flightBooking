import React from "react";
import Booking from "./Booking";
import { useSelector } from "react-redux";

export default function BookingList() {
  const bookingData = useSelector((state) => state.data);

  console.log(bookingData);

  return (
    <div className="w-[100%] grid place-items-center mt-5">
      <div className="md:w-[1020px] max-h-[500px] mb-[20px] w-[95%] rounded-md blurry shadow-md p-2 tableclass">
        <table className="table-auto w-[100%] rounded-lg">
          <thead>
            <tr className="text-left text-[14px] md:text-[16px] w-[100%] bg-zinc-100 rounded-md text-indigo-900">
              <th className="md:px-[30px] px-5 py-2 pl-2">Destination From</th>
              <th className="md:px-[30px] px-5 py-2">Destination To</th>
              <th className="md:px-[30px] px-5 py-2">Journey Date</th>
              <th className="md:px-[30px] px-5 py-2">Guest</th>
              <th className="md:px-[30px] px-5 py-2">Class Name</th>
              <th className="md:px-[30px] px-5 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking) => (
              <Booking key={booking.id} value={booking} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
