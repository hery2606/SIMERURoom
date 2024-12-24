import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./user/pages/Home";
import Login from "./user/pages/Login";
import Dashboard from "./user/pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
