import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./MyStyle.scss";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Technology from "./components/Catagories/Technology/Technology";
import Travel from "./components/Catagories/Travel/Travel";
import HealthFitness from "./components/Catagories/HealthFitness/HealthFitness";
import HomeDecor from "./components/Catagories/HomDecor/HomeDecor";
import Register from "./components/LoginRegister/Register";
import Login from "./components/LoginRegister/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/ToptenViewer" element={<App />}></Route>
        <Route path="technology" element={<Technology />}></Route>
        <Route path="travel" element={<Travel />}></Route>
        <Route path="health" element={<HealthFitness />}></Route>
        <Route path="homeDecor" element={<HomeDecor />}></Route>
        <Route path="signup" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
