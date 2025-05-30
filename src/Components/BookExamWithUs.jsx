import React from "react";

const BookExamWithUs = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <label htmlFor="" className="font-semibold">
          Student Name
        </label>
        <input
          type="text"
          className="p-3 rounded-md border"
          placeholder="Enter Student Name"
        />
      </div>
      <div className="flex flex-col  my-4">
        <label htmlFor="" className="font-semibold  mb-2 text-xl ">
          Student Details
        </label>
        <div className="">
          <label htmlFor="" className="font-semibold">
            Do you already have a MyPTE Account?{" "}
          </label>
          <div className="flex items-center my-2 gap-10">
            <div className="">
              <input type="radio" name="a" id="yes" />{" "}
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="">
              <input type="radio" name="a" id="no" />{" "}
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="p-3 border rounded-md"
          placeholder="User Name"
        />
        <input
          type="text"
          className="p-3 border  rounded-md"
          placeholder="Password"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold my-4">Address Details</p>
        <input
          type="text"
          className="p-3 border rounded-md"
          placeholder="Street Address"
        />
        <input
          type="text"
          className="p-3 border rounded-md"
          placeholder="City"
        />
        <input
          type="text"
          className="p-3 border rounded-md"
          placeholder="Country"
        />
        <input type="date" className="p-3 border rounded-md" />
        <input
          type="text"
          className="p-3 border rounded-md"
          placeholder="Bidth Country"
        />
      </div>
      <div className="">
        <p className="my-4 font-semibold">Test Details</p>
        <div className=" mb-4">
          <p className="font-semibold my-2">Test Type</p>
          <div className="flex items-center gap-6">
            <div className="">
              <input type="radio" name="a" id="" /> <span>Academic</span>
            </div>
            <div className="">
              <input type="radio" name="a" id="" /> <span>UKVI</span>
            </div>
            <div className="">
              <input type="radio" name="a" id="" /> <span>Core</span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <select name="" id="" className="p-3 border rounded-md w-full">
          <option value="" disabled>
            Choose Test Center
          </option>
          <optgroup label="Lahore">
            <option value="JNS Education">JNS Education</option>
            <option value="Pearson Professional Centers">
              Pearson Professional Centers
            </option>
          </optgroup>
          <optgroup label="Islamabad">
            <option value="ITAS">ITAS</option>
            <option value="JNS Education">JNS Education</option>
            <option value="Socio Engineering Technologies">
              Socio Engineering Technologies
            </option>
          </optgroup>
          <optgroup label="Rawalpindi">
            <option value="Technologies Network Alliance (SMC-PVT) LTD">
              Technologies Network Alliance (SMC-PVT) LTD
            </option>
          </optgroup>
          <optgroup label="Gujrat">
            <option value="The University of Chenab">
              The University of Chenab
            </option>
          </optgroup>
          <optgroup label="Faisalabad">
            <option value="Beaconhouse International College Private Limited">
              Beaconhouse International College Private Limited
            </option>
          </optgroup>
          <optgroup label="Karachi">
            <option value="JNS Education">JNS Education</option>
            <option value="ITAS">ITAS</option>
          </optgroup>
        </select>
        <div className="my-2">
          <input type="date" name="" id="" className="p-2  border w-full" />
        </div>
        <div className=" my-2">
          <input
            type="text"
            placeholder="Passport Number"
            className="p-2  border w-full"
            name=""
            id=""
          />
        </div>
        <div className=" my-2">
          <textarea
            cols={4}
            rows={4}
            type="date"
            className="p-2  border w-full"
            name=""
            placeholder="Add Notes"
            id=""
          />
        </div>
        <p className="my-4"></p>
      </div>
    </div>
  );
};

export default BookExamWithUs;
