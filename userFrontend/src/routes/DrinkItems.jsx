/* eslint-disable no-unused-vars */
import React from "react";
import ItemCard from "../components/ItemCard";

const DrinkItems = () => {
  return (
    <div id="drinksitems">
      <hr />
      <h1 className="flex justify-center text-xl font-bold">Drinks</h1>
      <hr />
      <div className="grid-cols-2 mt-6 md:grid">
        <div className="mb-8">
          <ItemCard buttonState="ADD" />
        </div>
        <div className="mb-8">
          <ItemCard buttonState="ADD" />
        </div>
        <div className="mb-8">
          <ItemCard buttonState="ADD" />
        </div>
        <div className="mb-8">
          <ItemCard buttonState="ADD" />
        </div>
      </div>
    </div>
  );
};

export default DrinkItems;
