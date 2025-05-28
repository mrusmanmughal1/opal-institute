import React from "react";
import logo2 from "../assets/logo-2.png";
import el from "../assets/images/elements.png";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoIosMail, IoMdPhonePortrait } from "react-icons/io";
import MappAddress from "../Components/MappAddress";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="py-10">
        <div className="bg-zinc-50 text-center relative space-y-4 rounded-3xl p-12 overflow-hidden">
          <img src={el} alt="" className="absolute -top-72 -left-20" />

          <p className="text-4xl font-bold ">CONTACT US</p>
          <p>Let’s make your dreams a reality</p>
        </div>

        <div className="bg-white absolute shadow-md  px-3 hidden md:block top-60 right-52 py-10 rounded">
          <img src={logo2} alt="" className="  w-40" />{" "}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:mt-32 gap-16">
        <div className="bg-[#F1F4FF] md:w-[40%] py-10 ">
          <div className="w-[80%] mx-auto">
            <p className="text-2xl  text-center  p-4 font-semibold">
              Contact Our Team Now For Any Queries
            </p>
            <form action="" className="grid gap-4">
              <input
                type="text"
                className="bg-white p-3 rounded"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="bg-white p-3 rounded"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="bg-white p-3 rounded"
                placeholder="Your Phone Number"
              />
              <textarea
                name=""
                id=""
                cols={4}
                rows={4}
                placeholder="Your Message"
                className="bg-white p-3 rounded"
              ></textarea>
              <button className="bg-primary text-white px-8 py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
            <div className="flex flex-col justify-center     w-52">
              <p className="flex justify-center text-primary">
                <FiMapPin />
              </p>
              <p>
                55PJ + 4FG, SERVICE Rd, Shaheenabad, Gujranwala, 52290, Pakistan
              </p>
            </div>
            <div className="flex flex-col justify-center    w-32">
              <p className="text-primary flex justify-center">
                <IoMdPhonePortrait />
              </p>
              <p>
                <a href="tel:++92 330 1646951">+92 330 1646951</a>
              </p>
            </div>
            <div className="flex flex-col justify-center  align-center w-48">
              <p className="text-primary flex justify-center">
                <IoIosMail />
              </p>
              <p>
                <a href="mailto:info@opalinstitute.com">
                  info@opalinstitute.com
                </a>
              </p>
            </div>
          </div>
          <div className=" mt-8">
            <MappAddress />
          </div>
          <div className=" flex text-2xl  mt-4 gap-6">
            <FaTwitter className="text-primary" />
            <FaFacebookSquare className="text-primary" />
            <FaInstagram className="text-primary" />
            <FaLinkedin className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
