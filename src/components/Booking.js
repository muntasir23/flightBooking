import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteBooking } from "../redux/booking/actions";

export default function Booking({ value }) {
  const { from, to, date, guest, className, id } = value;

  const dispatch = useDispatch();

  const handleDelete = (bookingId) => {
    dispatch(deleteBooking(bookingId));
  };

  return (
    <tr className="text-[14px] md:text-[16px]">
      <td className="md:px-[30px] px-5 py-2 pl-2">{from}</td>
      <td className="md:px-[30px] px-5 py-2">{to}</td>
      <td className="md:px-[30px] px-5 py-2">{date}</td>
      <td className="md:px-[30px] px-5 py-2">{guest}</td>
      <td className="md:px-[30px] px-5 py-2">{className}</td>
      <td
        onClick={() => handleDelete(id)}
        className="md:px-[30px] px-5 py-2 text-red-600 cursor-pointer"
      >
        <button>
          <RxCrossCircled />
        </button>
      </td>
    </tr>
  );
}
