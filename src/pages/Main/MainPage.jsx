import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/auth">
          <button className="btn-outline" type="submit">
            Authorization
          </button>
        </Link>
        <Link to="/chat">
          <button className="btn-outline" type="submit">
            Chat
          </button>
        </Link>
        <picture className="pic">
          <img
            className="cover"
            src="https://chivas.idlcloud.com/stage/basic_uploads/sir-trevor/6218d7fbbf04d.jpeg"
            alt=""
          />
        </picture>
        <ChivasCocktails />
        <ChivasVid />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainPage;
