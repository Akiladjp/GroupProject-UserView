// eslint-disable-next-line no-unused-vars
import React from 'react'
import ItemCard from '../components/ItemCard'


const HotDeal = () => {
  return (
    <div>
      <div>
        <hr />
        <h1 className='flex justify-center text-xl font-bold'>Hot Deals 🍔</h1>
        <hr />
      </div>
      <div className="md:grid grid-cols-2 mt-6">
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
  )
}

export default HotDeal
