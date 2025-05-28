import React, { useState } from "react";
import img from "../assets/images/peana.svg";
import star from "../assets/images/text.png";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className=" ">
      <div className="py-2  flex w-full items-center justify-center text-white bg-primary">
        <div className="">
          <img src={img} alt="" className=" h-6" />
        </div>
        <div className="text-[8px] md:text-sm font-medium poppins flex items-center gap-2">
          <img src={star} alt="" className="mx-4" />
          Authorized Test Center
        </div>
      </div>

      {/* ----------- navbar   ---------- */}
      <div className="shadow hidden md:block">
        <div className="flex align-center justify-between w-[90%] mx-auto p-4">
          <div className="flex items-center gap-10">
            {" "}
            <img src={logo} alt="" />
            <nav>
              <ul className="flex items-center   be-vietnam">
                <li>
                  <NavLink className="p-4 px-6" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="p-4 px-6" to="/book-exam">
                    Book PTE Exam
                  </NavLink>
                </li>
                <li>
                  <NavLink className="p-4 px-6" to="/buy-voucher">
                    Buy IT Vouchers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="p-4 px-6" to="/practice-mock-test">
                    Scored Practice Mock Test
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <button className="bg-primary text-white px-8 py-3 rounded-md">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* mobile nav  */}
      <div className="relative block md:hidden">
        <div className="flex  p-5 justify-between items-center">
          <div className="">
            <img src={logo} alt="" className="w-32" />
          </div>
          <div className="">
            {nav ? (
              <RxCross2 onClick={() => setnav(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setnav(true)} />
            )}
          </div>
        </div>
        {nav && (
          <div className="bg-white  z-50 absolute w-full shadow-lg p-4">
            <nav>
              <ul className="flex flex-col  gap-8 be-vietnam">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/book-exam">Book PTE Exam</NavLink>
                </li>
                <li>
                  <NavLink to="/buy-voucher">Buy IT Vouchers</NavLink>
                </li>
                <li>
                  <NavLink to="/practice-mock-test">
                    Scored Practice Mock Test
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className=" mt-4">
              <button className="bg-primary text-white px-8 py-3 rounded-md">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
