import React, { useState } from "react";
import Card from "../../components/Card";
import { AI_Data } from "./AiData";

const Ai = () => {
  return (
    <>
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
    </>
  );
};

export default Ai;
