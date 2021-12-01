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
            src="https://i.ibb.co/cLTyzrF/Untitled-design-6-removebg-preview-1.png"
            alt="portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
