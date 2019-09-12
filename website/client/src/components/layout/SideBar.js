import React, { Fragment } from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <Fragment>
      <div
        id = "side"
        className="sidebar sidebar-dark sidebar-main sidebar-expand-md"
      >
        {/* Sidebar mobile toggler */}
        <div className="sidebar-mobile-toggler text-center">
          <a href="#" className="sidebar-mobile-main-toggle">
            <i className="icon-arrow-left8" />
          </a>
          Navigation
          <a href="#" className="sidebar-mobile-expand">
            <i className="icon-screen-full" />
            <i className="icon-screen-normal" />
          </a>
        </div>
        {/* /sidebar mobile toggler */}
        {/* Sidebar content */}
        <div className="sidebar-content">
          {/* User menu */}
          <div className="sidebar-user">
            <div className="card-body">
              <div className="media">
                <div className="mr-3">
                  <a href="#">
                    <img
                      src=" global_assets/images/demo/users/face11.jpg"
                      width={38}
                      height={38}
                      className="rounded-circle"
                      alt=""
                    />
                  </a>
                </div>
                <div className="media-body">
                  <div className="media-title font-weight-semibold">
                    Kanishk Gupta
                  </div>
                  <div className="font-size-xs opacity-50">
                    <i className="icon-pin font-size-sm" /> Rajouri, Delhi
                  </div>
                </div>
                <div className="ml-3 align-self-center">
                  <a href="#" className="text-white">
                    <i className="icon-cog3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /user menu */}
          {/* Main navigation */}
          <div className="card card-sidebar-mobile">
            <ul className="nav nav-sidebar" data-nav-type="accordion">
              {/* Main */}
              <li className="nav-item-header">
                <div className="text-uppercase font-size-xs line-height-xs">
                  Main
                </div>{" "}
                <i className="icon-menu" title="Main" />
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <i className="icon-home4" />
                  <span>My Profile</span>
                </Link>
              </li>

              <li className="nav-item nav-item-submenu">
                {/* <a href="#" className="nav-link"><i className="icon-copy" /> <span>My Reminders</span></a> */}
                {/* <ul className="nav nav-group-sub" data-submenu-title="Layouts"> */}
                <li className="nav-item">
                  <Link to="/reminderform" className="nav-link">
                    Set Reminders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reminder" className="nav-link">
                    Show My Reminders
                  </Link>
                </li>
                {/* </ul> */}
              </li>
              <li className="nav-item nav-item-submenu">
                {/* <a href="#" className="nav-link"><i className="icon-color-sampler" /> <span>My Records</span></a> */}
                {/* <ul className="nav nav-group-sub" data-submenu-title="Themes"> */}
                <li className="nav-item">
                  <Link to="/recordform" className="nav-link ">
                    Create Personal Record
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Show my Personal record
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Doctor Reports
                  </a>
                </li>
                {/* </ul> */}
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="icon-width" /> <span>Symptom Tracker</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/socialpresence" className="nav-link">
                  <i className="icon-width" />{" "}
                  <span>Social Media Analysis</span>
                </Link>
              </li>
              {/* /main */}
              {/* Forms */}
              {/* /forms */}
              {/* Components */}
              {/* /components */}
              {/* Layout */}

              {/* /layout */}
              {/* Data visualization */}

              {/* /page kits */}
            </ul>
          </div>
          {/* /main navigation */}
        </div>
        {/* /sidebar content */}
      </div>
    </Fragment>
  );
};

export default SideBar;
