import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/authentication/Login";
import NewPassword from "./pages/authentication/NewPassword";
import PasswordReset from "./pages/authentication/PasswordReset"
import SignUp from  "./pages/authentication/SignUp"
import Navbar from "./components/Navbar";
import LandingPage from "./pages/home/LandingPage";

function App() {
  
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
