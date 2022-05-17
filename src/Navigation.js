import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./pages/CatalogPage";
import Navbar from "./components/Navbar";
import AddProductPage from "./pages/Crud/AddProductPage";
import AdminPage from "./pages/Crud/AdminPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/Crud/EditProduct";
import MainPage from "./pages/Main/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetails from "./components/Catalog/ProductDetails";
import Favorites from "./pages/FavoritesPage";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";
import HistoryPage from "./pages/HistoryPage";
import BottlesFirePage from "./components/Data/BottlesFirePage";
import AddBottles from "./components/Data/AddBottles";
import EditBottles from "./components/Data/EditBottles";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel/add" element={<AddProductPage />} />
        <Route path="/admin-panel/edit/:id" element={<EditProductPage />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/bottles-firebase" element={<BottlesFirePage />} />
        <Route path="/add-bottles" element={<AddBottles />} />
        <Route path="/bottles-firebase/edit/:id" element={<EditBottles />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
