import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

// Define custom arrow components outside of the functional component
const CustomPrevArrow = (props) => (
  <div {...props} className="slick-arrow slick-prev">
    
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props} className="slick-arrow slick-next">
    
  </div>
);

function PauseOnHover() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true, // Show navigation arrows
    prevArrow: <CustomPrevArrow />, // Use custom previous arrow component
    nextArrow: <CustomNextArrow />, // Use custom next arrow component
  };

  return (
    <div className="slider-container">
      <h2>Latest Arrivals</h2>
      <Slider {...settings} className="slider">
        <div>
          <img
            className="slider-img"
            src="https://images.unsplash.com/photo-1628532730171-5428e3e0f0f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluZGlhbiUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="slide1"
          />
        </div>
        <div>
          <img
            className="slider-img"
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGluZGlhbiUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="slide2"
          />
        </div>
        <div>
          <img
            className="slider-img"
            src="https://images.unsplash.com/photo-1638617501607-5dfb8b079ebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGluZGlhbiUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="slide3"
          />
        </div>
        <div>
          <img
            className="slider-img"
            src="https://images.unsplash.com/photo-1534875611686-50fe95ae2624?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGluZGlhbiUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="slide4"
          />
        </div>
        <div>
          <img
            className="slider-img"
            src="https://images.unsplash.com/photo-1561812350-932aed735105?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGluZGlhbiUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
            alt="slide5"
          />
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
