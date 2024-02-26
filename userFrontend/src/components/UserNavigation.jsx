/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-scroll";

const UserNavigation = () => {
  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="mt-4">
       
        <div className="flex w-[90%] md:w-[50%] md:mx-2 md:float-end md:mt-[20px]">
          <div className="flex border border-black rounded-full w-[70%] md:w-[60%] md:ml-16 md:my-auto">
            <input
              className="text-[14px] py-2 rounded-s-3xl border-r border-black w-[80%] md:py-3"
              type="search"
              name="searchItems"
              id="searchItems"
              placeholder="     Find foods"
            />
            <FaSearch className="flex items-center m-auto mx-auto text-[16px]" />
          </div>
          <div className="md:m-auto">
           <a href="/userprofile"  className="flex text-[14px] py-2 border ml-2 mx-auto pl-2 px-4 md:text-[20px] rounded-full text-white active:scale-95 bg-blue-800 hover:cursor-pointer">
           <FaUser className="m-auto text-[16px] mx-2" /> Profile
           
           </a>
            
           
          </div>
        </div>
        <div className="grid justify-between grid-cols-3 mx-2 mt-10 list-none mx:flex md:my-auto md:py-5">
          <li className="bg-[#327f1f] text-white px-4 py-2 rounded-2xl w-24 flex hover:cursor-pointer">
            <Link
              to="mainitems"
              smooth={true} offset={0} duration={500}
              onClick={closeMenu}
              id="mainitems"
            >
              Main
            </Link>
          </li>
          <li className="bg-[#1f7f2d] text-white px-4 py-2 rounded-2xl w-24 flex hover:cursor-pointer">
            <Link
              to="drinksitems"
              smooth={true} offset={1200} duration={500}
              onClick={closeMenu}
              id="drinksitems"
            >
              Drinks
            </Link>
          </li>
          <li className="bg-[#1f7f2d] text-white px-4 py-2 rounded-2xl w-24 flex hover:cursor-pointer">
            <Link
              to="dessertitems"
              smooth={true} offset={1800} duration={500}
              onClick={closeMenu}
              id="dessertitems"
            >
              Desserts
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default UserNavigation;
