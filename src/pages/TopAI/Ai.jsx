import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import "./Ai.scss";
const Ai = () => {
  const [TopAIdata, setTopAIdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users/getAItopten").then((res) => {
      setTopAIdata(res.data.payload);
    });
  }, []);
  return (
    <>
      <div className="Top-Ai container">
        <h2 className="text-center text-danger mt-2">
          Top <span className="text-info">Artificial Intelligence</span>
        </h2>
        <div className="row cardMain">
          {TopAIdata.map((data, index) => (
            <Card
              title={data.title}
              desc={data.description}
              img={data.img}
              link={data.src}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Ai;
