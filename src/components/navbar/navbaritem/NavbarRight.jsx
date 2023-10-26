import React from 'react'
import { BiSearch } from "react-icons/bi"
import { AiOutlineHeart } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'
function NavbarRight() {
  return (
    <div className='flex flex-row items-center gap-8 m-2 flex-wrap'>
      <div className='flex items-center border rounded-xl p-2  bg-gray-200'>
        <input type="text" placeholder='axtar...' className='outline-none bg-gray-200'/>
        <BiSearch size={25}></BiSearch>
      </div>
      <AiOutlineHeart size={25}></AiOutlineHeart>
      <div className='relative'>
        <div className='absolute -top-4 -right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>3</div>
        <SlBasket size={25}></SlBasket>
      </div>
    </div>
  )
}

export default NavbarRight