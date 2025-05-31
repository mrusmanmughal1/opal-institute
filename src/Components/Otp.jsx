import React, { useState } from "react";
import CheckoutcardDetails from "./CheckoutcardDetails";
import { IoIosArrowForward } from "react-icons/io";
import Successfullpayment from "../Pages/Successfullpayment";

const Otp = ({ setselect }) => {
  return (
    <div className=" bg-white p-4 rounded-lg ">
      <div className="flex  gap-20">
        <div className="w-full">
          <div className="my-10">
            <p className="text-2xl font-semibold mb-4">Enter OTP</p>
            <p className="text-xs text-gray-500 mb-4">
              We have sent an OTP to your email, please enter the OTP here to
              continue.
            </p>
            <div
              className="
           "
            >
              <div className="flex   gap-2 ">
                <input
                  type="text"
                  maxLength={1}
                  className="w-14 h-14 bg-gray-100 text-center border-gray-100 border"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-14 h-14 bg-gray-100 text-center border-gray-100 border"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-14 h-14 bg-gray-100 text-center border-gray-100 border"
                />
                <input
                  type="text"
                  maxLength={1}
                  className="w-14 h-14 bg-gray-100 text-center border-gray-100 border"
                />
              </div>
              <div className="my-6 text-center w-1/2 ">
                <p className="text-sm text-gray-500">00:120 Sec</p>
                <p className="text-xs ">Don’t receive code ? Re-send</p>
              </div>
            </div>
            <div className="flex gap-8">
              <button className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md">
                Cancel
              </button>
              <button
                onClick={() => setselect(3)}
                className="bg-primary w-full py-2  text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
