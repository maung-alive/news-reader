import React from 'react'
import Slider from './Slider'

export default function Headings({ headlines }) {
  return (
    <div className='flex justify-center gap-x-6 items-center mt-10 w-full h-[500px]'>

        <Slider data={headlines} className="h-full w-[750px]" />

        <div className="w-[400px] h-full bg-white rounded-xl overflow-y-auto">
          {headlines.map(data => 
            <h3 className="text-xl font-medium py-3 px-2 hover:border-l-4 cursor-pointer border-black">{data?.title}</h3>  
          )}
        </div>

    </div>
  )
}
