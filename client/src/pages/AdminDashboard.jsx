import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 text-primary">Admin Dashboard</h2>

      <div className="row g-4">
        {/* Manage Books */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-book-half display-4 text-success mb-3"></i>
              <h5 className="card-title">Manage Books</h5>
              <p className="card-text">View, update, or delete books from the library.</p>
              <Link to="/admin/manage-books" className="btn btn-outline-primary">Manage</Link>
            </div>
          </div>
        </div>

        {/* Add New Book */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-plus-square-fill display-4 text-success mb-3"></i>
              <h5 className="card-title">Add Book</h5>
              <p className="card-text">Add new books to the collection easily.</p>
              <Link to="/addbook" className="btn btn-outline-primary">Add Book</Link>
            </div>
          </div>
        </div>

        {/* View All Books */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-collection-fill display-4 text-success mb-3"></i>
              <h5 className="card-title">View All Books</h5>
              <p className="card-text">See the full catalog of library books.</p>
              <Link to="/viewbook" className="btn btn-outline-primary">View</Link>
            </div>
          </div>
        </div>

        {/* User Reports */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-bar-chart-fill display-4 text-success mb-3"></i>
              <h5 className="card-title">User Reports</h5>
              <p className="card-text">Monitor user activity and book issue trends.</p>
              <button className="btn btn-outline-primary">Reports</button>
            </div>
          </div>
        </div>

        {/* Manage Users */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-people-fill display-4 text-success mb-3"></i>
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">Add, update, or remove registered users.</p>
              <button className="btn btn-outline-primary">Manage</button>
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-gear-fill display-4 text-success mb-3"></i>
              <h5 className="card-title">Profile Settings</h5>
              <p className="card-text">Update admin account information.</p>
              <button className="btn btn-outline-primary">Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
