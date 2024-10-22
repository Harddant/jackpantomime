import React from 'react'
import logo from '../assets/logo.png'
import { Menu, ShoppingBagIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
      <div className='flex gap-4 items-center flex-shrink-0'>
        <a href="/">
          <img src={logo} className='h-6' />
        </a>
      </div>
      <div>
        <h1 className='text-xl'>Jack Pantomime</h1>
      </div>
      <div>
      <button>
          <Menu />
        </button>
      </div>
    </div>
  )
}

export default Navbar