import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "pages/signIn";
import SignUp from "pages/signUp";
import TodoList from "pages/todoList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin"></Navigate>}></Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/*" element={<Navigate to="/signin"></Navigate>}></Route>
    </Routes>
  );
}

export default App;
