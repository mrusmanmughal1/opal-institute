import React from "react";
import img from "../assets/logo-2.png";

const CheckoutcardDetails = () => {
  return (
    <div className="rounded-2xl w-[60%] bg-[#408BFC0D] p-10">
      <div className="">
        <img src={img} alt="" width={100} />
      </div>
      <div className="  my-4 text-2xl font-semibold">
        CompTIA Fundamentals ITF+ Exam Voucher - FCO -U61
      </div>
      <div className="">
        <p className="font-medium mb-4">Order Summary</p>
        <div className="bg-white text-gray-400 rounded-md p-6">
          <div className="pb-4 border-b border-gray-300">Payment Details</div>
          <div className="flex mb-4 my-4 justify-between">
            <p>Quantity </p> <p>2</p>
          </div>
          <div className="flex justify-between">
            <p>Price</p>
            <p>$89797</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between  bg-white p-6 rounded-md">
          <p className="font-semibold text-gray-800">Total</p>
          <p className="text-lime-400 font-semibold">$23123</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutcardDetails;
