import React from "react";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import BottlesContextProvider from "./contexts/BottlesContext";
import Navigation from "./Navigation";
import { UserContextProvider } from "./contexts/UserContext";

import "bootstrap/dist/css/bootstrap.css";
import "swiper/css/bundle";

const App = () => {
  return (
    <ClientContext>
      <AdminContext>
        <BottlesContextProvider>
          <UserContextProvider>
            <Navigation />
          </UserContextProvider>
        </BottlesContextProvider>
      </AdminContext>
    </ClientContext>
  );
};
export default App;
