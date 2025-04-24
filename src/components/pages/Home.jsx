import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../Banner"
import Doctors from "../Doctors";
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