import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Subscription() {
  return (
    <div
        style={{
            boxShadow: '-17px 17px 0px 0px rgba(109,105,14,0.75), -10px 10px 10px -2px rgba(209,205,114,0.3)'
        }}
        className='w-9/12 px-8 py-6 my-16 bg-blue-600 rounded-ee-xl md:rounded-ee-3xl rounded-e-sm md:rounded-e-lg rounded-ss-xl md:rounded-ss-3xl rounded-s-sm md:rounded-s-lg mx-auto'
    >
        <p className="text-xl md:text-4xl font-medium text-white text-center">
            Subscribe For Free
        </p>
        <p className="text-xs md:text-base text-gray-300 text-center md:px-20 py-3 md:py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero necessitatibus quam minima quia nam suscipit iste, nemo aliquid corrupti molestias pariatur blanditiis. Itaque totam magni voluptates repudiandae nostrum iure explicabo?
        </p>
        <div className="relative w-auto md:mx-80">
            <input
                type="text"
                name="email"
                id="email"
                placeholder='Your Email, Our News!'
                className='hover:outline-none focus:outline-none px-2 py-3 w-full rounded-sm'
            />
            <div className="absolute top-1/2 right-2 -translate-y-1/2 p-2 md:p-3 bg-blue-600 text-white rounded-sm">
                <FaArrowRight />
            </div>
        </div>
    </div>
  )
}
