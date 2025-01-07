import React from 'react'
import ShopHero from '../Components/ShopHero'
import Hero from '../Components/AboutHero'

const Page = () => {
  return (
    <div>
       <Hero title='Our Shop' homeLink='/' currentPage='Shop ' backgroundImage='/starbg.png'  />

      <ShopHero/>
    </div>
  )
}

export default Page
