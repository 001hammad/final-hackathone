import React from 'react'; // Import React
import Aboutus from '../Components/AboutUs'; // Import AboutUs component for the content section
import HeroSection from '../Components/HeroSection';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection title='About Us' currentPage='About' homeLink='/' backgroundImage='/starbg.png'/>
      
      {/* About Us Section */}
      <Aboutus/>
      
    </div>
  )
}

export default About;
