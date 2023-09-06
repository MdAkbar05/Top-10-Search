import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoIcon from "./img/LogoIcon.png";
import LogoText from "./img/LogoText.png";
import axios from "axios";
import { useEffect } from "react";
import "./Navbar.scss";

const Navbar = (props) => {
  const [handleProfile, setHandleProfile] = useState(false);
  useEffect(() => {
    axios.post("http://localhost:3000/login").then((res) => {
      if (res.data) {
        console.log(res.data);
        setHandleProfile(res.data.data);
      }
    });
  }, []);
  const profile = (
    <>
      <img
        class="rounded-circle mx-2"
        alt="avatar1"
        src="https://img.freepik.com/free-icon/user_318-159711.jpg?w=2000"
        width={"20px"}
        height={"20ox"}
      />
      <span> MD ...</span>
      <Link to="/login" className="btn btn-danger mx-2">
        Logout
      </Link>
    </>
  );
  return (
    <>
      <div className="navbar navbar-expand-lg fixed-top sticky-top" id="navbar">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img src={LogoIcon} alt="" width={50} height={25} />
            <img
              className="mx-2"
              src={LogoText}
              alt=""
              width={100}
              height={25}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a href="#latestData" className="nav-link">
                  Trending
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/technology">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/chatAi">
                      Chat-with-AI
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/travel">
                      Travel
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/health">
                      Health and Fitness
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/homeDecor">
                      Home and Decor
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Books and Literature
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fashion and Style
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Movies and Entertainment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Personal Development
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="Add" className="nav-link">
                  Add-Top10
                </Link>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#footer" className="nav-link">
                  About Us
                </a>
              </li>
            </ul>
            {handleProfile ? (
              profile
            ) : (
              <Link className="btn btn-outline-primary nav-item" to="/signup">
                Sign-Up
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
