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
import Favorites from "./pages/Favorites";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import AuthProvider from "./contexts/AuthProvider";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
// import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

const Navigation = () => {
  return (
    <UserAuthContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/admin-panel/add" element={<AddProductPage />} />
            <Route path="/admin-panel" element={<AdminPage />} />
            <Route path="/admin-panel/edit/:id" element={<EditProductPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/catalog" element={<Catalog />} />
            {/* <Route path="/cart" element={<CartPage />} /> */}
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </UserAuthContextProvider>
  );
};

export default Navigation;
