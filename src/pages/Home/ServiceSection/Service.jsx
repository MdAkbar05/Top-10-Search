import React from "react";
import { sectionData } from "./SectionData";
import "./Service.scss";
const Service = () => {
  return (
    <>
      <section className="services">
        <div className="container Services">
          <h2 className="section-heading py-4 ">Our Services</h2>
          <div className="row">
            {sectionData.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="service-item">
                  <i className={service.iconName}></i>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
