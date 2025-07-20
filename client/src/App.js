// client/my_app/src/App.jsx
import './App.css';
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
import ManageBooks from "./pages/admin/ManageBooks";
import AddBook from "./pages/AddBook";
import ViewBooks from "./pages/ViewBook";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
  <div className="app-container">
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/my-books" element={<RequireAuth><MyBooks /></RequireAuth>} />
        <Route path="/profile" element={<RequireAuth><UserProfile /></RequireAuth>} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-books" element={<ManageBooks />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/viewbook" element={<ViewBooks />} />
        <Route path="/searchbook" element={<SearchBooks />} />
        <Route path="/*" element={<><Error /></>} />
      </Routes>
    </div>
    <Footer />
  </div>
</BrowserRouter>

  );
}

export default App;
