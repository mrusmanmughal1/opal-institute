import React from "react";

const TestingServices = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="text-center py-10 space-y-4">
        <p className="text-6xl font-semibold">TESTING SERVICES</p>
        <p className="text-2xl text-[#55595F] leading-10">
          We offer more than 300 testing services
        </p>
      </div>
      <div className="grid  md:flex grid-cols-12   justify-between p-4 md:px-32 py-2 items-center bg-[#3651BF1A] text-uppercase text-primary text-lg">
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
        <span>F</span>
        <span>G</span>
        <span>H</span>
        <span>I</span>
        <span>J</span>
        <span>K</span>
        <span>L</span>
        <span>M</span>
        <span>N</span>
        <span>O</span>
        <span>P</span>
        <span>Q</span>
        <span>R</span>
        <span>S</span>
        <span>T</span>
        <span>U</span>
        <span>V</span>
        <span>W</span>
        <span>X</span>
        <span>Y</span>
        <span>Z</span>
      </div>

      <div className=" mt-32 w-[70%] mx-auto">
        <div className="flex gap-10 m-4">
          <div className="">A</div>
          <div className="">
            <ul className="list-disc">
              <li className="underline text-emerald-800">Abudabi</li>
              <li className="underline text-emerald-800">Abudabi</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex gap-10 m-4">
          <div className="">B</div>
          <div className="">
            <ul className="list-disc">
              <li className="underline text-emerald-800">Abudabi</li>
              <li className="underline text-emerald-800">Abudabi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingServices;
