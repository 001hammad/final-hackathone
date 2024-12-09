import React from 'react'
// import LandingPage from './Components/Header'
import Categories from './Components/Categories'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import FromMenu from './Components/FromMenu'
import Footer from './Components/Footer'
import Cheefs from './Components/Chefs'
import ChefGrid from './Components/chefGrid'
import Labelpic from './Components/labelpic'
import SevenHero from './Components/Testimonial'
import BlogPost from './Components/BlogPost'

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Navbar/>
      <Header/>
      <Categories/>
      <FromMenu/>
      <Cheefs/>
      <ChefGrid/>
      <SevenHero/>
      <Labelpic/>
      <BlogPost/>
      <Footer/>
    </div>
  )
}

export default Home
