import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">View, edit or delete user accounts.</p>
              <button className="btn btn-primary" onClick={() => navigate("/admin/manage-users")}>
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <h5 className="card-title">Manage Books</h5>
              <p className="card-text">Add, update, or delete books from library.</p>
              <button className="btn btn-primary" onClick={() => navigate("/admin/manage-books")}>
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center h-100">
            <div className="card-body">
              <h5 className="card-title">View Reports</h5>
              <p className="card-text">Generate and analyze library usage reports.</p>
              <button className="btn btn-primary" onClick={() => navigate("/admin/view-reports")}>
                Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
