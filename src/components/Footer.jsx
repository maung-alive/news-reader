import React from 'react'
import { FaFacebook, FaInstagram, FaReddit, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='w-full bg-slate-300 py-10 mt-10' style={{
        boxShadow: '0px 16px 24px -15px rgba(0,0,0,0.67) inset'
    }}>
        <div className="w-full">
            <p className="text-2xl font-bold text-gray-800 text-center">CONNECT WITH US!</p>
            <div className='px-20 flex justify-center gap-x-5 items-center pt-5'>
                <div className='bg-white p-3 rounded-xl hover:opacity-50 hover:scale-90 duration-200'>
                    <FaFacebook className='text-4xl text-blue-600'/>
                </div>
                <div className='bg-white p-3 rounded-xl hover:opacity-50 hover:scale-90 duration-200'>
                    <FaInstagram className='text-4xl text-orange-600'/>
                </div>
                <div className='bg-white p-3 rounded-xl hover:opacity-50 hover:scale-90 duration-200'>
                    <FaYoutube className='text-4xl text-red-600'/>
                </div>
                <div className='bg-white p-3 rounded-xl hover:opacity-50 hover:scale-90 duration-200'>
                    <FaTelegram className='text-4xl text-sky-600'/>
                </div>
                <div className='bg-white p-3 rounded-xl hover:opacity-50 hover:scale-90 duration-200'>
                    <FaReddit className='text-4xl text-orange-600'/>
                </div>
            </div>
        </div>
        <div className="flex justify-evenly gap-x-4 items-start pt-10">
            <div>
                <p className="text-2xl font-medium pb-2">
                    About
                </p>
                <a href="#" className="block hover:text-black hover:scale-90 text-gray-800 pb-1">The company</a>
                <a href="#" className="block hover:text-black hover:scale-90 text-gray-800 pb-1">This website</a>
                <a href="/" className="block hover:text-black hover:scale-90 text-gray-800">me</a>
            </div>
            <div>
                <p className="text-2xl font-medium pb-2">
                    On Social
                </p>
                <a href="#" className="block hover:text-black hover:scale-90 text-gray-800 pb-1">Facebook</a>
                <a href="#" className="block hover:text-black hover:scale-90 text-gray-800 pb-1">Instagram</a>
                <a href="/" className="block hover:text-black hover:scale-90 text-gray-800 pb-1">Twitter</a>
                <a href="/" className="block hover:text-black hover:scale-90 text-gray-800 pb-1">Youtube</a>
                <a href="/" className="block hover:text-black hover:scale-90 text-gray-800 pb-1">Telegram</a>
                <a href="/" className="block hover:text-black hover:scale-90 text-gray-800">Reddit</a>
            </div>
            <div>
                <p className="text-2xl font-medium pb-2">
                    Settings
                </p>
                <a href="#" className="block hover:text-black hover:scale-90 text-gray-800 pb-1">DarkMode</a>
                <a href="#" className="block hover:text-black hover:scale-90 text-gray-800">Clear Cookies</a>
            </div>
        </div>
    </div>
  )
}
