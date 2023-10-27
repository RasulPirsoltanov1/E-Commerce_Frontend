import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavbarLeft() {
  const navigator=useNavigate();
  return (
    <div className='text-4xl' onClick={()=>{
      navigator("/");
    }} style={{cursor:'pointer'}}>King Shop</div>
  )
}

export default NavbarLeft