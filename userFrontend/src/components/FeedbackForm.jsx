import React from "react";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";

export default function FeedbackForm() {
  return (
    <div className="w-full">
      <div className="mt-4  h-[300px] w-[350px] p-2  md:w-[600px]   lg:w-full lg:items-center lg:justify-center lg:mt-0">
        <form action="">
        <div className="h-[240px]  flex flex-col">
          
          <div className="w-[85%] flex flex-col  p-1 m-auto">
            
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="w-full h-8 m-auto bg-gray-300 rounded"
            />
          </div>
          <div className="w-[85%] flex flex-col p-1 m-auto">
            <label htmlFor="">Your Comment</label>
            <textarea
              type="text"
              className="w-full h-20 text-left bg-gray-300 rounded "
            />
          </div>

          <div className="w-[85%] flex items-center gap-1   p-1 m-auto ">
            <p>Your Rating</p>
            <div className="flex gap-2 text-lg text-yellow-600"> <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp /></div>
           
          </div>
        </div>
        <div className="h-[50px]  flex items-center md:ml-4 ">
          <input type="submit" name="" id=""  className="px-4 py-1 ml-8 bg-blue-500 rounded"/>
        </div>
        </form>
      </div>
    </div>
  );
}
