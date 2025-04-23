import React from "react";
import Banner from "../Banner"
import Doctors from "../Doctors";
import { useLoaderData } from "react-router";


const Home = () => {

    const doctors = useLoaderData();

    return (
        <div>
           <Banner/>
           <Doctors doctors={doctors} />
        </div>
    )
};

export default Home;