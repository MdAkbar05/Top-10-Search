import React, { useState } from "react";
import "./InterfaceSection.scss";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import LatestData from "../LatestIData/LatestData";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";

const InterfaceSection = () => {
  const [liveSearch, setLiveSearch] = useState("");
  const [search, setSearch] = useState(false);
  const [searchbtn, setSearchBtn] = useState(true);
  const handleSearchPanel = () => {
    setSearch(true);
    setSearchBtn(false);
  };

  const SearchPanel = (
    <>
      <div className="col-sm-12 col-lg-6 m-auto searchPanel">
        <input
          type="text"
          className="form-control p-2 mt-2"
          placeholder="Search your Top-Ten "
          onChange={(e) => {
            setLiveSearch(e.target.value);
          }}
        />
      </div>
      <div className="d-flex w-30 justify-content-center search">
        <button
          onClick={() => {
            setSearch(false);
            setSearchBtn(true);
          }}
          className=" btn btn-primary rounded-circle mt-2 "
        >
          <CancelRoundedIcon />
        </button>
      </div>
    </>
  );
  return (
    <>
      <div className="container-fluid InterfaceSection" id="home">
        <div className="SearchCompany row">
          {/* <h5 className="minHeading ">Get ready to discover and be inspired</h5> */}
          <div className="col col-lg-6 col-md-6 col-sm-6 TextInfo">
            <div className=" heading text-dark">
              Get ready to discover and be inspired
            </div>
            <div className=" desc text-black">
              Welcome to the ultimate showcase of TOPTEN, where we present to
              you the definitive list of TOPTEN items, ideas, or experiences...
            </div>
            {searchbtn && (
              <div className="searchBtn">
                <div
                  className="btn btn-primary rounded"
                  onClick={handleSearchPanel}
                >
                  Search Top 10
                </div>
                <div className="btn btn-outline-primary mx-2 rounded">
                  <span className="mx-2">
                    <HowToRegRoundedIcon />
                  </span>
                  Registration
                </div>
              </div>
            )}
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-6 ">
            <div className="img mx-lg-4 me-md-2"></div>
          </div>
          {search && SearchPanel}
        </div>
      </div>
      <LatestData searchData={liveSearch} />
    </>
  );
};

export default InterfaceSection;
