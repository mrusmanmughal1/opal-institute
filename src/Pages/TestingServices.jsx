import React from "react";

const TestingServices = () => {
  const scrollToSection = (letter) => {
    const element = document.getElementById(letter);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="text-center py-10 space-y-4">
        <p className="text-6xl font-semibold">TESTING SERVICES</p>
        <p className="text-2xl text-[#55595F] leading-10">
          We offer more than 300 testing services
        </p>
      </div>
      <div className="grid md:flex grid-cols-12 justify-between p-4 md:px-32 py-2 items-center bg-[#3651BF1A] text-uppercase text-primary text-lg">
        {[
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ].map((letter) => (
          <span
            key={letter}
            onClick={() => scrollToSection(letter)}
            className="cursor-pointer hover:text-blue-600 transition-colors"
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="mt-8 w-[70%] mx-auto h-[600px] overflow-y-auto">
        {[
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ].map((letter) => (
          <div key={letter}>
            <div className="flex gap-10 m-4">
              <section id={letter} className="font-bold text-xl">
                {letter}
              </section>
              <div className="">
                <ul className="list-disc">
                  <li className="underline text-emerald-800">Abudabi</li>
                  <li className="underline text-emerald-800">Abudabi</li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestingServices;
