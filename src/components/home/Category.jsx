import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

function Category() {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [])
  return (
    <div className='w-1/6 bg-gray-100 p-5'>
      <div className='border-b pb-3 text-xl font-bold'>Kategoriyalar</div>
      {
        categories.length > 0 ? (categories.map((category, i) => {
          return <div className='text-lg mt-3 cursor-pointer rounded-md p-2 hover:bg-gray-200' key={i}>{category}</div>;
        })) : (<>Kategoria yoxdur.</>)
      }


    </div>
  )
}

export default Category