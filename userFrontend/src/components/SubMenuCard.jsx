import React from "react";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
export default function SubMenuCard() {
  return (
    <>
      <div className="flex flex-col justify-end w-full ">
        <div className="w-full h-screen ">
        
          <div className="flex flex-row justify-around w-[100%] m-auto text-xl p-[0.25%] list-none  h-20 items-center fixed ">
            <li className="flex mt-2">
              ORDER NO:<p className="ml-2">01</p>
            </li>
            <li className="flex mt-2">
              TABLE NO:<p className="ml-2">05</p>
            </li>
          </div>

          <div className="flex flex-col w-full m-auto mt-20 overflow-scroll  bg-green-450 h-[660px] ">
            
            <div className="w-[98%] m-auto my-4 ">
              <ItemCard buttonState="Remove" />
            </div>

            <div className="w-[98%] m-auto my-2 ">
              <ItemCard buttonState="Remove" />
            </div>
            <div className="w-[98%] m-auto my-2 ">
              <ItemCard buttonState="Remove" />
            </div>
            <div className="w-[98%] m-auto my-2 ">
              <ItemCard buttonState="Remove" />
            </div>
            <div className="w-[98%] m-auto my-2 ">
              <ItemCard buttonState="Remove" />
            </div>
            <div className="w-[98%] m-auto my-2 ">
              <ItemCard buttonState="Remove" />
            </div>
            <div className="w-[98%] m-auto my-2 ">
              <ItemCard buttonState="Remove" />
            </div>
          
          </div>
        </div>
        <div className="fixed flex flex-row items-center justify-center w-full h-24 gap-4 ">
          <Link>
            <button className="w-auto h-auto px-4 py-1 text-xl font-bold text-center text-white bg-blue-600 rounded-xl">
              ADD MORE
            </button>
            </Link>
          <Link to='/'>
              <button className="w-auto h-auto px-4 py-1 text-xl font-bold text-center text-white bg-green-800 b-2 rounded-xl">
              PLACE ORDER
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
