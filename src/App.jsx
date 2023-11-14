import React from "react"
import Login from "./pages/login/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";

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
