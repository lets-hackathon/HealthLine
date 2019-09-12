import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
        <div
              id="foot" 

          className="navbar navbar-expand-lg navbar-dark"
          // style={{ marginBottom: "0px" }}
        >
          <div className="text-center d-lg-none w-100">
            <button
              type="button"
              className="navbar-toggler dropdown-toggle"
              data-toggle="collapse"
              data-target="#navbar-footer"
            >
              <i className="icon-unfold mr-2" />
              Footer
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-footer">
            <span className="navbar-text">
              © 2019 <a href="#">Healthline</a> by{" "}
              <a
                className="col-lg-4 ml-auto"
                href="https://www.github.com/lets-hackathon"
                target="_blank"
              >
                NSUT HH
              </a>
            </span>
          </div>
        </div>
    </Fragment>
  );
};

export default Footer;
