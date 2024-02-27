import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserRegister from "../components/UserRegister";
import kaemaLogo from "../assets/kaema_logo.png";
import MyTimer from "../components/MyTimer";

export default function MainCart() {
  return (
    <>
      <div className=" w-[99%] p-[0.25%] m-auto h-screen  flex flex-col justify-end ">
        <div className="mt-8 bg-red-500"></div>
        <h1 className="w-full p-2 text-3xl font-bold text-center ">Your Orders</h1>
        <div className="items-center w-full h-screen m-auto overflow-scroll overflow-x-hidden lg:flex-wrap lg:flex ">
          <Link to="/finalbill">
            <div className="w-full mb-4  bg-cover border border-white shadow-md h-44 rounded-xl border-1  shadow-orange-400  lg:h-60 bg-cartbackground opacity-100 md:h-64 lg:w-[600px]">
              <div className="flex flex-col items-center justify-start w-full p-4 m-auto text-2xl font-thin text-center text-white list-none h-44 lg:w-full lg:h-60 bg-slate-600/70 rounded-xl md:h-64 ">
                <li className="flex w-full ">Order No:1</li>
                <li className="flex w-full ">Total : 400</li>
                <li className="flex flex-col w-full"><p className=" w-[100%"> Your Order Reday in :</p>
                  <div className="w-[30%] flex text-left"><MyTimer/></div>
                </li>
              </div>
            </div>
          </Link>
         
          <Link to="/cart">
            <div className="w-full mb-4  bg-cover border border-white shadow-md h-44 rounded-xl border-1  shadow-orange-400  lg:h-60 bg-cartbackground opacity-100 md:h-64 lg:w-[600px]">
              <div className="flex flex-col items-center justify-start w-full p-4 m-auto text-2xl font-thin text-center text-white list-none h-44 lg:w-full lg:h-60 bg-slate-600/70 rounded-xl md:h-64 ">
                <li className="flex w-full ">Order No:1</li>
                <li className="flex w-full ">Total : 400</li>
                <li className="flex flex-col w-full"><p className=" w-[100%"> Your Order Reday in :</p>
                  <div className="w-[30%] flex text-left"><MyTimer/></div>
                </li>
              </div>
            </div>
          </Link>
         
          <Link to="/cart">
            <div className="w-full mb-4  bg-cover border border-white shadow-md h-44 rounded-xl border-1  shadow-orange-400  lg:h-60 bg-cartbackground opacity-100 md:h-64 lg:w-[600px]">
              <div className="flex flex-col items-center justify-start w-full p-4 m-auto text-2xl font-thin text-center text-white list-none h-44 lg:w-full lg:h-60 bg-slate-600/70 rounded-xl md:h-64 ">
                <li className="flex w-full ">Order No:1</li>
                <li className="flex w-full ">Total : 400</li>
                <li className="flex flex-col w-full"><p className=" w-[100%"> Your Order Reday in :</p>
                  <div className="w-[30%] flex text-left"><MyTimer/></div>
                </li>
              </div>
            </div>
          </Link>
         
          <Link to="/cart">
            <div className="w-full mb-4  bg-cover border border-white shadow-md h-44 rounded-xl border-1  shadow-orange-400  lg:h-60 bg-cartbackground opacity-100 md:h-64 lg:w-[600px]">
              <div className="flex flex-col items-center justify-start w-full p-4 m-auto text-2xl font-thin text-center text-white list-none h-44 lg:w-full lg:h-60 bg-slate-600/70 rounded-xl md:h-64 ">
                <li className="flex w-full ">Order No:1</li>
                <li className="flex w-full ">Total : 400</li>
                <li className="flex flex-col w-full"><p className=" w-[100%"> Your Order Reday in :</p>
                  <div className="w-[30%] flex text-left"><MyTimer/></div>
                </li>
              </div>
            </div>
          </Link>
         
          <Link to="/cart">
            <div className="w-full mb-4  bg-cover border border-white shadow-md h-44 rounded-xl border-1  shadow-orange-400  lg:h-60 bg-cartbackground opacity-100 md:h-64 lg:w-[600px]">
              <div className="flex flex-col items-center justify-start w-full p-4 m-auto text-2xl font-thin text-center text-white list-none h-44 lg:w-full lg:h-60 bg-slate-600/70 rounded-xl md:h-64 ">
                <li className="flex w-full ">Order No:1</li>
                <li className="flex w-full ">Total : 400</li>
                <li className="flex flex-col w-full"><p className=" w-[100%"> Your Order Reday in :</p>
                  <div className="w-[30%] flex text-left"><MyTimer/></div>
                </li>
              </div>
            </div>
          </Link>
         
          <Link to="/cart">
            <div className="w-full mb-4  bg-cover border border-white shadow-md h-44 rounded-xl border-1  shadow-orange-400  lg:h-60 bg-cartbackground opacity-100 md:h-64 lg:w-[600px]">
              <div className="flex flex-col items-center justify-start w-full p-4 m-auto text-2xl font-thin text-center text-white list-none h-44 lg:w-full lg:h-60 bg-slate-600/70 rounded-xl md:h-64 ">
                <li className="flex w-full ">Order No:1</li>
                <li className="flex w-full ">Total : 400</li>
                <li className="flex flex-col w-full"><p className=" w-[100%"> Your Order Reday in :</p>
                  <div className="w-[30%] flex text-left"><MyTimer/></div>
                </li>
              </div>
            </div>
          </Link>
         
         
        </div>
        <div className="flex items-center justify-center h-20 ">
          <Link to={"/"}>
            <button className="w-auto px-4 py-2 m-auto text-xl font-bold text-center text-white bg-blue-600 rounded-xl ">
              NEW ORDER
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
