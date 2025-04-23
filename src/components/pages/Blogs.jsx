import React from "react";
import { useLoaderData } from "react-router";
import Blog from "../Blog";


const Blogs = () => {

    const blogs =useLoaderData();

    console.log("blogs", blogs)
    return (
        <div>
            <h1 className="text-6xl font-extrabold text-center mt-10">Read Our Latest Blogs</h1>
        <div className="mt-10">
        {
            blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
        }
        </div>
        </div>
    );
};

export default Blogs;