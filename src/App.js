import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.css";
// import 'swiper/swiper.css'
// import 'swiper/swiper.scss'
// import 'swiper/swiper.less'
// import "swiper/swiper-bundle.css"
// import "swiper/css/swiper.css"
import 'swiper/css/bundle'

const App = () => {
  return (
    // <ClientContext>
    //   <AdminContext>
        <Navigation />
    //   </AdminContext>
    // </ClientContext>
  );
};
export default App;
