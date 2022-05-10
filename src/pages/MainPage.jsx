import React from "react";
import AboutUs from "./AboutUs";
import LisaPhotos from "./LisaPhotos";
import LisaVid from "./LisaVid";

const MainPage = () => {
  return (
    <>
      <div className="cont">
        <LisaVid />
        <AboutUs />
        <LisaPhotos />
      </div>
    </>
  );
};

export default MainPage;
