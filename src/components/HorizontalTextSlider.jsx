import React from 'react'

export default function HorizontalTextSlider({data, className}) {
  return (
    <div className={`flex flex-row gap-x-2 overflow-x-auto items-center ${className}`}>
        {data.map(i => 
            <a
                key={i.id}
                href={'#'}
                className="hover:rounded-lg hover:scale-95 text-md text-nowrap border-2 border-black px-2 py-1 hover:bg-black hover:text-white duration-200 cursor-pointer"
            >{i.name}</a>
        )}
    </div>
  )
}
