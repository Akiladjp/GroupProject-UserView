/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-scroll";

const UserNavigation = () => {

  const[click, setClick] = useState(false);

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
            <button className="flex text-[14px] py-2 border ml-2 pr-2 md:px-4 md:text-[20px] rounded-full active:scale-95 bg-blue-400">
              <FaUser className="m-auto text-[16px] mx-2" /> Profile
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 list-none justify-between mx-4 mt-10 mx:flex md:my-auto md:py-5">
            <li className="bg-[#00BA13] text-white px-4 py-2 rounded-2xl w-24 flex hover:cursor-pointer">
              <Link
                to="/mainitems"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                id="mainitems"
              >
                Main
              </Link>
            </li>
            <li className="bg-[#00BA13] text-white px-4 py-2 rounded-2xl w-24 flex hover:cursor-pointer">
              <Link
                to="/drinksitems"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                id="drinksitems"
              >
                Drinks
              </Link>
            </li>
            <li className="bg-[#00BA13] text-white px-4 py-2 rounded-2xl w-24 flex hover:cursor-pointer">
              <Link
                to="/dessertitems"
                spy={true}
                smooth={true}
                duration={500}
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
