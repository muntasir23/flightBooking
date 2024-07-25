import React from "react";
import { RxCrossCircled } from "react-icons/rx";

export default function Booking() {
  return (
    <tr className="text-[14px] md:text-[18px]">
      <td className="md:px-[30px] px-5 py-2 pl-2">Chittagong</td>
      <td className="md:px-[30px] px-5 py-2">Dhaka</td>
      <td className="md:px-[30px] px-5 py-2">15/5/2024</td>
      <td className="md:px-[30px] px-5 py-2">2</td>
      <td className="md:px-[30px] px-5 py-2">Business</td>
      <td className="md:px-[30px] px-5 py-2 text-red-600"><RxCrossCircled /></td>
    </tr>
  );
}
