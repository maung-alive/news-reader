import React from 'react'
import NavBar from '../components/NavBar'
import Subscription from '../components/Subscription'

export default function MainLayout({ children }) {
  return (
    <div className='bg-gray-200'>
        <NavBar />

        {children}

        <Subscription />
    </div>
  )
}
