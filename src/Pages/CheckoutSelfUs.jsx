import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import img from "../assets/logo-2.png";
import CheckOutBankTransfer from "../Components/CheckOutBankTransfer";
import CheckoutcardDetails from "../Components/CheckoutcardDetails";
import Otp from "../Components/Otp";

const CheckoutSelfUs = () => {
  const [selectedPayment, setSelectedPayment] = useState("us");

  return (
    <div className="bg-slate-50   pb-20">
      <div className="w-[90%] poppins mx-auto">
        <div className=" py-10">
          <p className="text-2xl font-semibold">Check Out</p>
          <div className="flex items-center text-gray-700 text-xs gap-1">
            <p>Vouchers</p> <IoIosArrowForward /> <p>Checkout</p>
          </div>
        </div>
        <div className=" mb-10">
          <div className=" gap-2 text-[10px] font-semibold  flex items-center">
            <div
              className={`px-4 py-2 border-2 rounded-[5px] cursor-pointer ${
                selectedPayment === "self"
                  ? "border-primary"
                  : "border-gray-200"
              }`}
              onClick={() => setSelectedPayment("self")}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === "self"}
                  onChange={() => setSelectedPayment("self")}
                  className="w-3 h-3"
                />
                <label className="cursor-pointer">Book Exam Yourself</label>
              </div>
            </div>

            <div
              className={`px-4 py-2 border-2 rounded-[5px] cursor-pointer ${
                selectedPayment === "us" ? "border-primary" : "border-gray-200"
              }`}
              onClick={() => setSelectedPayment("us")}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === "us"}
                  onChange={() => setSelectedPayment("us")}
                  className="w-3 h-3"
                />
                <label className="cursor-pointer">Book Exam with us</label>
              </div>
            </div>
          </div>
        </div>

        {selectedPayment == "self" && (
          <div className=" flex ">
            <div className="w-full  ">
              <div className="w-[80%]">
                <form
                  action=""
                  className="   bg-white p-8 rounded-lg space-y-3"
                >
                  <p className="font-semibold text-xl my-4">
                    Personal Information
                  </p>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="" className="font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className="w-full p-2 rounded-md border border-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="" className="font-medium">
                      Email
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="w-full p-2 rounded-md border border-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="" className="font-medium">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      className="w-full p-2 rounded-md border border-gray-400"
                    />
                  </div>
                  <p className="font-semibold text-xl my-4">
                    Payment Information
                  </p>
                  <p className="font-medium ">Credit/Debit Card</p>
                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      placeholder="Enter CardHoler Name"
                      className="w-full p-2 rounded-md border border-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      placeholder="Enter Card Number"
                      className="w-full p-2 rounded-md border border-gray-400"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        placeholder="Expiration Date"
                        className="w-full p-2 rounded-md border border-gray-400"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <input
                        type="text"
                        placeholder="CVV"
                        className="w-full p-2 rounded-md border border-gray-400"
                      />
                    </div>
                  </div>
                  <div className="text-xs ">
                    You will receive an email shortly.
                  </div>
                  <div className="flex gap-8">
                    <button className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md">
                      Cancel
                    </button>
                    <button className="bg-primary w-full py-2  text-white rounded-md">
                      Pay Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full">
              <CheckoutcardDetails />
            </div>
          </div>
        )}
        {selectedPayment == "us" && <CheckOutBankTransfer />}
      </div>
    </div>
  );
};

export default CheckoutSelfUs;
