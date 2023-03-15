import React from "react";
import "./category.styles.scss";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryCarousel from "../components/carousel/categorycarousel";

const Category = () => {
  return (
    <Fragment>
      <div className="category-container">
        <div className="category-bg">
          <div className="category-all">
            <div className="category-flex">
              <div className="category-title-main">
                <h1>MuteTube</h1>
              </div>
              <div className="category-content">
                <h1>
                  COMEDY, ACTION, ROMANTIC, CARTOON.. ALL GENRES STREAMED HERE.
                  STREAM IT TO ENJOY
                </h1>
              </div>
            </div>
          </div>

          <div className="category-carousel-container">
            <CategoryCarousel />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Category;
