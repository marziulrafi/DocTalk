import React from "react";
import { Link, useNavigate } from "react-router";
import Err from "../assets/error.png"

const RouterError = () => {

  const navigate = useNavigate();
  return (
    <div className="w-96 mx-auto mt-8">
      <h1 className="text-2xl mb-6 text-center font-semibold">No Doctor Found!!</h1>
      <img src={Err} alt="" />
      <button onClick={() => navigate("/")} className="btn bg-[#176AE5] text-white rounded-full flex mx-auto mt-4 mb-4">View All Doctors</button>
    </div>
  );
};

export default RouterError;
