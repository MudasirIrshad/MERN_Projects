import React, { useEffect } from "react";
import UserLogin from "./components/UserLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SingIn";
import SignUp from "./components/SignUp";
import AddCourses from "./components/AddCourses";
import axios from "axios";
import Home from "./Home";
function App() {
  return (
    <>
      <UserLogin />
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addCourses" element={<AddCourses/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
