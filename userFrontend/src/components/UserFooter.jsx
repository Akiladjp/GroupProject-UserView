/* eslint-disable no-unused-vars */
import React from "react";
import { mediaData } from '../assets/mediaLinks';

const UserFooter = () => {
  return (
    <>
      <div className="flex justify-center w-[100%] sm:w-[80%] sm:mx-auto md:w-[60%]">
        {mediaData.map((item) => (
          <div key={item.id} className=" inset-0 bottom-0">
            <a href={item.link}>
              <item.title className="text-[28px] sm:text-[32px] md:text-[40px] mx-4 sm:mx-6 md:mx-10 active:scale-90"/>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserFooter;
