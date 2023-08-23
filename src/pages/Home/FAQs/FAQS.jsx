import React from "react";
import { faqData } from "./FaqData";
import FAQ from "./FAQ";
import "./faqs.scss";
console.log(faqData);
const FAQS = () => {
  return (
    <div className="container FAQS">
      <h1 className="text-center">FAQ ! </h1>
      {faqData.map((data) => (
        <FAQ key={data.id} {...data} />
      ))}
    </div>
  );
};

export default FAQS;
