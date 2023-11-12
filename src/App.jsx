import React from "react"
import Login from "./pages/login/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
