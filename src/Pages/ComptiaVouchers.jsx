import React from "react";
import voc from "../assets/voc.svg";
import { NavLink } from "react-router-dom";
const ComptiaVouchers = () => {
  const vouchers = [
    {
      name: "CompTIA A+",
      description:
        "The CompTIA A+ certification is a globally recognized certification that validates the skills of entry-level IT professionals.",
      price: "$100",
    },
    {
      name: "CompTIA Network+",
      description:
        "The CompTIA Network+ certification is a globally recognized certification that validates the skills of entry-level IT professionals.",
      price: "$100",
    },
    {
      name: "CompTIA Security+",
      description:
        "The CompTIA Security+ certification is a globally recognized certification that validates the skills of entry-level IT professionals.",
      price: "$100",
    },
    {
      name: "CompTIA Project+",
      description:
        "The CompTIA Project+ certification is a globally recognized certification that validates the skills of entry-level IT professionals.",
      price: "$100",
    },
    {
      name: "CompTIA A+",
      description:
        "The CompTIA A+ certification is a globally recognized certification that validates the skills of entry-level IT professionals.",
      price: "$100",
    },
    {
      name: "CompTIA Network+",
      description:
        "The CompTIA Network+ certification is a globally recognized certification that validates the skills of entry-level IT professionals.",
      price: "$100",
    },
    {
      name: "CompTIA Security+",
      description:
        "The CompTIA Security+ certification is a globally recognized certification that validates the skills of entry-level IT professionals.",
      price: "$100",
    },
    {
      name: "CompTIA Project+",
      description:
        "The CompTIA Project+ certification is a globally recognized certification that validates the skills of entry-level IT professionals.",
      price: "$100",
    },
  ];

  return (
    <div>
      <div className="w-[80%] mx-auto">
        <div className="mt-10">
          <div className="text-center inter">
            <p className="text-4xl font-semibold ">CompTIA Exam Vouchers</p>

            <p className="text-lg mt-10 text-[#55595F]">
              Welcome to our CompTIA Exam Vouchers store, your one-stop solution
              for discounted and reliable voucher codes for all CompTIA
              certification exams.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <p>Showing 11 results</p>
          <select name="" id="">
            <option value="">Sort by</option>
            <option value="">Price</option>
            <option value="">Name</option>
            <option value="">Date</option>
          </select>
        </div>
        <div className="mx-auto  mt-10 w-[90%]">
          <div className="grid md:grid-cols-3  gap-10   ">
            {vouchers.map((val, i) => {
              return (
                <div
                  index={i}
                  className=" flex  dm-sans flex-col justify-between p-4 shadow"
                >
                  <img src={voc} alt="" />

                  <p className="text-center  text-sm   my-2   font-semibold">
                    {val.description}
                  </p>
                  <p className="text-red-500 inter my-2 font-semibold">
                    {val.price}.90
                  </p>
                  <NavLink
                    to="/"
                    className="bg-[#F1F1F3] text-center py-2 px-10 rounded-md font-semibold"
                  >
                    Order Now
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComptiaVouchers;
