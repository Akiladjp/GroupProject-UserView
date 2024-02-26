// eslint-disable-next-line no-unused-vars
import React from 'react'
import ItemCard from '../components/ItemCard'
import { Link } from 'react-router-dom'


const HotDeal = () => {
  return (
    <div>
      <div>
        <hr />
        <h1 className='flex justify-center text-xl font-bold'>Hot Deals 🍔</h1>
        <hr />
      </div>
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
        <ItemCard buttonState="ADD" />
        </div>
      </div>
    </div>
  )
}

export default HotDeal
