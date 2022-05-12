import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Navbar from "./components/Navbar";
import AddProductPage from "./pages/AddProductPage";
import AdminPage from "./pages/AdminPage";
// import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProduct";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./pages/Favorites"
// import NotFoundPage from "./pages/NotFoundPage";
// import Footer from "./components/Footer";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin-panel/add" element={<AddProductPage />} />
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel/edit/:id" element={<EditProductPage />} />
        <Route path="/" element={<MainPage />} /> 
        <Route path="/catalog" element={<Catalog />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path="/details/:id" element={<ProductDetails />}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/*" element={< NotFoundPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Navigation;