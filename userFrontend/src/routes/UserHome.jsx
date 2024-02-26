/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import OfferBanner from "../components/OfferBanner";
import UserNavigation from "../components/UserNavigation";
import UserFooter from "../components/UserFooter";
import { FaCartPlus } from "react-icons/fa";
import MainItems from "./MainItems";
import DrinkItems from "./DrinkItems";
import DessertItem from "./DessertItem";
import HotDeal from "./HotDeal";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";

const UserHome = () => {
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 250 ) {
          setShow(true)
      }else{
        setShow(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <div className=" w-[100%] fixed pb-4 bg-white">
        <Headroom>
          <div className={`active ${show && 'hidden'} bg-white`}>
            <OfferBanner />
          </div>
        </Headroom>

          <div className="py-4 bg-white">
            <UserNavigation />
          </div>
      </div>
      <div className="mt-[22rem] w-[100%]">
        <HotDeal />
        <MainItems />
        <DrinkItems />
        <DessertItem />
      </div>
      <div className="fixed bottom-0 flex w-full bg-white">
        <UserFooter />
      </div>
      <Link to="/submenucart">
      <div className="fixed text-[35px] bg-white p-3 rounded-full bottom-24 right-4 border border-0.5 shadow-lg active:scale-90">
        <FaCartPlus />
      </div></Link>
    </div>
  );
};

export default UserHome;
