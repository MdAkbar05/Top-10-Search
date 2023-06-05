import React from "react";
import { useState } from "react";
const FAQ = ({ title, anser }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className="faqItem">
      <div>
        <h2>{title}</h2>
        <button
          className="btn btn-outline-info"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && <p>{anser}</p>}
    </article>
  );
};

export default FAQ;
