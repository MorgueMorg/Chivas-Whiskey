import React from "react";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";

import "bootstrap/dist/css/bootstrap.css";
import "swiper/css/bundle";
import { UserContextProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <ClientContext>
      <AdminContext>
        <UserContextProvider>
          <Navigation />
        </UserContextProvider>
      </AdminContext>
    </ClientContext>
  );
};
export default App;
