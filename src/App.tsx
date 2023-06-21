import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "pages/Signin";

function App() {
  // let isAuthorized = sessionStorage.getItem("isAuthorized");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin"></Navigate>}></Route>
      <Route path="/signin" element={<SignIn />} />
    </Routes>

    // <div>{!isAuthorized ? <Redirect to="/login" /> : <Redirect to="/" />}</div>
  );
}

export default App;
