import React from "react";
import "./categorycarousel.styles.scss";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import video1 from "../../images/viral.mp4";
const CategoryCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
  };
  return (
    <Fragment>
      <div className="category-carousel-class">
        <Slider {...settings}>
          <div>
            <video
              src={video1}
              autoPlay
              loop
              muted
              className="video1"
            ></video>
          </div>
          <div>
          <video
              src={video1}
              autoPlay
              loop
              muted
              className="video1"
            ></video>
          </div>

          <div>
          <video
              src={video1}
              autoPlay
              loop
              muted
              className="video1"
            ></video>
          </div>
          <div>
          <video
              src={video1}
              autoPlay
              loop
              muted
              className="video1"
            ></video>
          </div>

          <div>
          <video
              src={video1}
              autoPlay
              loop
              muted
              className="video1"
            ></video>
          </div>
          <div>
          <video
              src={video1}
              autoPlay
              loop
              muted
              className="video1"
            ></video>
          </div>
        </Slider>
      </div>
    </Fragment>
  );
};

export default CategoryCarousel;
