import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <div className="  pt-20">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <footer className="w-full py-8 bg-white">
          <div className="container mx-auto md:px-4">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* Logo and Contact Information */}
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#3454d1] rounded-md"></div>
                <div className="space-y-2 text-gray-700">
                  <p>info@opalinstitute.com</p>
                  <p>Whatsapp: +92 330 1646951</p>
                  <p className="max-w-xs">
                    55PJ + 4FG, Service Rd, Shaheenabad,
                    <br />
                    Gujranwala, 52290, Punjab Pakitsan
                  </p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Home Column */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Home</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li>
                      <Link href="/benefits" className="hover:text-gray-700">
                        Benefits
                      </Link>
                    </li>
                    <li>
                      <Link href="/offerings" className="hover:text-gray-700">
                        Our Offerings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/testimonials"
                        className="hover:text-gray-700"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="hover:text-gray-700">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-gray-700">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* About Us Column */}
                <div>
                  <h3 className="text-lg font-medium mb-4">About Us</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li>
                      <Link href="/ceo" className="hover:text-gray-700">
                        Our CEO
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/success-stories"
                        className="hover:text-gray-700"
                      >
                        Success Stories
                      </Link>
                    </li>
                    <li>
                      <Link href="/vouchers" className="hover:text-gray-700">
                        Buy Vouchers
                      </Link>
                    </li>
                    <li>
                      <Link href="/exams" className="hover:text-gray-700">
                        Book Exams
                      </Link>
                    </li>
                    <li>
                      <Link href="/mock-test" className="hover:text-gray-700">
                        Practice Mock Test
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Social Profiles Column */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Social Profiles</h3>
                  <div className="flex space-x-4">
                    <div className=" flex text-2xl  mt-4 gap-6">
                      <FaTwitter className="text-primary" />
                      <FaFacebookSquare className="text-primary" />
                      <FaInstagram className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Copyright */}
            <div className="text-center text-gray-500">
              <p>© 2025 Opalinstitute. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainFooter;
