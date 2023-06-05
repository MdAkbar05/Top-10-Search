import React from "react";
import { HomeDecorData } from "./HomeDecorData";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../FooterSection/Footer";

const HomeDecor = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="HomeDecor" id="HomeDecor">
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
      <Footer />
    </div>
  );
};

export default HomeDecor;
