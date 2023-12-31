import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div className='z-40 sticky top-0 left-0 w-full py-3 px-6 bg-inherit flex justify-around items-center'>
        <h3 className='text-4xl font-medium'>N News</h3>
        <div className="flex items-center relative">
            <input type="text" name="search" id="search" className='w-full border-2 border-gray-950 rounded-xl pl-2 pr-8 py-2' />
            <FaSearch className='absolute top-1/2 -translate-y-1/2 right-4' />
        </div>
        <FaBars className='text-3xl lg:hidden' />
    </div>
  )
}
