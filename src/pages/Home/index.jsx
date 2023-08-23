import React from "react";

import InterfaceSection from "./InterfaceSection/InterfaceSection";

import Service from "./ServiceSection/Service";
import FAQS from "./FAQs/FAQS";

const Home = () => {
  return (
    <>
      <InterfaceSection />

      <Service />
      <FAQS />
    </>
  );
};

export default Home;
