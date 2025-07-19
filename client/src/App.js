// client/my_app/src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import MyBooks from "./pages/MyBooks";
import SearchBooks from "./pages/SearchBooks";
import UserProfile from "./pages/UserProfile";
import RequireAuth from './components/RequireAuth';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/dashboard" element={<UserDashboard /> }/>
          <Route path="/my-books" element={<RequireAuth><MyBooks /></RequireAuth>} />
          <Route path="/search-books" element={<RequireAuth><SearchBooks /></RequireAuth>} />
          <Route path="/profile" element={<RequireAuth><UserProfile /></RequireAuth>} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/*" element={<><Error /></>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
