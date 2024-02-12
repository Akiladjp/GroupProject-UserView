/* eslint-disable no-unused-vars */
import React from "react";
import OfferBanner from "../components/OfferBanner";
import UserNavigation from "../components/UserNavigation";
import UserFooter from "../components/UserFooter";
import { FaCartPlus } from "react-icons/fa";
import MainItems from "./MainItems";
import DrinkItems from "./DrinkItems";
import DessertItem from "./DessertItem";

const UserHome = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed w-[100%]">
        <OfferBanner />
        <div>
          <UserNavigation />
        </div>
      </div>
      <div className="bg-blue-200 mt-[20rem] w-[100%]">
        <div className="h-screen flex justify-center border border-black">
          <MainItems />
        </div>
        <div className="h-screen flex justify-center border border-black">
          <DrinkItems />
        </div>
        <div className="h-screen flex justify-center border border-black">
          <DessertItem />
        </div>
      </div>
      <div className="bottom-0 flex justify-center fixed">
        <UserFooter />
      </div>
      <div className="fixed text-[35px] bg-white p-3 rounded-full bottom-10 right-4 border border-0.5 shadow-lg active:scale-90">
        <FaCartPlus />
      </div>
    </div>
  );
};

export default UserHome;
