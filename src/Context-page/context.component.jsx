import React from "react";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import videobg from "../images/video-3.mp4";

import "./context.styles.scss";
const Context = () => {
  return (
    <Fragment>
      <div className="video-container2">
        <video src={videobg} autoPlay loop muted></video>
        <div className="content-main">
          <h1>
            STREAM OR UPLOAD SILENT CLIPS OR VIDEOS, ANYTIME. ON ANY SCREEN,
            ANYWHERE
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Context;
