import React from "react";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="row text-center">
      <div className="col col-lg-6 col-sm-12">
        <span>
          <ForwardToInboxIcon />
        </span>
        <span className="px-2">samratakbar667466@gmail.com</span>
        <span className="px-1">
          <CallIcon />
        </span>
        <span>+8801879808105</span>
      </div>
      <div className="co col-lg-6 col-sm-12">
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <InstagramIcon />
        </a>
        <a href="#">
          <GitHubIcon />
        </a>
        <a href="#">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
