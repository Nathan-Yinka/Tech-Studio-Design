import React from "react";
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import Login from "./pages/authentication/Login";
import NewPassword from "./pages/authentication/NewPassword";
import PasswordReset from "./pages/authentication/PasswordReset";
import SignUp from "./pages/authentication/SignUp";
import LandingPage from "./pages/home/LandingPage";
import FindTalent from "./pages/talent/FindTalent";
import ExternalLayout from "./pages/Layouts/ExternalLayout";
import JobPoster from "./pages/talent/JobPoster";
import {AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/job-poster" element={<JobPoster />} />

          <Route element={<ExternalLayout/>}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/talent" element={<FindTalent />} />
          </Route>
        </Routes>
        </AnimatePresence>
    </>
  );
}

export default App;
