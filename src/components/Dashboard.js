import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

// import Faq from './faq/Faq'
// import Contact from './contact/Contact'
// import Login from './login/Login'
// import Product from './product/Product'
// import Sell from './sell/Sell'
// import Home from './home/Home'
import Main from './main/Main'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import AboutUs from './about/AboutUs'
import Faq from './faq/Faq'
import Contact from './contact/Contact'
// import AboutUs from './about/AboutUs'

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/contactUs' element={<Contact/>}/>

        </Routes>
        {/* <AboutUs/> */}
        {/* <Faq/> */}
        {/* <Contact/> */}
        {/* <Login/> */}
        {/* <Product/> */}
        {/* <Sell/>/ */}
        {/* <Home/> */}
        <Main/>
        <Footer/>
    </div>
  )
}

export default Dashboard
