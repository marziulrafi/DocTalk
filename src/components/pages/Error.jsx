import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar";

const Error = () => {

    const navigate = useNavigate();
    return (
        <div>
           <Navbar/>
            <div>
            <img className="w-96 mx-auto" src="../../assets/error.png" alt="" />
            <button onClick={() => navigate("/")} className="btn bg-[#176AE5] text-white rounded-full flex mx-auto mt-4 mb-4">Go Home</button>
            </div>
        </div>
    );
};

export default Error;