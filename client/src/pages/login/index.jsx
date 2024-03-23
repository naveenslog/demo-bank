import React, { useState } from "react";
import "./styles.css"; // Make sure to create a corresponding CSS file
import { useNavigate } from "react-router-dom";
import { post } from "../../helpers/api/base";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  showFailureToastMessage,
  showSuccessToastMessage,
} from "../../helpers/others";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await post("/users/login/", formData);
      if (response.status === 200) {
        const { refresh, access } = response.data;
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        showSuccessToastMessage("Login Success !", true);
        setTimeout(() => navigate("/dashboard"), 1000);
      } else if (response.status === 401) {
        showFailureToastMessage("Incorrect Email / Password !");
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (error) {
      showFailureToastMessage("Incorrect Email / Password !");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData?.email}
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
            value={formData?.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Log in
        </button>
        <div className="login-footer">
          <a href="/forgot-password">Forgot password?</a>
          <a href="/register">Don't have an account? Sign Up</a>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
