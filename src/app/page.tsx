import React from 'react'
// import LandingPage from './Components/Header'
import Categories from './Components/Categories'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import FromMenu from './Components/FromMenu'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Navbar/>
      <Header/>
      <Categories/>
      <FromMenu/>
      <Footer/>
    </div>
  )
}

export default Home
