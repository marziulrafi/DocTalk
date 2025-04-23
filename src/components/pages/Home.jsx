import React from "react";
import Banner from "../Banner"
import Doctors from "../Doctors";
import { useLoaderData } from "react-router";
import Milestones from "../Milestones";


const Home = () => {

    const doctors = useLoaderData();

    return (
        <div>
           <Banner/>
           <Doctors doctors={doctors} />
           <Milestones/>
        </div>
    )
};

export default Home;