import { LatestDatas } from "./FetchMoviesData";
import ViewComfyAltOutlinedIcon from "@mui/icons-material/ViewComfyAltOutlined";

// import Fetch from "./FetchMoviesData";
const LatestData = () => {
  return (
    <>
      <div className="container latestData" id="latestData">
        <div className="latestHeading">
          <h3 className="text-center p-3 heading">Explore Latest Contents</h3>
        </div>
        <div className="row">
          {LatestDatas.map((datas) => (
            <div className="col-lg-5 col-md-5 col-sm-12 mx-auto-md-2  LatestDataContainer">
              {console.log(datas.img)}
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
