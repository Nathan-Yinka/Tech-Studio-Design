import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/authentication/signup/SignUp";
import Login from "./pages/authentication/login/Login";


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
