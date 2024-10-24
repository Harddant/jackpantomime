import React from 'react'
import logo from '../assets/logo.png'
import { Menu, ShoppingBagIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-center items-center w-screen'>
      <div className='flex gap-10 lg:gap-20 justify-between pt-7 mb-6 mx-4 w-11/12 lg:w-1/2'>
        <div className='flex gap-4 items-center flex-shrink-0'>
          <a href="/">
            <img src={logo} className='h-6' />
          </a>
        </div>
        <div>
          <h1 className='text-xl font-poppins'>Jack Pantomime</h1>
        </div>
        <div>
        <button>
            <Menu className='border-opacity-0 hover:bg-slate-100 transition-colors duration-150 rounded-full w-7 h-7 mr-6 focus:shadow-outline '/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar