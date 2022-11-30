import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const login = () => {
  return (
    <div className="form">
      <input required className="name" type="text" placeholder="username" />
      <input
        className="passsword"
        type="password"
        placeholder="password"
        required
      />
      <button className="btn">
        <Link to="/home" className="link">
          Login
        </Link>
      </button>
    </div>
  );
};

export default login;
