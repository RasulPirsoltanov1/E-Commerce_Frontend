import React from 'react'

function Sorting({ setSort }) {
  return (
    <div className='p-5 my-5 bg-gray-100 flex items-center justify-end'>

      <select className='bg-white p-5' onClick={(e) => {
        setSort(e.target.value);
      }}>
        <option value="" disabled>Secin...</option>
        <option value="asc">Artan sira</option>
        <option value="desc">Azalan sira</option>
      </select>

    </div>
  )
}

export default Sorting