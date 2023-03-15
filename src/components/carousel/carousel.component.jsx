import React from "react";
import Slider from "react-slick";
 import "./carousel.styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Carousel = () => {
  
    const setting = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear"
        
      };
  return (
    <div className="carousel-class">
       
        <Slider {...setting}>
          <div>
            <h1>Silence Speaks Words Can't</h1>
          </div>
          <div>
            <h1>Silence speaks VOLUMES</h1>
          </div>
          <div>
            <h1 >Silence is more eloquent than Words</h1>
          </div>
          <div>
            <h1>Silence. Password to CREATIVITY</h1>
          </div>
          
        </Slider>
    </div>
  )
};

export default Carousel;
