import React from "react";
import { TechnologyData } from "./TechnologyData";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import "./Technology.scss";

const Technology = () => {
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
          {TechnologyData.map((data) => (
            <div className="col-lg-5 col-md-5 mx-auto my-3 card" key={data.id}>
              <div className="catagories-item">
                <img
                  className="rounded-circle"
                  src={data.imgPath}
                  alt=""
                  width={100}
                  height={100}
                />
                <h2 className="title text-danger">{data.title}</h2>
                <p className="desc">{data.desc}</p>
                <a href="#" className="btn btn-primary readMore">
                  <ReadMoreIcon size="4x" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
