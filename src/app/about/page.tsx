import React from 'react'; // Import React
import Hero from "./Hero"; // Import Hero component for the hero section
import AboutUs from "./AboutUs"; // Import AboutUs component for the content section
import Footer from '../Components/Footer'; // Import Footer component

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* About Us Section */}
      <AboutUs />
      
      {/* Footer Section */}
      <Footer/>
    </div>
  )
}

export default About;
