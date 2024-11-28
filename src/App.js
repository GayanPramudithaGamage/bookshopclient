import React from "react";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import Layout from "./pages/Layout";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import BookdetailPage from "./pages/BookdetailPage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import { AuthProvider, AuthContext } from './AuthContext';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
    const { user, loading } = React.useContext(AuthContext);

    if (loading) return <div>Loading...</div>;

    return user ? children : <Navigate to="/login" />;
};

// App Component
export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Protected Routes */}
                    <Route 
                        path="/" 
                        element={
                            <ProtectedRoute>
                                <Layout />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="/home" index element={<HomePage />} />
                        <Route path="/book" element={<BookdetailPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckOutPage />} />
                    </Route>

                    {/* Public Routes */}
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
