import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import NavbarComponent from './Navbar';
import CarouselComponent from './Carousel';
import './HomePage.css'; // Create custom styles for the page
import lions from './images/lions.png'; // Ensure you have a logo image in your project directory

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent />

      {/* Image Carousel */}
      <CarouselComponent />

      {/* Scroll Down Section */}
      <div className="scroll-down">
        <p>Scroll Down to Explore More</p>
      </div>

      {/* Take Interview Button */}
      <div className="interview-button-container">
        <Link to="/login" className="interview-button">Take Interview</Link>
      </div>

      {/* Additional Content, if necessary */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <img src={lions} alt="Ministry of Defence Logo" className="footer-logo" />
            <p className="logo-text">Ministry of Defence</p>
            <p>Government of India</p>
            <p>Content Owned and Updated by Ministry of Defence</p>
          </div>
         
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

