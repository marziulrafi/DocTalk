import React from "react";
import BannerImg from '../assets/banner-img-1.png';
import BannerImg2 from '../assets/banner2.png'

const Banner = () => {

  return (

    <div className="flex flex-col gap-4 items-center border-white border-2 rounded-3xl px-4 py-12 mt-5 w-3/4 mx-auto
    bg-linear-to-b from-[#EFEFEF] to-white">
      <h1 className="text-[3rem] font-extrabold text-center">Dependable Care, Backed by Trusted <br />Professionals.</h1>
      <p className="text-center font-medium opacity-80">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br /> routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className="flex gap-4">
        <input className="input input-bordered rounded-full w-[20rem]" type="text" placeholder="Search any doctor ...." />
        <button className="btn bg-[#176AE5] text-white rounded-full">Search Now</button>
      </div>
      <div className="flex gap-4">
        <div><img className="w-xl h-80 rounded-2xl" src={BannerImg} alt="" /></div>
        <div><img className="w-xl h-80 rounded-2xl" src={BannerImg2} alt="" /></div>
      </div>
    </div>
  );
};

export default Banner;
