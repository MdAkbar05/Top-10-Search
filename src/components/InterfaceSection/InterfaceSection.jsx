import React, { useState } from "react";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";

const SearchPanel = (
  <>
    <div className="col-sm-12 col-lg-6 m-auto">
      <input
        type="text"
        className="form-control p-2 mt-2"
        placeholder="Search your Top-Ten "
      />
    </div>
    <div className="d-flex w-30 justify-content-center search">
      <button className=" btn btn-primary rounded-circle mt-2 ">
        <TravelExploreOutlinedIcon />
      </button>
    </div>
  </>
);
const InterfaceSection = () => {
  const [search, setSearch] = useState(false);
  const [searchbtn, setSearchBtn] = useState(true);

  const handleSearchPanel = () => {
    setSearch(true);
    setSearchBtn(false);
  };
  return (
    <>
      <div className="container-fluid InterfaceSection" id="home">
        <div className="SearchCompany m-auto text-light">
          {/* <h5 className="minHeading ">Get ready to discover and be inspired</h5> */}
          <div className=" heading">Get ready to discover and be inspired</div>
          <div className=" desc">
            Welcome to the ultimate showcase of TOPTEN, where we present to you
            the definitive list of TOPTEN items, ideas, or experiences...
          </div>
          {searchbtn && (
            <div
              className="d-flex w-30 justify-content-center search"
              onClick={handleSearchPanel}
            >
              <div className=" btn btn-primary rounded-pill">Search Top 10</div>
              {}
            </div>
          )}
          {search && SearchPanel}
        </div>
      </div>
    </>
  );
};

export default InterfaceSection;
