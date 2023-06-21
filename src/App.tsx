import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import TodoList from "pages/TodoList";

function App() {
  // let isAuthorized = sessionStorage.getItem("isAuthorized");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin"></Navigate>}></Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/*" element={<Navigate to="/signin"></Navigate>}></Route>
    </Routes>

    // <div>{!isAuthorized ? <Redirect to="/login" /> : <Redirect to="/" />}</div>
  );
}

export default App;
