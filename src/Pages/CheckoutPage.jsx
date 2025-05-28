import React, { useState } from "react";
import img from "../assets/images/buypte/ptevoucher.png";
import { FaCheck } from "react-icons/fa";
const CheckoutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return any item within 30 days of purchase for a full refund. The item must be unused and in its original packaging.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer worldwide shipping. Shipping costs and times vary depending on your location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with the tracking number and a link to track your package.",
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "Changes to orders can be made within 24 hours of placing the order. Contact our support team for assistance.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-[80%] mx-auto poppins py-16">
      <p className="text-xs text-gray-500 mb-4">
        Home / Buy PTE Voucher/ Checkoout
      </p>
      <div className="flex  gap-10">
        <div className="w-full">
          <img src={img} alt="" />
        </div>
        <div className="w-full">
          <div className="space-y-4  ">
            <p className="text-2xl font-semibold ">
              PTE + Scored Practice Mock Test (SPMT)
            </p>
            <p className="text-2xl  font-semibold text-green-500">
              Rs. 68,900/-
            </p>
            <div className="">
              <button className="bg-primary rounded-full text-white w-full p-2">
                Process to Checkout
              </button>
              <div className=" my-4 text-sm">
                <ul>
                  <li className="flex items-center gap-2">
                    <FaCheck />
                    <span>PTE Voucher’s Validity only for Pakistan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck />
                    Scored Practice Mock Test is Valid Globally.
                  </li>
                </ul>
              </div>
              <div className="my-10">
                <div className=" relative  poppins   e mx-auto ">
                  <div className="space-y-4 w-[90%]  mx-auto">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className=" border-b  border-[#01B0C7]/10  py-4"
                      >
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => toggleFAQ(index)}
                        >
                          <h2 className="font-medium text-lg">
                            {faq.question}
                          </h2>
                          {openIndex === index ? "+" : "+"}
                        </div>
                        {openIndex === index && (
                          <p className="mt-3  ">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <div className="radient-effect  bottom-0"></div>
                  </div>
                </div>
              </div>
              <button className="border-gray-200  border-4 rounded-full   w-full p-2">
                details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
