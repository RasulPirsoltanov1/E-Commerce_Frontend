import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice';

function Products() {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector(state => state.products)
  useEffect(() => {
    const getall = async () => {
      dispatch(await getProducts());
    }
    getall();
    console.log(productsStatus);
    console.log(products);
  }, [dispatch])
  return (
    <div>Products</div>
  )
}

export default Products