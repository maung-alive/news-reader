import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Item = ({data}) => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-400">
      <img src={data?.urlToImage} alt={data?.title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 p-2 pb-10 w-full bg-[rgba(200,200,200,0.4)] rounded-t-xl">
        <p className="text-xl md:text-2xl lg:text-3xl font-medium hover:text-white">{data?.title}</p>
        <p className="text-sm md:text-md lg:text-lg py-2">{data?.description}</p>
      </div>
    </div>
  )
}


export default function Slider({data, className}) {
  let [ current, setCurrent ] = useState(1);

  const prevSlide = () => current === 0 ? setCurrent(data.length-1) : setCurrent(current-1);
  const nextSlide = () => current === data.length-1 ? setCurrent(0) : setCurrent(current+1);

  useEffect(() => {
    let interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval)
  })

  return (
    <div className={`relative ${className}`}>
      <Item data={data[current]} />
      <div className='absolute top-10 md:top-1/2 left-0 -translate-y-1/2 rounded-e-xl text-white hover:text-black duration-200 hover:bg-[rgba(200,200,200,0.4)] p-2' onClick={prevSlide}>
        <FaChevronLeft className='text-3xl' />
      </div>
      <div className='absolute top-10 md:top-1/2 right-0 -translate-y-1/2 rounded-s-xl text-white hover:text-black duration-200 hover:bg-[rgba(200,200,200,0.4)] p-2' onClick={nextSlide}>
        <FaChevronRight className='text-3xl' />
      </div>
      <div className="flex gap-x-1 relative bottom-2 -translate-y-full justify-center w-full items-center">
        {data.map((i, index) =>
          index == current ?
          <span className="p-0.5 bg-gray-50 rounded-full"></span> :
          <span onClick={() => setCurrent(index)} className="cursor-pointer p-1 bg-gray-400 rounded-full"></span>
        )}
      </div>
    </div>
  )
}
