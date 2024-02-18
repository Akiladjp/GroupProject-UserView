/* eslint-disable no-unused-vars */
import React from "react";
import ItemCard from "../components/ItemCard";

const DessertItem = () => {
  return (
    <div id="dessertitems">
      <hr />
      <h1 className='flex justify-center  text-xl font-bold'>Desserts</h1>
      <hr />
      <div className="md:grid grid-cols-2 mt-6 mb-32">
        <div className="mb-8">
          <ItemCard />
        </div>
        <div className="mb-8">
          <ItemCard />
        </div>
        <div className="mb-8">
          <ItemCard />
        </div>
        <div className="mb-8">
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default DessertItem;
