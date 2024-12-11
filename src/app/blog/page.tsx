import React from 'react'
import Hero from './Hero' // Import the Hero component
import Navbar from '../Components/Navbar' // Import the Navbar component
import Footer from '../Components/Footer' // Import the Footer component

const BlogPage = () => {
  return (
    <div>
      <Navbar/> {/* Renders the navigation bar at the top of the page */}
      <Hero /> {/* Renders the hero section (likely the main content/intro area of the page) */}
      <Footer/> {/* Renders the footer at the bottom of the page */}
    </div>
  )
}

export default BlogPage // Exports the BlogPage component for use in other parts of the app
