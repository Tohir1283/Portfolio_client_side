import React from "react";
import BannerDetails from "../../../Components/BannerDetails/BannerDetails";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="home-banner">
        <div className="portfolio_intro">
          <BannerDetails />
        </div>
        <div className="portfolio_image">
          <img
            src="https://i.ibb.co/yP3xfMc/Untitled-design-5.png"
            alt="portfolio"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Banner;
