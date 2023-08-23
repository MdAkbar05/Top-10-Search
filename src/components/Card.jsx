import React from "react";
import "./../pages/Chats/Ai.scss";
const Card = ({ title, desc, link, img }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card">
        <div className="cardImg">
          <img className="card-img-top" src={img} alt="Card image" />
        </div>
        <div className="card-body d-flex flex-column justify-content-center text-center ">
          <h4 className="card-title ">{title}</h4>
          <p className="card-text ">{desc}</p>
          <a href={link} className="btn btn-primary ">
            Browse
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
