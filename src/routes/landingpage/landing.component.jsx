import { Fragment } from "react";
import React from "react";
//  import "bootstrap/dist/css/bootstrap.min.css";
import "./landing.styles.scss";
import Navigator from "../navigator/navigator.component";
import videobg from "../../images/silence.mp4";
import Carousel from "../../components/carousel/carousel.component";
const Landing = () => {
  return (
    <Fragment>
      <div className="video-container">
        <video
          src={videobg}
          autoPlay
          loop
          muted
          className="video-player"
        ></video>
        <div className="nav-container">
            <Navigator />
        </div>
        <div className="carousel-main">
            <Carousel/>
        </div>
        <div className="btn-container">
          <button className="btn1">GET STARTED</button>
        </div>

      </div>
      
    </Fragment>
  );
};

export default Landing;
