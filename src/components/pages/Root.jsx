import React from "react"; 
import { Outlet, useNavigation } from "react-router-dom";
import { BeatLoader as ClipLoader } from "react-spinners";
import Navbar from "../Navbar";
import Footer from "../Footer";


const loaderContainerStyle = {
    display: 'flex',
    padding: '2rem 0',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 150px)',
};

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar />
            {navigation.state === "loading" ? (
                <div style={loaderContainerStyle}>
                    <ClipLoader
                        color={"#000000"}
                        loading={true}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (
                <Outlet />
            )}
            <Footer/>
        </div>
    );
}

export default Root;