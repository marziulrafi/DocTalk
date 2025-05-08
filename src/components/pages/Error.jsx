import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar";
import Err from "../../assets/error.png"

const Error = () => {

    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className="bg-[#EFEFEF] p-32">
                <img className="w-96 mx-auto mt-16" src={Err} alt="" />
                <button onClick={() => navigate("/")} className="flex btn bg-[#176AE5] text-white rounded-full mx-auto mt-4 mb-4">Go Home</button>
            </div>
        </div>
    );
};

export default Error;