import React from "react";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./content.styles.scss";
import ContextCarousal from "../components/carousel/contentcarousel";
const Content = () => {
  return (
    <Fragment>
      <div className="main-content">
        <div className="flex-container">
          <div className="title-main">
            <h1>MuteTube</h1>
          </div>
          <div className="para-container">
            <h2>
              ACTIONS ARE INCREDIBLE WAY TO CONVEY MESSAGES TO YOU. WANT TO TEST
              IT? JUST A CLICK AWAY.CLICK ON ANY OF THE VIDEOS.PROMISE, YOU WONT
              REGRET IT.
            </h2>
          </div>
        </div>
        
        <div className="carousal-content">
        <ContextCarousal />
        <div class="content">
          <div class="content__container">
            <p class="content__container__text">Current  </p>

            <ul class="content__container__list">
              <li class="content__container__list__item">Trending..!</li>
              <li class="content__container__list__item">Virals..!</li>
              <li class="content__container__list__item">Toppers..!</li>
              <li class="content__container__list__item">Hits...!</li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      
    </Fragment>
  );
};

export default Content;
