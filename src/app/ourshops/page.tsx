import React from 'react'
import HeroSection from '../Components/HeroSection'
import ShopProduct from '../Components/ShopProduct'

const Page = () => {
  return (
    <div>
       <HeroSection title='Our Shop' homeLink='/' currentPage='Shop ' backgroundImage='/starbg.png'  />

      <ShopProduct/>
    </div>
  )
}

export default Page
