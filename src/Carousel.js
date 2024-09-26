import React from 'react';
import { Carousel } from 'react-bootstrap';
import fslide from './images/fslide.jpeg';
import sslide from './images/sslide.jpg';
import './Carousel.css'; // Import the CSS file

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={fslide}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Prepare for Your Defense Interview</h3>
          <p>Gain insights and confidence with our comprehensive interview preparation tools.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={sslide}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Conduct Virtual Interviews with Ease</h3>
          <p>Utilize our platform to streamline your virtual interview experience, ensuring a professional environment.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel Items as needed */}
    </Carousel>
  );
};

export default CarouselComponent;

