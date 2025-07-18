// client/my_app/src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-light rounded-3 shadow">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome to Library Management System</h1>
          <p className="col-md-8 fs-4">
            This system allows users to register, login, and manage library resources efficiently.
          </p>
          <div className="mt-3">
            <Link to="/register" className="btn btn-primary btn-lg me-3">
              Register Now
            </Link>
            <Link to="/login" className="btn btn-outline-secondary btn-lg">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
