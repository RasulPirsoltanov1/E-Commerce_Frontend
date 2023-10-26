import React from 'react'

function Sorting() {
  return (
    <div className='p-5 my-5 bg-gray-100 flex items-center justify-end'>
        
        <select className='bg-white p-5'>
            <option disabled value="">Secin...</option>
            <option value="inc">Artan sira</option>
            <option value="dec">Azalan sira</option>
        </select>

    </div>
  )
}

export default Sorting