import React from "react";
import { TechnologyData } from "./TechnologyData";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../FooterSection/Footer";

const Technology = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="technology" id="technology">
        <div className="imgInterface">
          <h3 className="text-center heading">
            Explore Top Ten Technology in the world right now
          </h3>
        </div>

        <div className="row mainSection">
          <h3 className="mainDesc mt-2 p-2">
            Explore the latest gadgets, smartphones, laptops, apps, and gaming
            consoles with expert recommendations and reviews.
          </h3>
          {TechnologyData.map((data) => (
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

export default Technology;
