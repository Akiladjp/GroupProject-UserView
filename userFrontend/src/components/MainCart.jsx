import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function MainCart() {
  

  return (
    <>
      <div className=" w-[99%] p-[0.25%] m-auto h-screen  flex flex-col justify-end ">
        <div className="mt-12 bg-red-500"></div>
        <div className="flex flex-col h-screen overflow-scroll ">
        <Link to="/cart">
            <div className="w-[98%] h-44  m-auto grid grid-cols-2 list-none text-center text-xl rounded-xl items-center border border-1 border-black p-1 mb-2 ">
              <li>Order No:1</li>
              <li>Total : 400</li>
              <li className="bg-green-200">Your Order Reday in </li>
              <li>10</li>
            </div>
          </Link>

          <Link to="">
            <div className="w-[98%] h-44  m-auto grid grid-cols-2 list-none text-center text-xl rounded-xl items-center border border-1 border-black p-1 mb-2 ">
              <li>Order No:1</li>
              <li>Total : 400</li>
              <li className="bg-green-200">Your Order Reday in </li>
              <li>10</li>
            </div>
          </Link>

          <Link to="">
            <div className="w-[98%] h-44  m-auto grid grid-cols-2 list-none text-center text-xl rounded-xl items-center border border-1 border-black p-1 mb-2">
              <li>Order No:1</li>
              <li>Total : 400</li>
              <li className="bg-green-200">Your Order Reday in </li>
              <li>10</li>
            </div>
          </Link>

          <Link to="">
            <div className="w-[98%] h-44  m-auto grid grid-cols-2 list-none text-center text-xl rounded-xl items-center border border-1 border-black p-1 mb-2">
              <li>Order No:1</li>
              <li>Total : 400</li>
              <li className="bg-green-200">Your Order Reday in </li>
              <li>10</li>
            </div>
          </Link>

          <Link to="">
            <div className="w-[98%] h-44  m-auto grid grid-cols-2 list-none text-center text-xl rounded-xl items-center border border-1 border-black p-1 mb-2">
              <li>Order No:1</li>
              <li>Total : 400</li>
              <li className="bg-green-200">Your Order Reday in </li>
              <li>10</li>
            </div>
          </Link>
          

          
        </div>
        <div className="flex items-center justify-center h-24 bg-red-400 ">
            <Link>
            <button className="w-auto px-4 py-1 m-auto text-xl font-bold text-center text-white bg-blue-600 rounded-xl ">
            NEW ORDER
          </button></Link>
         
        </div>
      </div>
    </>
  );
}
