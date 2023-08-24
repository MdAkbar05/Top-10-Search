import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Technology from "../pages/Technology/Technology";
import Travel from "../pages/Travel/Travel";
import HealthFitness from "../pages/HealthFitness/HealthFitness";
import HomeDecor from "../pages/HomDecor/HomeDecor";
import Register from "../components/LoginRegister/Register";
import Login from "../components/LoginRegister/Login";
import Navbar from "../layouts/Navbar/Navbar";
import Home from "../pages/Home";
import Footer from "../layouts/FooterSection/Footer";
import Ai from "../pages/TopAI/Ai";
import ScrollToTop from "../components/ScrollToTop";
import Topbar from "../layouts/TopBar/Topbar";

const Index = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="technology" element={<Technology />}></Route>
        <Route path="travel" element={<Travel />}></Route>
        <Route path="health" element={<HealthFitness />}></Route>
        <Route path="homeDecor" element={<HomeDecor />}></Route>
        <Route path="signup" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="chatAi" element={<Ai />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
