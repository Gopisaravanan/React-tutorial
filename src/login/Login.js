import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [input, setInput] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="form">
      <input
        required
        className="name"
        type="text"
        placeholder="username"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <input
        className="passsword"
        type="text"
        placeholder="password"
        value={pass}
        onInput={(e) => setPass(e.target.value)}
      />

      <Link to={`/${input}/${pass}`}>
        <button className="btn">login</button>
      </Link>
      <br />
      <br />

      <Link to="/home" className="data">
        <button className="btn2">To view Props & Context data</button>
      </Link>
    </div>
  );
};

export default Login;
