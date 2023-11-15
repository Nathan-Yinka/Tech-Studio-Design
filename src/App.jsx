import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/authentication/Login";
import NewPassword from "./pages/authentication/NewPassword";
import PasswordReset from "./pages/authentication/PasswordReset";
import SignUp from "./pages/authentication/SignUp";
import LandingPage from "./pages/home/LandingPage";
import FindTalent from "./pages/talent/FindTalent";
import ExternalLayout from "./pages/Layouts/ExternalLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/new-password" element={<NewPassword />} />

          <Route element={<ExternalLayout/>}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/talent" element={<FindTalent />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
