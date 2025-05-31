import logo2 from "../assets/logo-2.png";
import el from "../assets/images/elements.png";
import one from "../assets/images/result/1.png";
import { NavLink } from "react-router-dom";

const Results = () => {
  return (
    <div className="py-20">
      <div className="">
        <div className="bg-zinc-50 text-center relative space-y-4 rounded-3xl p-12 overflow-hidden">
          <img src={el} alt="" className="absolute -top-72 -left-20" />

          <p className="text-4xl font-bold "> OUR RESULTS</p>
          <p>DREAMS TURNED INTO REALITITES</p>
        </div>

        <div className="bg-white absolute shadow-md  px-3 hidden md:block top-60 right-52 py-10 rounded">
          <img src={logo2} alt="" className="  w-40" />{" "}
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="py-20  w-[90%] md:w-[80%] mx-auto plus-jakarta flex gap-10">
          <div className="w-full space-y-9">
            <p className="text-2xl text-primary font-semibold plus-jakarta">
              Our Highest Scorer in PTE
            </p>
            <div className="flex">
              <div className="text-center rounded-t-3xl  text-white ">
                <div className=" rounded-t-3xl   px-2 py-2 bg-[#007836] text-white font-semibold">
                  Overall Score
                </div>
                <div className="bg-[#910065] rounded-b-3xl">
                  <p className="text-5xl font-semibold  p-4 ">88</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className=" space-y-2">
                <div className="w-20 h-20 rounded-full border-2 relative border-black">
                  <p className="text-xl font-bold absolute top-1/3 left-1/3">
                    87
                  </p>
                </div>
                <p className="text-center">Listening</p>
              </div>
              <div className=" space-y-2">
                <div className="w-20 h-20 rounded-full border-2 relative border-yellow-500">
                  <p className="text-xl font-bold absolute top-1/3 left-1/3">
                    87
                  </p>
                </div>
                <p className="text-center">Listening</p>
              </div>
              <div className=" space-y-2">
                <div className="w-20 h-20 rounded-full border-2 relative border-green-600">
                  <p className="text-xl font-bold absolute top-1/3 left-1/3">
                    87
                  </p>
                </div>
                <p className="text-center">Listening</p>
              </div>
              <div className=" space-y-2">
                <div className="w-20 h-20 rounded-full border-2 relative border-pink-800">
                  <p className="text-xl font-bold absolute top-1/3 left-1/3">
                    87
                  </p>
                </div>
                <p className="text-center">Listening</p>
              </div>
            </div>
            <div className="">
              <p className="text-gray-500 plus-jakarta">
                Our Student Aced the PTE Exam with the help of our practice mock
                tests and seamless exam booking process.{" "}
              </p>
            </div>
            <div className=" grid plus-jakarta  gap-3">
              <div className="flex gap-2">
                <p className="font-semibold">Student Name :</p>{" "}
                <span className="text-gray-500">XYZ</span>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Test Type: :</p>{" "}
                <span className="text-gray-500">XYZ</span>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Test Taker ID: </p>{" "}
                <span className="text-gray-500">XYZ</span>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Registration ID:</p>{" "}
                <span className="text-gray-500">XYZ</span>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Instructor:</p>{" "}
                <span className="text-gray-500">XYZ</span>
              </div>
            </div>
            <div className=" flex gap-4 mt-4">
              <NavLink
                to="/buy-pte-voucher"
                className="bg-primary text-white rounded-full px-8 py-3"
              >
                Book Exam{" "}
              </NavLink>
              <NavLink
                to="/contact"
                className=" rounded-full px-8 py-3 border text-primary"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="w-full">
            <img src={one} alt="" />
          </div>
        </div>
        <div className=" space-y-4">
          <p className="text-3xl be-vietnam font-semibold">Our Results</p>
          <p className="plus-jakarta">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="flex my-8  justify-between">
          <p>Showing 11 results</p>
          <select name="" id="">
            <option value="sort by">Sort by</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 be-vietnam  gap-10">
          <div className="border   rounded-md">
            <div className="px-10 py-4">
              <p className="font-bold my-4 text-gray-700 text-2xl">
                Overall Score: 88
              </p>
              <div className="flex my-2 ">
                <div className="flex gap-3">
                  <div className="">
                    <div className=" space-y-2">
                      <div className="w-20 h-20 rounded-full border-2 relative border-black">
                        <p className="text-xl font-bold absolute top-1/3 left-1/3">
                          87
                        </p>
                      </div>
                      <p className="text-center">Listening</p>
                    </div>
                  </div>
                  <div className="">
                    <div className=" space-y-2">
                      <div className="w-20 h-20 rounded-full border-2 relative border-yellow-500">
                        <p className="text-xl font-bold absolute top-1/3 left-1/3">
                          87
                        </p>
                      </div>
                      <p className="text-center">Listening</p>
                    </div>
                  </div>
                  <div className="">
                    <div className=" space-y-2">
                      <div className="w-20 h-20 rounded-full border-2 relative border-green-500">
                        <p className="text-xl font-bold absolute top-1/3 left-1/3">
                          87
                        </p>
                      </div>
                      <p className="text-center">Listening</p>
                    </div>
                  </div>
                  <div className="">
                    <div className=" space-y-2">
                      <div className="w-20 h-20 rounded-full border-2 relative border-pink-700">
                        <p className="text-xl font-bold absolute top-1/3 left-1/3">
                          87
                        </p>
                      </div>
                      <p className="text-center">Listening</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-6 items-center bg-slate-50 px-10 py-2 rounded-md justify-between">
              <div className="flex items-center  gap-2">
                <img src={one} alt="" width={50} height={10} />{" "}
                <span>Name</span>
              </div>
              <button className="bg-gray-100 px-6 py-2 rounded-md text-xs">
                Read Full Story{" "}
              </button>
            </div>
          </div>
          <div className="border   rounded-md">
            <div className="px-10 py-4">
              <p className="font-bold my-4 text-gray-700 text-2xl">
                Overall Score: 88
              </p>
              <div className="flex my-2 ">
                <div className="flex gap-3">
                  <div className="">
                    <div className=" space-y-2">
                      <div className="w-20 h-20 rounded-full border-2 relative border-black">
                        <p className="text-xl font-bold absolute top-1/3 left-1/3">
                          87
                        </p>
                      </div>
                      <p className="text-center">Listening</p>
                    </div>
                  </div>
                  <div className="">
                    <div className=" space-y-2">
                      <div className="w-20 h-20 rounded-full border-2 relative border-yellow-500">
                        <p className="text-xl font-bold absolute top-1/3 left-1/3">
                          87
                        </p>
                      </div>
                      <p className="text-center">Listening</p>
                    </div>
                  </div>
                  <div className="">
                    <div className=" space-y-2">
                      <div className="w-20 h-20 rounded-full border-2 relative border-green-500">
                        <p className="text-xl font-bold absolute top-1/3 left-1/3">
                          87
                        </p>
                      </div>
                      <p className="text-center">Listening</p>
                    </div>
                  </div>
                  <div className="">
                    <div className=" space-y-2">
                      <div className="w-20 h-20 rounded-full border-2 relative border-pink-700">
                        <p className="text-xl font-bold absolute top-1/3 left-1/3">
                          87
                        </p>
                      </div>
                      <p className="text-center">Listening</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-6 items-center bg-slate-50 px-10 py-2 rounded-md justify-between">
              <div className="flex items-center  gap-2">
                <img src={one} alt="" width={50} height={10} />{" "}
                <span>Name</span>
              </div>
              <button className="bg-gray-100 px-6 py-2 rounded-md text-xs">
                Read Full Story{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-10">
          <button className="px-6 py-2 bg-primary text-white rounded-md">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
