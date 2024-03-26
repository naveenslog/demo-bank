import React, { useState } from "react";
import "./styles.css"; // Make sure to create a corresponding CSS file
import { post } from "../../helpers/api/base";
import { useNavigate } from "react-router-dom";
import {
  showFailureToastMessage,
  showSuccessToastMessage,
} from "../../helpers/others";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomNavbar from "../../components/navbar";
import Footer from "../../components/footer";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        showFailureToastMessage("Passwords do not match!");
        return;
      }

      const response = await post("/users/register/", formData);
      console.log(response);
      if (response.status === 201) {
        showSuccessToastMessage("Registration successful !", true);
        setTimeout(() => navigate("/dashboard"), 1000);
      } else {
        throw new Error("");
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        if (error?.response?.data?.email[0]) {
          showFailureToastMessage(error?.response?.data?.email[0]);
          return;
        }
      }
      showFailureToastMessage("Internal Server Error !");
    }
  };

  return (
    <>
      <CustomNavbar />
      <div className="registration-container">
        <form className="registration-form" onSubmit={handleSignup}>
          <h2>Register</h2>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
          <div className="registration-footer">
            <a href="/login">Already have an account? Log In</a>
          </div>
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default RegistrationPage;
