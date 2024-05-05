import React, { useEffect } from "react";
import UserLogin from "./components/UserLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/AdminPortal/SingIn";
import SignUp from "./components/AdminPortal/SignUp";
import AddCourses from "./components/AdminPortal/AddCourses";
import axios from "axios";
import Home from "./components/AdminPortal/Home";
import CourseDetail from "./components/AdminPortal/CourseDetail";
import SingleCourse from "./components/AdminPortal/SingleCourse";
function App() {
  return (
    <>
      <UserLogin />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addCourses" element={<AddCourses />} />
          <Route path="/courseDetail" element={<CourseDetail />} />
          <Route path="/courseEdit/:id" element={<SingleCourse />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
