import React from 'react'
import PageContainer from '../containers/PageContainer'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

function Home() {
    return (
        <div>
            <SliderComp />
            <Sorting></Sorting>
            <div>
                <Category></Category>
                <Products></Products>
            </div>
        </div>
    )
}

export default Home