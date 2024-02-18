/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import kottu from "../assets/kottu-6319357_1280.jpg";

const ItemCard = () => {
  const [isCount, setIsCount] = useState(0);


  const remove = () => {
    setIsCount(isCount - 1);
  };

  const add = () => {
    setIsCount(isCount + 1);
  };

  return (
    <div className="flex w-[95%] md:w-[95%] lg:w-[95%] border rounded-2xl shadow-md shadow-green-200 bg-white">
      <div className="ml-4 text-left w-[70%]">
        <h2 className="text-[16px] font-bold my-2 sm:text-[20px] md:text-[20px]">
          Chicken Full Kottu
        </h2>
        <h3 className="font-bold text-[14px] sm:text-[18px] md:text-[18px] lg:mt-4">
          Rs:1200/=
        </h3>
        <div className="flex items-center lg:mt-4 w-[50%] md:mb-2 float-start">
          <div className="flex text-[12px] md:text-[20px] md:mt-4 mt-2 py-1.5 rounded-xl bg-slate-100">
            <button className="mx-2" onClick={remove} disabled={isCount==0}>
              {" "}
              -{" "}
            </button>
            <p className="mx-2 flex items-center font-bold">{isCount}</p>
            <button className="mx-2" onClick={add}>
              {" "}
              +{" "}
            </button>
          </div>
          <div className="ml-8">
            <button className="mt-2 bg-blue-500 rounded-md font-bold text-white py-1 px-2 text-[12px] md:text-[20px] md:mt-4 active:bg-blue-700">
              {" "}
              Add{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-[125px] sm:w-[160px] lg:w-[200px]">
        <img
          className="rounded-l-none rounded-2xl float-[30%]"
          src={kottu}
          alt="food"
        />
      </div>
    </div>
  );
};

export default ItemCard;
