import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import CheckoutcardDetails from "./CheckoutcardDetails";
import BookExamWithUs from "./BookExamWithUs";

const CheckOutBankTransfer = () => {
  return (
    <div className="flex gap-10">
      <div className="w-full">
        <p className="mb-6 text-lg font-semibold">Payment Information</p>
        <div className="grid grid-cols-2">
          <div className="">
            <div className="">
              <p className="font-semibold">Pay Online</p>
              <div className="flex   gap-2">
                <span>
                  <IoCard className="text-primary mt-1 text-2xl" />
                </span>
                <div className="">
                  <p>PK65 UNIL 0109000299562391</p>
                  <p>OPAL INSTITUTE</p>
                  <p>UBL 1199299562391</p>
                </div>
              </div>
              <div className="flex   gap-2">
                <span>
                  <IoCard className="text-primary mt-1 text-2xl" />
                </span>
                <div className="">
                  <p>PK65 UNIL 0109000299562391</p>
                  <p>OPAL INSTITUTE</p>
                  <p>UBL 1199299562391</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" space-y-5">
              <div className="">
                <p className="font-semibold">Policy</p>
                <p className="text-xs">
                  Please take the screenshot of the payment receipt and upload
                  it on our website or send us on whatsapp.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-lime-500 text-2xl" />
                <a href="tel:++92 330 4161031">+92 330 4161031</a>
              </div>
              <div className="">
                <p className="font-semibold">Social media</p>
                <div className="flex gap-2">
                  <span className="text-white p-2 rounded-full bg-primary">
                    <FaFacebook />
                  </span>
                  <span className="text-white  p-2 rounded-full bg-primary">
                    <FaTwitter />
                  </span>
                  <span className="text-white  p-2 rounded-full bg-primary">
                    <FaLinkedinIn />
                  </span>
                  <span className="text-white  p-2 rounded-full bg-primary">
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs mt-6">
            Take Screenshot of the payment receipt to upload.
          </p>
        </div>
        <div className=" bg-white p-10 mt-4 rounded-md  space-y-4">
          <p className="font-semibold text-xl my-4">Personal Information</p>

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
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-medium">
              Account Title
            </label>
            <input
              type="text"
              placeholder="Enter Account Title"
              className="w-full p-2 rounded-md border border-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-medium">
              Upload Payment ScreenShot
            </label>
            <input
              type="file"
              placeholder="Enter Phone Number"
              className="w-full p-2 rounded-md border border-gray-400"
            />
          </div>
          <div className="flex gap-8">
            <button className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md">
              Cancel
            </button>
            <button className="bg-primary w-full py-2  text-white rounded-md">
              Pay Now
            </button>
          </div>
        </div>
        <BookExamWithUs />
        <div className="flex my-4 gap-8">
          <button className="px-6 py-2 border border-gray-400 text-gray-500 rounded-md">
            Cancel
          </button>
          <button className="bg-primary w-full py-2  text-white rounded-md">
            Submit
          </button>
        </div>
      </div>
      <div className="w-full">
        <CheckoutcardDetails />
      </div>
    </div>
  );
};

export default CheckOutBankTransfer;
