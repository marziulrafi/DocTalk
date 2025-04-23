import React from "react";

const Blog = ({blog}) => {

    const {question, answer} = blog;

    return (
        <div className="border-2 border-[#ffffff80] rounded-3xl px-5 py-4 bg-linear-to-b from-[#EFEFEF] to-white mb-4 w-3/4 mx-auto">
            <h2 className="text-2xl font-extrabold">Q. {question}</h2>
            <p><span className="font-bold">Ans: </span>{answer}</p>
        </div>
    );
};

export default Blog;