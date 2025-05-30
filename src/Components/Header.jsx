import React, { useState } from "react";
import img from "../assets/images/peana.svg";
import star from "../assets/images/text.png";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [nav, setnav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
          <div className="flex items-center gap-6">
            {" "}
            <img src={logo} alt="" />
            <nav>
              <ul className="flex items-center   be-vietnam">
                <li>
                  <NavLink className="p-4 px-5" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="p-4 px-5" to="/book-exam">
                    Book PTE Exam
                  </NavLink>
                </li>
                <li>
                  <NavLink className="p-4 px-5" to="/buy-voucher">
                    Buy IT Vouchers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="p-4 px-5" to="/practice-mock-test">
                    Scored Practice Mock Test
                  </NavLink>
                </li>
                <li
                  className="p-4 px-5 flex items-center gap-2 relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  More
                  <IoIosArrowDown />
                  {showDropdown && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
                      <NavLink
                        to="/about"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        to="/contact"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Contact
                      </NavLink>
                      <NavLink
                        to="/faq"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        FAQ
                      </NavLink>
                      <NavLink
                        to="/blog"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Blog
                      </NavLink>
                    </div>
                  )}
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
