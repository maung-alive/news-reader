import React from 'react'
import Slider from './Slider'

export default function Headings({ headlines }) {
  return (
    <div className='block md:flex justify-center gap-x-6 items-center mt-10 w-full md:h-[500px]'>

        <Slider data={headlines} className="h-[400px] md:h-full md:w-[600px] lg:w-[750px] mb-5 md:mb-0" />

        <div className="w-full md:w-[400px] h-[400px] md:h-full bg-white rounded-xl overflow-y-auto">
          {headlines.map(data => 
            <h3 className="text-llg font-medium py-3 px-2 hover:border-l-4 cursor-pointer border-black">{data?.title}</h3>  
          )}
        </div>

    </div>
  )
}
