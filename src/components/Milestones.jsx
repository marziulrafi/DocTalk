import React from "react";
import CountUp from 'react-countup';
import Review from "../assets/success-review.png";
import Board from "../assets/Board.png";
import Stuffs from "../assets/success-staffs.png";
import Patiens from "../assets/success-patients.png";

const Milestones = () => {
  return (
    <div className="text-center mt-10 flex flex-col items-center">
      <div>
        <h1 className="text-[2.5rem] font-extrabold">
          We Provide Best Medical Services
        </h1>
        <p className="font-medium opacity-80">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      <div className="md:flex md:flex-row md:gap-4 md:mt-10 flex flex-col gap-4 mt-10">
        <div className="bg-white px-12 py-10 rounded-2xl flex flex-col gap-2 text-left">
          <img src={Board} className="w-16" alt="" />
          <h1 className="text-[4rem] font-extrabold"><CountUp duration={3} enableScrollSpy 
          scrollSpyDelay={200} end={199}/>+</h1>
          <p className="font-medium opacity-80 text-2xl">Total Doctors</p>
        </div>
        <div className="bg-white px-12 py-10 rounded-2xl flex flex-col gap-2 text-left">
          <img src={Review} className="w-16" alt="" />
          <h1 className="text-[4rem] font-extrabold"><CountUp duration={3} enableScrollSpy 
          scrollSpyDelay={200} end={467}/>+</h1>
          <p className="font-medium opacity-80 text-2xl">Total Reviews</p>
        </div>
        <div className="bg-white px-12 py-10 rounded-2xl flex flex-col gap-2 text-left">
          <img src={Patiens} className="w-16" alt="" />
          <h1 className="text-[4rem] font-extrabold"><CountUp duration={3} enableScrollSpy 
          scrollSpyDelay={200} end={1900}/>+</h1>
          <p className="font-medium opacity-80 text-2xl">Patients</p>
        </div>
        <div className="bg-white px-12 py-10 rounded-2xl flex flex-col gap-2 text-left">
          <img src={Stuffs} className="w-16" alt="" />
          <h1 className="text-[4rem] font-extrabold"><CountUp duration={3} enableScrollSpy 
          scrollSpyDelay={200} end={300}/>+</h1>
          <p className="font-medium opacity-80 text-2xl">Total Staffs</p>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
