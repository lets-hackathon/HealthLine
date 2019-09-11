import React from "react";

const Landing = () => {
  return (
    <div>
      <div>
        <img
          src="./Landing-img.jpg"
          style={{ width: "100%", opacity: "0.75" }}
          alt=""
        />
        <div className="carousel-caption">
          <h1 className="display-1">HealthLine</h1>
          <h3>Your Smart Health Assistant</h3>
          <button type="button" className="btn btn-outline-light btn-lg">
            Login
          </button>
          <button type="button" className="btn btn-primary btn-lg">
            Register
          </button>
        </div>
      </div>
      {/*- Jumbotron */}
      <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-cl-10">
            <p className="lead" />
            An Artificial Intelligence Model for your Social Media Presence and
            Doctor Patient Utilities
            <p />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-cl-2">
            <a href>
              <button className="btn btn-outline-secondary btn-lg">
                About Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
