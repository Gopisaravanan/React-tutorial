import React from "react";
import Main from "./home";
import Login from "./login/Login";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Main />}></Route>
    </Routes>
  );
};

export default App;
