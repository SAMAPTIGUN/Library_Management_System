import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    urn: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/register", formData);
      Swal.fire({
        icon: "success",
        title: "Registered Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    } catch (error) {
      if (error.response?.data?.message === "URN already exists") {
        Swal.fire("Error", "URN already exists", "error");
      } else if (error.response?.data?.message === "Email already exists") {
        Swal.fire("Error", "Email already exists", "error");
      } else {
        Swal.fire("Error", "Registration failed", "error");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 shadow p-4 rounded bg-light">
          <h3 className="text-center mb-4">User Registration</h3>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <label>Name</label>
                <input type="text" className="form-control" name="name" onChange={handleChange} required />
              </div>
              <div className="col">
                <label>Email</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <label>Phone</label>
                <input type="text" className="form-control" name="phone" onChange={handleChange} required />
              </div>
              <div className="col">
                <label>URN</label>
                <input type="text" className="form-control" name="urn" onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-3">
              <label>Address</label>
              <textarea className="form-control" name="address" onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" name="password" onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
