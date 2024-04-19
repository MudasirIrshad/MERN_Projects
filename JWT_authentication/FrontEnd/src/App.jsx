import React from "react";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "../src/App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
