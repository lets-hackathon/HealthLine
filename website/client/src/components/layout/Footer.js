import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer
        // className="page-footer font-small blue pt-5 footerhack"
        // style={{marginTop:"0px",paddingTop:"0px"}}
        // style={{ marginBottom: "0px" }}
        
      >
        <div
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
                href="http://themeforest.net/user/Kopyov"
                target="_blank"
              >
                NSUT HH
              </a>
            </span>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
