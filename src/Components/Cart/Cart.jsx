import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ calculatedTime }) => {
  // use state for change value
  const [watchTime, setWatchTime] = useState("");
  ///////
  const [breakTime, setBreakTime] = useState("");
  const setBreakTimeToLocalStorage = (breakTime) => {
    localStorage.setItem("breakTime", breakTime);
    setBreakTime(breakTime);
  };

  const [getTimeFromLocal, setTimeFromLocal] = useState("");
  /////

  useEffect(() => {
    const getWatchTimeFromLocalStorage = localStorage.getItem("watchTime");
    const getBreakTimeFromLocalStorage = localStorage.getItem("breakTime");
    setWatchTime(getWatchTimeFromLocalStorage);
    setTimeFromLocal(getBreakTimeFromLocalStorage);
  }, [calculatedTime, breakTime]);
  // state for breakTime

  ///show toast with complete button
  const handleToast = () => {
    toast("Thank you for complete...");
  };

  return (
    <div className="w-[90%] mx-auto sticky top-0">
      <h1 className="text-center text-3xl fw-bold">My Cart</h1>
      <br />
      <p className="text-center">Total Watch Time</p>
      <hr className="w-[80%] mx-auto" />
      <div className="bg-slate-100 p-1 rounded text-center my-3 w-[80%] mx-auto h-[40px]">
        {watchTime}
      </div>
      <h1 className="text-center text-xl fw-bold">Add Break Time</h1>
      <hr className="w-[80%] mx-auto" />
      <div className="flex gap-2 justify-center my-3">
        <button
          onClick={() => setBreakTimeToLocalStorage(15)}
          className="btn btn-primary"
        >
          15
        </button>
        <button
          onClick={() => setBreakTimeToLocalStorage(20)}
          className="btn btn-warning"
        >
          20
        </button>
        <button
          onClick={() => setBreakTimeToLocalStorage(25)}
          className="btn btn-info"
        >
          25
        </button>
      </div>
      <div className="bg-slate-100 p-1 rounded text-center my-3 w-[80%] mx-auto h-[40px]">
        {getTimeFromLocal}
      </div>
      <div className="text-center">
        <button onClick={handleToast} className="btn btn-primary mx-auto">
          Complete
        </button>
      </div>
    </div>
  );
};

export default Cart;
