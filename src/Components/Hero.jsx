import React from "react";
import hero from "../assets/images/home/Placeholder.png";
import h1 from "../assets/images/home/h1.png";
import {
  IoIosCheckmark,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const Hero = () => {
  const data = [
    {
      title: "Testing Services",
      des: "Fit your coursework around your existing commitments and obligations.",
      link: "/testing-services",
    },
    {
      title: "Buy PTE Vouchers",
      des: "Fit your coursework around your existing commitments and obligations.",
      link: "/buy-pte-voucher",
    },
    {
      title: "Practice Mock Tests",
      des: "Learn from industry experts who have hands-on experience in design",
      link: "#mocktest",
    },
    {
      title: "IT Vouchers",
      des: "Explore a wide range of design and development courses covering various",
      link: "/buy-it-vouchers",
    },
  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <IoMdArrowDropright className="text-gray-800 " />,
    prevArrow: <IoMdArrowDropleft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="w-[90%] md:w-[80%] mx-auto ">
        <div className="flex flex-col md:flex-row be-vietnam  ">
          <div className="w-full  md:w-[70%] hero-slider">
            <Slider {...settings}>
              {[hero, hero, hero].map((val, i) => {
                return (
                  <div key={i} className="    ">
                    <img src={val} alt="" className="   w-full  " />
                  </div>
                );
              })}
            </Slider>
            {/* <img src={hero} alt="" /> */}
          </div>
          <div className="w-full md:w-[30%] md:pt-20">
            <div
              className="space-y-14 border p-6 bg-slate-100  py-10 relative md:right-52 md:w-[600px] 
                bg-white/50 backdrop-blur-sm backdrop-saturate-50 rounded shadow-md"
            >
              <p className="text-2xl md:text-5xl font-semibold leading-snug">
                Top Pearson Testing Center in Pakistan
              </p>
              <p className="text-[#909090]">
                Unlock Your Career Potential with the help of our Pearson
                Testing Services
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-8 md:m-4 md:mt-14">
              <div className="flex gap-2 items-start text-sm ">
                <span className="p-1 text-white rounded-full bg-primary">
                  <IoIosCheckmark />{" "}
                </span>{" "}
                <span>PTE Vouchers</span>
              </div>
              <div className="flex gap-2 items-start text-sm ">
                <span className="p-1 text-white rounded-full bg-primary">
                  <IoIosCheckmark />{" "}
                </span>{" "}
                <span>IT Vouchers</span>
              </div>
              <div className="flex items-start text-sm  gap-2">
                <span className="p-1 text-white rounded-full bg-primary">
                  <IoIosCheckmark />{" "}
                </span>{" "}
                <span>Testing Services</span>
              </div>
              <div className="flex items-start text-sm  gap-2">
                <span className="p-1 text-white rounded-full bg-primary">
                  <IoIosCheckmark />{" "}
                </span>{" "}
                <span>Scored Practice Mock Tests</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src={h1}
            alt=""
            className="absolute h-20 top-10  hidden md:block -right-20"
          />
          <div className="flex flex-col md:flex-row py-10 md:py-20 gap-5">
            {data.map((val, i) => {
              return (
                <NavLink to={val.link}>
                  <div className="bg-[#F7F7F880] py-8 px-6  shadow-md hover:border hover:shadow-lg duration-200  rounded-lg">
                    <p className="text-2xl font-semibold mb-4">{val.title}</p>
                    <p className="text-sm text-[#909090]">{val.des}</p>
                    <div className="flex justify-end">
                      <button className="bg-slate-100 rounded-md p-2 mt-4">
                        <MdOutlineArrowOutward />
                      </button>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
