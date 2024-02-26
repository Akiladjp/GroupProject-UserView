/* eslint-disable no-unused-vars */
import React from 'react'
import ItemCard from '../components/ItemCard'

const MainItems = () => {
  return (
    <div id="mainitems">
      <hr />
      <h1 className='flex justify-center text-xl font-bold'>Main items</h1>
      <hr />
      <div className="grid-cols-2 mt-6 md:grid">
        <div className="mb-8">
        <ItemCard buttonState="ADD"/> 
        </div>
        <div className="mb-8">
        <ItemCard buttonState="ADD"/> 
        </div>
        <div className="mb-8">
        <ItemCard buttonState="ADD"/> 
        </div>
        <div className="mb-8">
        <ItemCard buttonState="ADD"/> 
        </div>
      </div>
    </div>
  )
}

export default MainItems
