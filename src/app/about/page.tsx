import React from 'react'; // Import React
import Hero from '../Components/AboutHero' // Import Hero component for the hero section
import Aboutus from '../Components/AboutUs'; // Import AboutUs component for the content section

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* About Us Section */}
      <Aboutus/>
      
    </div>
  )
}

export default About;
