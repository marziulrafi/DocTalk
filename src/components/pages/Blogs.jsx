import React from "react";
import { useLoaderData } from "react-router";
import Blog from "../Blog";


const Blogs = () => {

    const blogs =useLoaderData();

    console.log("blogs", blogs)
    return (
        <div className="bg-[#EFEFEF] p-8">
            <h1 className="text-4xl text-center font-extrabold mt-10">Read the latest blogs</h1>
        <div className="mt-10">
        {
            blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
        }
        </div>
        </div>
    );
};

export default Blogs;