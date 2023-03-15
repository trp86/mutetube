import React from "react";
// import img1 from "../../images/mutetube.png";
import "./navigator.style.scss";
import { Link } from "react-router-dom";

 

const Navigator = () => {
  return (
    <>
      <div className="content-head">
        <div className="title">
          <h1>MuteTube</h1>
        </div>
        
        <div className="nav-bar">
          <div>
            <Link className="nav-link" to="/log-in">
              <h2>LOG IN</h2>
            </Link>
          </div>
          <Link className="menu-bar-link" to="/menu">
            <div className="menu-bar">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default Navigator;
