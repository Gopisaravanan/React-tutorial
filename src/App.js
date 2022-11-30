import React from "react";
import Main from "./home";
import Login from "./login/Login";
import User from "./home/user/User";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Main />}></Route>
      <Route path="/abc/:id/:id2" element={<User />}></Route>
    </Routes>
  );
};

export default App;
