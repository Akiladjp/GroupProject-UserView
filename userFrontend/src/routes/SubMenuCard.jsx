import React from "react";

import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";
export default function SubMenuCard() {
  return (
    <>
      <div className="flex flex-col justify-end w-full ">
        <div className="w-full h-screen ">
          <div className="flex items-center   w-[100%]  text-xl p-[0.25%] list-none  h-20  font-bold  ">
            <li className="flex w-[40%]   text-center items-center justify-center h-auto">
              ORDER NO:<p className="ml-2">01</p>
            </li>
            <li className="flex w-[40%]   text-center items-center justify-center">
              TABLE NO:<p className="ml-2 ">05</p>
            </li>
          </div>

          <div className="flex flex-col w-full m-auto  overflow-scroll overflow-x-hidden bg-green-450 h-[660px] ">
            <div className="w-[98%] lg:w-[50%]   m-auto my-4 ">
              <ItemCard buttonState="Remove" />
            </div>

            <div className="w-[98%] m-auto my-2 lg:w-[50%] ">
              <ItemCard buttonState="Remove" />
            </div>
            <div className="w-[98%] m-auto my-2 lg:w-[50%]">
              <ItemCard buttonState="Remove" />
            </div>
            <div className="w-[98%] m-auto my-2 lg:w-[50%]">
              <ItemCard buttonState="Remove" />
            </div>
            <div className="w-[98%] m-auto my-2 lg:w-[50%]">
              <ItemCard buttonState="Remove" />
            </div>
            <div className="w-[98%] m-auto my-2 lg:w-[50%]">
              <ItemCard buttonState="Remove" />
            </div>
            <div className="w-[98%] m-auto my-2 lg:w-[50%]">
              <ItemCard buttonState="Remove" />
            </div>
          </div>
        </div>
        <div className="fixed flex w-full h-24 ">
          <div className="flex w-[50%] h-20 justify-end ">
            <Link to="/" >
              <button className="w-auto h-auto px-4 py-1 text-xl font-bold text-center text-white bg-blue-600 rounded-xl">
                ADD MORE
              </button>
            </Link>
          </div>
          <div className="flex w-[50%]  h-20">
            <Link to="/maincart">
              <button className="w-auto h-auto px-4 py-1 text-xl font-bold text-center text-white bg-green-800 b-2 rounded-xl">
                PLACE ORDER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
