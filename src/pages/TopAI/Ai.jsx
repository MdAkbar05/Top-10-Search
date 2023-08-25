import React, { useState } from "react";
import Card from "../../components/Card";
import { AI_Data } from "./AiData";
import "./Ai.scss";
const Ai = () => {
  return (
    <>
      <div className="Top-Ai container">
        <h2 className="text-center text-danger mt-2">
          Top <span className="text-primary">Artificial Intelligence</span>
        </h2>
        <div className="row">
          {AI_Data.map((data, index) => (
            <Card
              title={data.title}
              desc={data.desc}
              link={data.link}
              img={data.img}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Ai;
