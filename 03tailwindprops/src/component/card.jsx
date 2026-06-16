import React from 'react'

function Card({ obj ,btnText}) {
  const { name = "Unknown", price = "N/A",rating='N/A' } = obj || {}

  return (
    <div className="inline-block w-64 p-8 border bg-black shadow-xl rounded-xl m-4 relative">
  <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-200 text-green-700 font-medium text-xs">
    4.3
  </span>

  <div className="mt-4 text-gray-200 sm:pr-8">
    <h5 className="mt-4 text-xl font-bold text-gray-300 p-5">{name}</h5>
    <p className="mt-2 text-sm bg-green-500 text-white px-2 py-1 rounded inline-block">
      Price: {price}
    </p>
  </div>

  <button className="bg-white text-black text-sm w-32 h-8 p-1 m-4 border border-black rounded">
    Buy Now
  </button>
</div>


  )
}

export default Card
