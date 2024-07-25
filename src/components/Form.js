import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { makeBooking } from "../redux/booking/actions";
import Alert from "./Alert";

export default function Form() {
  const [visible, setVisible] = useState(false);
  const [alert, setAlert] = useState(false);

  const [bookingData, setBookingData] = useState({});

  const data = useSelector((state) => state.data);

  const size = data.length;

  const dispatch = useDispatch();

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleChange = (e) => {
    const newBooking = { ...bookingData };
    newBooking[e.target.name] = e.target.value;
    setBookingData(newBooking);
  };

  const handleAddBokking = (e) => {
    e.preventDefault();
    console.log("Clicked");
    console.log(bookingData);

    dispatch(makeBooking({ ...bookingData, id: size + 1 }));
    setAlert(true)
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  };

  const handleRemove = () =>{
    setAlert(false)
  }

  return (
    <div className="w-[100%] grid place-items-center">
      <div className="md:w-[1020px] w-[95%] blurry transition-all rounded-md p-2 mt-10 shadow-md overflow-hidden">
        <div
          onClick={toggleVisible}
          className="w-full md:border-r md:p-2 border transition-all border-indigo-400 display bg-indigo-600 rounded-md px-3 py-2 flex"
        >
          <h1 className="text-white font-semibold">
            Click Here to book flight
          </h1>
          <p className="text-white font-semibold">
            {visible ? <FaAngleDown /> : <FaAngleUp />}
          </p>
        </div>

        <form
          onSubmit={(e) => handleAddBokking(e)}
          className={`bg-white rounded md:p-1 p-2 flex flex-col md:flex-row justify-between gap-3 md:items-center w-[100%] transition-all opacity-1 md:mt-0 mt-3 ${
            !visible ? "mobileResponsive" : "visibleInputs"
          }`}
        >
          <div className="w-full md:border-r md:p-2">
            <p className="font-semibold">Destination From </p>
            <select
              name="from"
              required
              onChange={(e) => handleChange(e)}
              className="md:bg-white outline-none w-[100%] bg-zinc-100 p-1 border rounded md:rounded-none"
            >
              <option>Please Select</option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Coxs Bazar</option>
            </select>
          </div>
          <div className=" w-full md:border-r md:p-2 ">
            <p className="font-semibold">Destination To </p>
            <select
              name="to"
              required
              onChange={(e) => handleChange(e)}
              className="md:bg-white outline-none w-[100%] bg-zinc-100 p-1 border rounded md:rounded-none"
            >
              <option>Please Select</option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Coxs Bazar</option>
            </select>
          </div>
          <div className=" w-full md:border-r md:p-2">
            <p className="font-semibold"> Journey Date </p>
            <input
              type="date"
              required
              name="date"
              onChange={(e) => handleChange(e)}
              className="outline-none md:bg-white  w-[100%] bg-zinc-100 p-1 border rounded md:rounded-none"
            />
          </div>
          <div className=" w-full md:border-r md:p-2">
            <p className="font-semibold">Guest </p>
            <select
              name="guest"
              required
              onChange={(e) => handleChange(e)}
              className="md:bg-white outline-none w-[100%] bg-zinc-100 p-1 border rounded md:rounded-none"
            >
              <option>Please Select</option>
              <option>One Person</option>
              <option>Two Person</option>
              <option>Three Person</option>
              <option>Four Person</option>
            </select>
          </div>

          <div className="w-full md:border-r md:p-2">
            <p className="font-semibold">Travel Class </p>
            <select
              name="className"
              required
              onChange={(e) => handleChange(e)}
              className="md:bg-white outline-none w-[100%] bg-zinc-100 p-1 border rounded md:rounded-none"
            >
              <option>Please Select</option>
              <option>Business</option>
              <option>Economy</option>
            </select>
          </div>

          <hr className="mt-5" />

          <div className="w-full">
            <button
              type="submit"
              onClick={toggleVisible}
              className="bg-indigo-900 px-4 py-1 rounded-3xl text-white font-semibold border-2 border-indigo-300 w-full md:mt-0 mt-5"
            >
              Book Flight
            </button>
          </div>
        </form>
      </div>

      {alert && <Alert peep="Added To BookingList" handleRemove={handleRemove} />}
    </div>
  );
}
