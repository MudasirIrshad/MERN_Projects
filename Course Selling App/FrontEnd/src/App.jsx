import React from "react";
import UserLogin from "./components/UserLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SingIn";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
      <UserLogin />
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
