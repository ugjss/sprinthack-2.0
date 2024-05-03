import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import UserDetails from "./pages/UserDetails";
import Features from "./pages/Features";
import FindDoctor from "./pages/FindDoctor";
import Appointment from "./pages/Appointment";
import ApplyDoctor from "./pages/ApplyDoctor";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/features" element={<Features />} />
          <Route path="/finddoctor" element={<FindDoctor />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/applydoctor" element={<ApplyDoctor />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
