import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getProductsByCategory } from '../../redux/productSlice';
import { STATUS } from '../../utils/status';
import Product from './Product';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

function Products({ category, sort }) {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector(state => state.products)
  console.log(products, productsStatus);
  console.log(sort);
  useEffect(() => {
    const getall = async () => {
      if (category != '') {
        console.log(category)
        dispatch(await getProductsByCategory(category));
      } else {
        if (sort != "")
          dispatch(await getProducts(sort));
        else
          dispatch(await getProducts(sort));
      }
    }
    getall();
  }, [dispatch, category, sort]);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  let itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <div className='flex gap-5 flex-wrap justify-center'>
        {
          productsStatus == STATUS.LOADING ? (<div>Loading...</div>) : (
            currentItems.map((product, index) => {
              return (
                <Product key={index} product={product}></Product>
              )
            })
          )
        }
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        className='flex justify-center gap-4 bg-gray-200 p-3 my-3 paginate'
      />
    </div>
  )
}

export default Products