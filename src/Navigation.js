import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Redirect,
  useLocation,
  Navigate,
} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Navbar from "./components/Navbar";
import AddProductPage from "./pages/AddProductPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProduct";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./pages/Favorites";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import AuthProvider from "./contexts/AuthProvider";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import Footer from "./components/Footer";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { useAuth } from "./contexts/ResetPassword";
import { ChakraProvider } from "@chakra-ui/react";

const Navigation = () => {
  return (
    // <UserAuthContextProvider>
      <AuthProvider>
          {/* <ChakraProvider> */}
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/admin-panel/add" element={<AddProductPage />} />
                <Route path="/admin-panel" element={<AdminPage />} />
                <Route
                  path="/admin-panel/edit/:id"
                  element={<EditProductPage />}
                />
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/details/:id" element={<ProductDetails />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/*" element={<NotFoundPage />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route
                  path="/forgot-password"
                  element={<ForgotPasswordPage />}
                />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          {/* </ChakraProvider> */}
      </AuthProvider>
    // </UserAuthContextProvider>
  );
};

// function ProtectedRoute(props) {
//   const { currentUser } = useAuth()
//   const { path } = props
//   console.log('path', path)
//   const location = useLocation()
//   console.log('location state', location.state)

//   if (
//     path === '/forgot-password' ||
//     path === '/reset-password'
//   ) {
//     return currentUser ? (
//       <Navigate to={location.state?.from ?? '/profile'} />
//     ) : (
//       <Route {...props} />
//     )
//   }
//   return currentUser ? (
//     <Route {...props} />
//   ) : (
//     <Navigate
//       to={{
//         pathname: '/login',
//         state: { from: path },
//       }}
//     />
//   )
// }

export default Navigation;
