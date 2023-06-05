import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InterfaceSection from "./components/InterfaceSection/InterfaceSection";
import Login from "./components/LoginRegister/Login";
import Navbar from "./components//Navbar/Navbar";
import FetchData from "./components/useFetch/FetchData";
import Register from "./components/LoginRegister/Register";
import LatestData from "./components/LatestIData/LatestData";
import Footer from "./components/FooterSection/Footer";
import FAQS from "./components/FAQs/FAQS";
import Service from "./components/ServiceSection/Service";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <InterfaceSection />
      <LatestData />
      <Service />
      <FAQS />
      <Footer />
    </div>
  );
};

export default App;
