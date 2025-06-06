import React, { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import s from "../assets/Group 1597881710.png";
import pic from "../assets/ff.png";
import one from "../assets/images/buypte/1.png";
import ape from "../assets/images/buypte/ape.png";
import alfa from "../assets/images/buypte/alfa.png";
import smt from "../assets/images/buypte/smt.png";
import ape1 from "../assets/images/buypte/ape1.png";

import valid from "../assets/images/buypte/valid.png";
import tees from "../assets/images/buypte/60.png";
import novy from "../assets/images/buypte/90.png";

import ptevoucher from "../assets/images/buypte/ptevoucher.png";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ButPtevoucher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+923258603436";
  const message = "hi";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="w-[80%] poppins   mx-auto py-14">
      <p className="text-center mb-2 text-4xl font-semibold">
        Choose from our Deals
      </p>
      <p className="text-xs text-gray-500 text-center">
        You can choose a plan which suits you best.
      </p>
      <div className="grid grid-cols-3   my-10 justify-center items-center">
        <div className="bg-[#EFF2FF] relative left-5 rounded-3xl p-10">
          <p className="text-4xl font-semibold">PTE + Alfa PTE</p>
          <p className="text-xs">Order Now & Save Big</p>
          <p className="my-6 text-3xl">Rs. 67,600/-</p>
          <NavLink
            to="/checkout-PTE"
            className="bg-primary  rounded-full px-4 py-3 text-white border-shadowborder border-4"
          >
            Order Now
          </NavLink>
          <p className="li my-10">Save Rs. 17,300/-</p>
          <div className="py-8 border-t border-[#D1D1F7]">
            <p>Key Features</p>
            <ul className="text-xs mt-2">
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>{" "}
                PTE Voucher (Eligible for Academic, UKVI, Core)
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>
                Alfa PTE Practice Portal (60 days validity){" "}
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <img src={pic} alt="" />
            <img src={alfa} alt="" />
          </div>
        </div>
        <div className="bg-white shadow-md z-10 rounded-3xl p-10">
          <p className="text-4xl font-semibold">PTE + SPMT</p>
          <p className="text-xs">Order Now & Save Big</p>
          <p className="my-6 text-3xl">Rs. 68,900/-</p>
          <NavLink
            to="/checkout-PTE"
            className="bg-primary  rounded-full px-4 py-3 text-white border-shadowborder border-4"
          >
            Order Now
          </NavLink>
          <p className="li my-10">Save Rs. 14,100/-</p>
          <div className="py-8 border-t border-[#D1D1F7]">
            <p>Key Features</p>
            <ul className="text-xs  mt-2">
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>{" "}
                PTE Voucher (Eligible for Academic, UKVI, Core)
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>
                Pearson Scored Practice Mock Test Voucher{" "}
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <img src={pic} alt="" />
            <img src={smt} alt="" />
          </div>
        </div>
        <div className="bg-[#EFF2FF] right-3 relative rounded-3xl p-10">
          <p className="text-4xl font-semibold">PTE + APEUni</p>
          <p className="text-xs">Order Now & Save Big</p>
          <p className="my-6 text-3xl">Rs. 68,500/-</p>
          <NavLink
            to="/checkout-PTE"
            className="bg-primary  rounded-full px-4 py-3 text-white border-shadowborder border-4"
          >
            Order Now
          </NavLink>
          <p className="li my-10">Save Rs. 15,300/-</p>
          <div className="py-8 border-t border-[#D1D1F7]">
            <p>Key Features</p>
            <ul className="text-xs mt-2">
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>{" "}
                PTE Voucher (Eligible for Academic, UKVI, Core)
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>
                Pearson Scored Practice Mock Test Voucher
              </li>

              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>
                ApeUni Practice Portal (30 days validity)
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <img src={pic} alt="" />
            <img src={ape1} alt="" />
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center gap-10">
        <div className="bg-[#EFF2FF] right-3 relative rounded-3xl p-10">
          <p className="text-4xl font-semibold">PTE + SPMT + Alfa PTE</p>
          <p className="text-xs">Order Now & Save Big</p>
          <p className="my-6 text-3xl">Rs. 69,600/-</p>
          <NavLink
            to="/checkout-PTE"
            className="bg-primary  rounded-full px-4 py-3 text-white border-shadowborder border-4"
          >
            Order Now
          </NavLink>
          <p className="li my-10">Save Rs. 17,300/-</p>
          <div className="py-8 border-t border-[#D1D1F7]">
            <p>Key Features</p>
            <ul className="text-xs mt-2">
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>{" "}
                PTE Voucher (Eligible for Academic, UKVI, Core)
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>
                Alfa PTE Practice Portal (60 days validity){" "}
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaCheck />{" "}
                </span>
                Pearson Scored Practice Mock Test Voucher
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <img src={pic} alt="" />
            <img src={alfa} alt="" />
            <img src={smt} alt="" />
          </div>
        </div>
        <div className="bg-[#EFF2FF] right-3 relative rounded-3xl p-10">
          <p className="text-4xl font-semibold">PTE + SPMT + APEUni</p>
          <p className="text-xs">Order Now & Save Big</p>
          <p className="my-6 text-3xl">Rs. 72,800/-</p>
          <NavLink
            to="/checkout-PTE"
            className="bg-primary  rounded-full px-4 py-3 text-white border-shadowborder border-4"
          >
            Order Now
          </NavLink>
          <p className="li my-10">Save Rs. 17,300/-</p>
          <div className="py-8 border-t border-[#D1D1F7]">
            <p>Key Features</p>
            <ul className="text-xs mt-2">
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>{" "}
                PTE Voucher (Eligible for Academic, UKVI, Core)
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span>
                  <FaCheck />{" "}
                </span>
                Alfa PTE Practice Portal (60 days validity){" "}
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaCheck />{" "}
                </span>
                Pearson Scored Practice Mock Test Voucher
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <img src={pic} alt="" />
            <img src={smt} alt="" />
            <img src={ape1} alt="" />
          </div>
        </div>
      </div>
      <div className="my-8">
        <p className="text-3xl mb-4 font-semibold">
          Buy Scored Practice Mock Tests
        </p>
        <p className="text-sm text-gray-500">
          We offer Pearson Scored Practice Mock Tests A,B,C,D,E to take your
          exam preparation to a next level
        </p>
        <div className="flex w-4/5 mx-auto gap-10 my-20">
          <div className="w-full">
            <p className="text-xl font-semibold mb-4">
              Pearson Scored Practice Mock Test
            </p>
            <p className="text-xl font-semibold text-green-500">$130.20</p>
            <div className="">
              <div className="border-b rounded-md   mb-2 overflow-hidden">
                <div
                  className="flex justify-between items-center  py-3 cursor-pointer    "
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <select name="" id="" className="w-full">
                    <option value="" disabled>
                      Choose your scored practice mock test
                    </option>
                    <option value="">practice mock test A</option>
                    <option value=""> practice mock test B</option>
                    <option value=""> practice mock test C</option>
                    <option value=""> practice mock test D</option>
                    <option value=""> practice mock test E</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-600 py-2">
              Using past test content and official scoring algorithms, pearson
              scored practice mock tests give you an indication of how you will
              perform on test day, helping you to feel calm and confident.
            </div>
            <br />
            <div className="">
              <a
                href={whatsappLink}
                className="bg-primary   w-full block text-center  rounded-md  px-4 py-2 text-white border-shadowborder border-4"
              >
                Buy Now
              </a>
            </div>
          </div>

          <div className="w-full">
            <img src={s} alt="" className="w-96 " />
          </div>
        </div>
        <div className="flex gao-10 flex-col md:flex-row">
          <div className=" w-full mt-6 space-y-4">
            <p className="text-4xl font-semibold">
              Buy <span className="text-primary">Pearson PTE Voucher</span> From
              Us
            </p>
            <p className="text-xs">
              Opal Institute is a Pearson VUE Authorised Test Center and offers
              Pearson PTE Voucher for ou students.
            </p>
            <p className="text-2xl font-semibold">Rs. 67,000/-</p>
            <div className="">
              <br />
              <a
                href={whatsappLink}
                to="/"
                className="text-white font-semibold bg bg-primary px-16 py-3 rounded-full
              "
              >
                Buy Now
              </a>
            </div>
          </div>
          <div className="w-full">
            <img src={one} alt="" width={500} />
          </div>
        </div>
        <div className=" my-10">
          <p className="text-3xl font-semibold">Get Alfa PTE Portal Access</p>
          <p className="text-xs text-gray-500 mb-10">
            We offer Alfa PTE Portal Access for 30, 60 and 90 days. Choose a
            plan that suits you best.
          </p>
          <div className="my-4">
            <div className="grid  w-[80%] mx-auto gap-20 md:grid-cols-2">
              <div className="relative border p-4">
                <img src={valid} className=" absolute -left-4 -top-8 " alt="" />
                <img src={ptevoucher} alt="" className="w-96" />
                <div className="space-y-2 mb-2">
                  <p className="text-xs text-gray-500 p-2">
                    practice exam beforehand
                  </p>
                  <p className="text-primary font-semibold">
                    Alfa PTE Portal Access 30 Days
                  </p>
                  <p className="text-xs">
                    Unlock your potential with AlfaPTE, the leading practice
                    platform for PTE Academic / UKVI, and PTE Core preparation.
                  </p>
                </div>
                <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                  Buy Now
                </a>
              </div>
              <div className="relative border p-4">
                <img src={tees} className=" absolute -left-4 -top-8 " alt="" />
                <img src={ptevoucher} alt="" className="w-96" />
                <div className="space-y-2 mb-2">
                  <p className="text-xs text-gray-500 p-2">
                    practice exam beforehand
                  </p>
                  <p className="text-primary font-semibold">
                    Alfa PTE Portal Access 60 Days
                  </p>
                  <p className="text-xs">
                    Unlock your potential with AlfaPTE, the leading practice
                    platform for PTE Academic / UKVI, and PTE Core preparation.
                  </p>
                </div>
                <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                  Buy Now
                </a>
              </div>
              <div className="relative border p-4">
                <img src={novy} className=" absolute -left-4 -top-8 " alt="" />
                <img src={ptevoucher} alt="" className="w-96" />
                <div className="space-y-2 mb-2">
                  <p className="text-xs text-gray-500 p-2">
                    practice exam beforehand
                  </p>
                  <p className="text-primary font-semibold">
                    Alfa PTE Portal Access 90 Days
                  </p>
                  <p className="text-xs">
                    Unlock your potential with AlfaPTE, the leading practice
                    platform for PTE Academic / UKVI, and PTE Core preparation.
                  </p>
                </div>
                <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" my-10">
          <p className="text-3xl font-semibold">
            Get APE Uni Practice Vouchers.
          </p>
          <p className="text-xs text-gray-500 mb-10">
            We offer APE Uni Practice Vouchers too. for 30, 60 and 90 days.
            Choose a plan that suits you best.
          </p>
          <div className="my-4">
            <div className="grid  w-[80%] mx-auto gap-20 md:grid-cols-2">
              <div className="relative border p-4">
                <img src={valid} className=" absolute -left-4 -top-8 " alt="" />
                <img src={ape} alt="" className="w-96" />
                <div className="space-y-2 mb-2">
                  <p className="text-xs text-gray-500 p-2 ">
                    practice exam beforehand
                  </p>
                  <p className="text-primary font-semibold">
                    Alfa PTE Portal Access 30 Days
                  </p>
                  <p className="text-xs">
                    You’ll receive a link where you can easily redeem your APE
                    Uni voucher.
                  </p>
                </div>
                <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                  Buy Now
                </a>
              </div>

              <div className="relative border p-4">
                <img src={tees} className=" absolute -left-4 -top-8 " alt="" />
                <img src={ape} alt="" className="w-96" />
                <div className="space-y-2 mb-2">
                  <p className="p-2 text-xs text-gray-500">
                    practice exam beforehand
                  </p>
                  <p className="text-primary font-semibold">
                    Alfa PTE Portal Access 60 Days
                  </p>
                  <p className="text-xs">
                    You’ll receive a link where you can easily redeem your APE
                    Uni voucher.
                  </p>
                </div>
                <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                  Buy Now
                </a>
              </div>
              <div className="relative border p-4">
                <img src={novy} className=" absolute -left-4 -top-8 " alt="" />
                <img src={ape} alt="" className="w-96" />
                <div className="space-y-2 mb-2">
                  <p className="text-xs p-2 text-gray-500">
                    practice exam beforehand
                  </p>
                  <p className="text-primary font-semibold">
                    Alfa PTE Portal Access 90 Days
                  </p>
                  <p className="text-xs">
                    You’ll receive a link where you can easily redeem your APE
                    Uni voucher.
                  </p>
                </div>
                <a href={whatsappLink} className="bg-gray-100 w-full p-2">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButPtevoucher;
