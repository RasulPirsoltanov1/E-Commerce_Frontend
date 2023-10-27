import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import PageContainer from './containers/PageContainer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<Home></Home>} />
            <Route exact path='/products/:id' element={<Detail></Detail>} />
            <Route exact path='/cart' element={<Cart></Cart>} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </div>
  )
}

export default App