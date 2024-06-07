import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
export default function Navbar() {
  return (
    <Router>
        <Link to={"/signup"}><button>Signup</button></Link>
        <Link to={"/login"}><button>Login</button></Link>

        <Routes>
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/login"} element={<Login />} />
        </Routes>
    </Router>
  )
}
