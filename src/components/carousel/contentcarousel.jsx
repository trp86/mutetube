import React from "react";
import Slider from "react-slick";
import "./contextCarousel.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../images/assest1.jpg";

const ContextCarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="context-carousel-class">
      <Slider {...settings}>
        <div>
          <img className="image1" src={image1} alt="image1" />
          {/* <iframe height="200px" width="400px" src="https://www.youtube.com/watch?v=AqVIQ9ymvM8"></iframe> */}
        </div>
        <div>
          <img className="image1" src={image1} alt="image2" />
        </div>
        <div>
          <img className="image1" src={image1} alt="image3" />
        </div>
        <div>
          <img className="image1" src={image1} alt="image4" />
        </div>

        <div>
          <img className="image1" src={image1} alt="image5" />
        </div>
        <div>
          <img className="image1" src={image1} alt="image6" />
        </div>
        <div>
          <img className="image1" src={image1} alt="image7" />
        </div>
        <div>
          <img className="image1" src={image1} alt="image8" />
        </div>

        <div>
          <img className="image1" src={image1} alt="image9" />
        </div>
        <div>
          <img className="image1" src={image1} alt="image10" />
        </div>
        <div>
          <img className="image1" src={image1} alt="image11" />
        </div>
        <div>
          <img className="image1" src={image1} alt="image12" />
        </div>
      </Slider>
    </div>
  );
};

export default ContextCarousal;
