import React from "react";
import Register from "./pages/Register";
import "./Assets/main.css";
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login";
import Suppliers from './pages/Suppliers';
import Clients from "./pages/Clients";

// Pictures
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </>
  );
}

export default App;
