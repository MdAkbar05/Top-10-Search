import React, { useState, useEffect } from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import axios from "axios";
import "./Technology.scss";
import Card from "../../components/Card/Card";

const Technology = () => {
  const [Technologys, setTechnologys] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users/getTechnologys").then((res) => {
      setTechnologys(res.data.payload);
    });
  }, []);
  return (
    <div className="container">
      <div className="technology mt-3" id="technology">
        <div className="imgInterface">
          <h3 className="text-center heading">
            Explore Top Ten Technology in the world right now
          </h3>
          <a className="btn btn-primary" href="#mainSection">
            Scroll Down
          </a>
        </div>

        <div className="row mainSection" id="mainSection">
          <h3 className="mainDesc p-2">
            Explore the latest gadgets, smartphones, laptops, apps, and gaming
            consoles with expert recommendations and reviews.
          </h3>
          <div className="row cardMain">
            {Technologys.map((data) => (
              <Card
                key={data._id}
                title={data.title}
                desc={data.description}
                img={data.img}
                link={data.src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
