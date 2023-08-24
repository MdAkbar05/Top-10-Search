import React from "react";
import LogoText from "./../Navbar/img/LogoText.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer bg-dark" id="footer">
      <div className="row">
        <div className="footerArea col col-sm-10 col-md-6 col-lg-4 m-auto text-light text-center">
          <img className="mx-2" src={LogoText} alt="" width={100} height={25} />
          <a href="#" className="footer__link text-light d-block">
            About
          </a>
          <a href="#" className="footer__link text-light d-block">
            Contact
          </a>
          <a href="#" className="footer__link text-light d-block">
            Terms of Service
          </a>
          <a href="#" className="footer__link text-light d-block">
            Privacy Policy
          </a>
        </div>

        <div className=" quickLink col col-sm-10 col-md-6 col-lg-4 m-auto text-light text-center">
          <h4>Quick link</h4>
          <div className="text-left">
            <a className="link" href="#">
              FAQ
            </a>
            <a className="link" href="#">
              Latest data
            </a>
            <a className="link" href="#">
              Catagories
            </a>
            <a className="link" href="#">
              Advertise
            </a>
            <a className="link" href="#">
              Sitemap
            </a>
            <a className="link" href="#">
              Trending
            </a>
            <a className="link" href="#">
              FAQ
            </a>
          </div>
        </div>
        <div className="EmailSend col col-sm-10 col-md-6 col-lg-4 m-auto text-light text-center">
          <h4>Contact with us</h4>
          <div className="my-2">
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Enter Your email"
            />
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              id="msg"
              placeholder="Write Your Opinion"
            />
          </div>
          <input
            className="btn btn-primary mt-2 w-100"
            type="submit"
            value="Send"
          />
        </div>
        <p className="footer__text text-light">
          © 2023 | DevAkbar05 Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
