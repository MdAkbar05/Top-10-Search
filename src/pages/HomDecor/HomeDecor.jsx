import React from "react";
import { HomeDecorData } from "./HomeDecorData";
import "./HomeDecor.scss";

const HomeDecor = () => {
  return (
    <div className="container">
      <div className="HomeDecor mt-3" id="HomeDecor">
        <div className="imgInterface">
          <h3 className="text-center heading">
            Explore Top Ten Life-Style for better life !
          </h3>
        </div>

        <div className="row mainSection">
          <h3 className="mainDesc mt-2 p-2">
            Discover captivating destinations, find the best hotels, and get
            budget travel tips to plan your dream vacation.
          </h3>
          {HomeDecorData.map((data) => (
            <div className="col-lg-5 col-md-5 mx-auto my-3 card" key={data.id}>
              <div className="catagories-item">
                <img src={data.imgPath} alt="" width={100} />
                <h2 className="title">{data.title}</h2>
                <p className="desc">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDecor;
