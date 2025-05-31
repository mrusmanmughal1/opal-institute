import React, { useState } from "react";
import img from "../assets/voc.svg";
import { FaMinus, FaPlus } from "react-icons/fa";
import CollapsRow from "../Components/Collapsrow";
import { GoCheck } from "react-icons/go";
import { NavLink } from "react-router-dom";
const BuyVoucher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setcount] = useState(1);

  return (
    <div>
      <div className=" flex flex-col md:flex-row w-[90%] md:w-[60%] mx-auto mt-10 gap-10 ">
        <div className="w-full space-y-10">
          <div className="">
            <p className="text-sm text-gray-500">
              Home / CompTIA /{" "}
              <span className="text-primary">
                CompTIA IT Fundamentals ITF+ Exam Voucher - FCO-U61
              </span>
            </p>
          </div>
          <img src={img} alt="" className="w-full" />
        </div>
        <div className="w-full">
          <div className=" space-y-8 border-b pb-4">
            <p className="text-3xl dm-sans">
              CompTIA IT Fundamentals ITF+ Exam Voucher – FC0-U61
            </p>
            <p className="text-2xl font-semibold text-[#39B856] poppins">
              $129.99
            </p>
          </div>
          <p className="text-xs  poppins py-4 ">
            This Voucher is only applicable for Pearson VUE (online or center
            based exam). Please read the description carefully.
          </p>
          <div className="flex gap-5 mt-5">
            <div className=" flex items-center gap-5 rounded-3xl px-4 py-3 bg-slate-100">
              <span className="text-xs">
                <FaMinus onClick={() => setcount((e) => e - 1)} />
              </span>
              {count}
              <span className="text-xs">
                <FaPlus onClick={() => setcount((e) => e + 1)} />
              </span>
            </div>
            <div className="bg-primary text-white rounded-3xl w-full text-center py-3">
              <NavLink to="/check-out">Proceed to Checkout</NavLink>
            </div>
          </div>
          <div className="flex items-center text-xs gap-2 mt-6 poppins font-medium">
            <span>
              <GoCheck className="font-bold " />
            </span>
            <label htmlFor="valid-for-pak ">Validity only for Pakistan</label>
          </div>
          <div className=" mt-6 poppins">
            <button className="w-full rounded-3xl poppins text-sm font-medium border-4 py-2 border-[#1018280F]">
              Details
            </button>
          </div>
          <CollapsRow />
        </div>
      </div>
    </div>
  );
};

export default BuyVoucher;
