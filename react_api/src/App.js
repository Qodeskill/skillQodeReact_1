import React from "react";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Index from "./component/Index";
import Register from "./component/Register";
import Login from "./component/Login";
import Error from "./component/Error";

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route component={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default App;
