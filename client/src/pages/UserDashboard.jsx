import React from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>User Dashboard</h2>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <h5 className="card-title">My Books</h5>
              <p className="card-text">View and manage books you have borrowed.</p>
              <button className="btn btn-primary" onClick={() => navigate("/user/my-books")}>
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <h5 className="card-title">Search Books</h5>
              <p className="card-text">Search for books in the library catalog.</p>
              <button className="btn btn-primary" onClick={() => navigate("/user/search-books")}>
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <h5 className="card-title">User Profile</h5>
              <p className="card-text">Edit your personal information and settings.</p>
              <button className="btn btn-primary" onClick={() => navigate("/user/profile")}>
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
