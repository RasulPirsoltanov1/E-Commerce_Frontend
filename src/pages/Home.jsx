import React from 'react'
import PageContainer from '../containers/PageContainer'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'
import { useState } from 'react'

function Home() {
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');
    return (
        <div>
            <SliderComp />
            <Sorting setSort={setSort}></Sorting>
            <div className='flex flex-wrap items-center justify-around gap-20 columns-3'>
                <Category setCategory={setCategory}></Category>
                <Products category={category} sort={sort}></Products>
            </div>
        </div>
    )
}

export default Home