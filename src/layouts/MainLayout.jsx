import React from 'react'
import NavBar from '../components/NavBar'

export default function MainLayout({ children }) {
  return (
    <div className='bg-gray-200'>
        <NavBar />

        {children}
    </div>
  )
}
