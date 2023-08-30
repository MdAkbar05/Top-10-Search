import React, { useState } from "react";
import "./LatestData.scss";
import { LatestDatas } from "./FetchMoviesData";
import ViewComfyAltOutlinedIcon from "@mui/icons-material/ViewComfyAltOutlined";
import { Navigate } from "react-router-dom";

// import Fetch from "./FetchMoviesData";
const LatestData = (props) => {
  const [title, setTitle] = useState("");
  const { searchData } = props;
  console.log(searchData);

  if (title === "Top Ten AI Tool") {
    console.log(title);
    return <Navigate to="/chatAi" replace />;
  }
  if (title === "Top Ten Movies (EN)") {
    console.log(title);
    return <Navigate to="/" replace />;
  }
  if (title === "Top Ten Tour Place") {
    console.log(title);
    return <Navigate to="/travel" replace />;
  }
  if (title === "Top Ten Technology") {
    console.log(title);
    return <Navigate to="/technology" replace />;
  }
  return (
    <>
      <div className="container latestData" id="latestData">
        <div className="latestHeading">
          <h3 className="text-center p-3 heading">Explore Top Trendings</h3>
        </div>
        <div className="row">
          {LatestDatas.filter((datas) => {
            return searchData.toLowerCase() === ""
              ? datas
              : datas.title.toLowerCase().includes(searchData);
          }).map((datas) => (
            <div
              className="col-lg-5 col-md-5 col-sm-12 mx-auto-md-2 px-4  LatestDataContainer"
              onClick={() => setTitle(datas.title)}
            >
              <img
                className="my-2"
                src={datas.img}
                height={100}
                width={100}
                alt=""
              />
              <div className="title h3 ">{datas.title}</div>
              <p className="desc">{datas.desc} </p>
              <span>
                <ViewComfyAltOutlinedIcon
                  className="ViewComfyAltOutlinedIcon"
                  Size="1x"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestData;
