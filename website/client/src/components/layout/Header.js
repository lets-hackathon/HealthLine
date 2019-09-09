import React, { Fragment,useContext} from "react";
import {Link,Redirect} from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

const Header = () => {
const authContext=useContext(AuthContext);
const {isAuthenticated,logout,user}=authContext;
const onLogout=()=>{
    logout();
    return <Redirect to='/login' />

    
  }
  
const guestLink=(
<Fragment>
<div className="collapse navbar-collapse" id="navbar-mobile">

          <ul className="navbar-nav">
            
           <li className="nav-item"style={{marginRight:"40px"}}><Link to="/register">Sign Up</Link></li>
           
           <li className="nav-item" style={{marginLeft:"20px"}}><Link to="/login">Login</Link></li>

          </ul>
        </div>
</Fragment>
);

const authLink=(
  <Fragment>
    <div className="d-md-none">
          <button
            ton
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-mobile"
          >
            <i className="icon-tree5" />
          </button>
          <button
            className="navbar-toggler sidebar-mobile-main-toggle"
            type="button"
          >
            <i className="icon-paragraph-justify3" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbar-mobile">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#"
                className="navbar-nav-link sidebar-control sidebar-main-toggle d-none d-md-block"
              >
                <i className="icon-paragraph-justify3" />
              </a>
            </li>

          </ul>
          <span className="badge  bg-success ml-md-3 mr-md-auto">{user && user.role}</span>

          <ul className="navbar-nav">
            
            <li className="nav-item dropdown dropdown-user">
              <a
                href="#"
                className="navbar-nav-link d-flex align-items-center dropdown-toggle"
                data-toggle="dropdown"
              >
                <img
                  src=" global_assets/images/demo/users/face11.jpg"
                  className="rounded-circle mr-2"
                  height={34}
                  alt=""
                />
                <span>{ user && user.name}</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  <i className="icon-user-plus" /> My profile
                </a>
                {/* <a href="#" className="dropdown-item">
                  <i className="icon-coins" /> My balance
                </a> */}
                <a href="#" className="dropdown-item">
                  <i className="icon-comment-discussion" /> Messages{" "}
                  <span className="badge badge-pill bg-blue ml-auto">58</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="icon-cog5" /> Account settings
                </a>
                <a href="#" onClick={onLogout} className="dropdown-item">
                  <i className="icon-switch2" /> Logout
                </a>
              </div>
            </li>
          </ul>
        </div>

  </Fragment>

);

return (
    <Fragment>
      <div className="navbar navbar-expand-md navbar-dark">
        <div className="">
          <a href="index.html" className="d-inline-block">
            <img
              src="./logo.png"
              style={{ height: "25%", width: "50%", margin: "6% auto" }}
              alt="LOGO"
            />
          </a>
        </div>
{isAuthenticated?authLink:guestLink}
        

        
      </div>
    </Fragment>
  );
};

export default Header;