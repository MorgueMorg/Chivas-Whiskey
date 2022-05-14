import React from "react";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";

import "bootstrap/dist/css/bootstrap.css";
import "swiper/css/bundle";

const App = () => {
  return (
    <ClientContext>
      <AdminContext>
            <Navigation />
      </AdminContext>
    </ClientContext>
  );
};
export default App;
