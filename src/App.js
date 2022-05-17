import React from "react";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";

import "bootstrap/dist/css/bootstrap.css";
import "swiper/css/bundle";
import { UserContextProvider } from "./contexts/UserContext";
import BottlesContextProvider from "./contexts/BottlesContext";

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
