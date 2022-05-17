import React from "react";
import { Link } from "react-router-dom";
import UtilsPage from "../UtilsPage";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import AboutUs from "./AboutUs";
import ChivasCocktails from "./ChivasCocktails";
import ChivasVid from "./ChivasVid";
import LisaPhotos from "./LisaPhotos";
import LisaVid from "./LisaVid";

const MainPage = () => {
  return (
    <>
      <div className="cont">
        {/* <Navbar /> */}
        <LisaVid />
        <AboutUs />
        <LisaPhotos />
        <picture className="pic">
          <img
            className="cover"
            src="https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/6218d7fbbf04d.jpeg"
            alt=""
          />
        </picture>
        <UtilsPage />
        <ChivasCocktails />
        <ChivasVid />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainPage;
