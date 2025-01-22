import React from 'react';
// import LandingPage from './Components/Header' // Uncomment if LandingPage is needed
import Categories from './Components/Categories';
import FromMenu from './Components/FromMenu';
import Cheefs from './Components/Chefs';
import ChefGrid from './Components/chefGrid';
import Labelpic from './Components/labelpic';
import SevenHero from './Components/Testimonial';
import BlogPost from './Components/BlogPost';
import LandingHero from './Components/LandingHerosec';

const Home = () => {
  return (
    <div>
      {/* Navbar component to display navigation menu */}
      {/* <Navbar/> */}
      
      {/* Header component for the top section of the page */}
      <LandingHero/>
      
      {/* Categories component to display various categories */}
      <Categories/>
      
      {/* FromMenu component to show the menu section */}
      <FromMenu/>
      
      {/* Cheefs component to display chef-related content */}
      <Cheefs/>
      
      {/* ChefGrid component to display chef images in a grid layout */}
      <ChefGrid/>
      
      {/* SevenHero component to display testimonials */}
      <SevenHero/>
      
      {/* Labelpic component for showcasing images or promotional content */}
      <Labelpic/>
      
      {/* BlogPost component to display blog posts */}
      <BlogPost/>
      
      {/* Footer component to display the footer of the page */}
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
