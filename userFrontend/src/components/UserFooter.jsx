/* eslint-disable no-unused-vars */
import React from "react";
import { mediaData } from '../assets/mediaLinks';

const UserFooter = () => {
  return (
    <>
      <div className="flex w-[50%] h-20">
        {mediaData.map((item) => (
          <div key={item.id} className="flex inset-0 bottom-0 ml-[-10px]">
            <a href={item.link}>
              <item.title className="text-[28px] mx-3 lg:mx-16 md:text-[32px] active:scale-90"/>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserFooter;
