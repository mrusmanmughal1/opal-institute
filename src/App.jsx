import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import TestingServices from "./Pages/TestingServices";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BuyVouchers from "./Pages/BuyVouchers";
import ComptiaVouchers from "./Pages/ComptiaVouchers";
import BuyVoucher from "./Pages/BuyVoucher";
import BookExam from "./Pages/BookExam";
import PracticeMockTest from "./Pages/PracticeMockTest";
import Results from "./Pages/Results";
import MainFooter from "./Components/MainFooter";
import CheckOut from "./Pages/CheckOut";
import ButPtevoucher from "./Pages/ButPtevoucher";
import CheckoutPage from "./Pages/CheckoutPage";
import CheckoutSelfUs from "./Pages/CheckoutSelfUs";
import Otp from "./Components/Otp";
import Successfullpayment from "./Pages/Successfullpayment";
import WhatsAppFloatButton from "./Components/FloatingWhatsapp";
const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <WhatsAppFloatButton />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testing-services" element={<TestingServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/buy-vouchers" element={<BuyVouchers />} />
            <Route path="/comptia-vouchers" element={<ComptiaVouchers />} />
            <Route path="/buy-voucher" element={<BuyVoucher />} />
            <Route path="/book-exam" element={<BookExam />} />
            <Route path="/practice-mock-test" element={<PracticeMockTest />} />
            <Route path="/results" element={<Results />} />
            <Route path="/check-out" element={<CheckOut />} />
            <Route path="/buy-pte-voucher" element={<ButPtevoucher />} />
            <Route path="/checkout-page" element={<CheckoutPage />} />
            <Route path="/checkout-user" element={<CheckoutSelfUs />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/success" element={<Successfullpayment />} />
          </Routes>
        </main>
        <MainFooter />
      </div>
    </>
  );
};

export default App;
