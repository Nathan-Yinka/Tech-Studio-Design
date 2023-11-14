import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/authentication/signup/SignUp";
import Login from "./pages/authentication/login/Login";
import PasswordReset from "./pages/authentication/passwordResetPage/PasswordReset";


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password-reset" element={<PasswordReset />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
