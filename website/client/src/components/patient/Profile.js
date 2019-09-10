import React,{Fragment,useContext,useEffect} from 'react'
import SideBar from '../layout/SideBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContext from '../../context/auth/authContext';
const Profile = () => {
  const authContext=useContext(AuthContext);

useEffect(()=>{
	authContext.loadUser();
	//eslint-disable-next-line
},[]);
    return (
        <Fragment>
      {/* Main content */}
      <div class="page-content">
        <SideBar/>
         
      <div className="content-wrapper">

        {/* Page header */}
        <div className="page-header page-header-light border-bottom-0">
          {/* Top breadcrumb line */}
          <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
            <div className="d-flex">
              <div className="breadcrumb">
                <a href="index.html" className="breadcrumb-item"><i className="icon-home2 mr-2" /> Home</a>
                <a href="user_pages_profile.html" className="breadcrumb-item">User pages</a>
                <span className="breadcrumb-item active">Profile</span>
              </div>
              <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more" /></a>
            </div>
            <div className="header-elements d-none">
              <div className="breadcrumb justify-content-center">
              </div>
            </div>
          </div>
      
        </div>
        {/* /page header */}
        {/* Content area */}
        <div className="content">
          {/* Inner container */}
          <div className="d-flex align-items-start flex-column flex-md-row">
          
              {/* </div> */}
              <div className="tab-pane" id="settings">
                {/* Profile info */}
                <div className="card">
                  <div className="card-header header-elements-inline">
                    <h5 className="card-title">Profile information</h5>
                    <div className="header-elements">
                      <div className="list-icons">
                        <a className="list-icons-item" data-action="collapse" />
                        <a className="list-icons-item" data-action="reload" />
                        <a className="list-icons-item" data-action="remove" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label>RecordId</label>
                            <input type="text" defaultValue="Eugene" className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label>Full name</label>
                            <input type="text" defaultValue="Kopyov" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-12">
                            <label>Address</label>
                            <input type="text" defaultValue="Ring street 12" className="form-control" />
                          </div>
                        
                        </div>
                      </div>
              
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-12">
                            <label>Email</label>
                            <input type="text" readOnly="readonly" defaultValue="eugene@kopyov.com" className="form-control" />
                          </div>
                        
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label>Phone #</label>
                            <input type="text" defaultValue="+99-99-9999-9999" className="form-control" />
                            <span className="form-text text-muted">+99-99-9999-9999</span>
                          </div>
                          <div className="col-md-6">
                            <label>Upload profile image</label>
                            <input type="file" className="form-input-styled"  />
                            <span className="form-text text-muted">Accepted formats: gif, png, jpg. Max file size 2Mb</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label>Phone #</label>
                            <input type="text" defaultValue="+99-99-9999-9999" className="form-control" />
                            <span className="form-text text-muted">+99-99-9999-9999</span>
                          </div>
                          <div className="col-md-6">
                            <label>Emergency Phone #</label>
                            <input type="text" defaultValue="+99-99-9999-9999" className="form-control" />
                            <span className="form-text text-muted">+99-99-9999-9999</span>
                          </div>
                         
                        </div>
                      </div>
                      <div className="text-right">
                        <button type="submit" className="btn btn-primary">Save changes</button>
                      </div>
                    </form>
                  </div>
                </div>
             
              </div>
            {/* /left content */}
            {/* Right sidebar component */}
            <div className="sidebar sidebar-light bg-transparent sidebar-component sidebar-component-right wmin-300 border-0 shadow-0 order-1 order-md-2 sidebar-expand-md">
              {/* Sidebar content */}
              <div className="sidebar-content">
                {/* User card */}
                <div className="card">
                  <div className="card-body text-center">
                    <div className="card-img-actions d-inline-block mb-3">
                      <img className="img-fluid rounded-circle" src="../../../../global_assets/images/demo/users/face11.jpg" width={170} height={170} alt="" />
                      <div className="card-img-actions-overlay card-img rounded-circle">
                        <a href="#" className="btn btn-outline bg-white text-white border-white border-2 btn-icon rounded-round">
                          <i className="icon-plus3" />
                        </a>
                        <a href="user_pages_profile.html" className="btn btn-outline bg-white text-white border-white border-2 btn-icon rounded-round ml-2">
                          <i className="icon-link" />
                        </a>
                      </div>
                    </div>
                    <h6 className="font-weight-semibold mb-0">Hanna Dorman</h6>
                    <span className="d-block text-muted">UX/UI designer</span>
                    <div className="list-icons list-icons-extended mt-3">
                      {/* <a href="#" className="list-icons-item" data-popup="tooltip" title="Google Drive" data-container="body"><i className="icon-google-drive" /></a> */}
                      <a href="#" className="list-icons-item" data-popup="tooltip" title="Twitter" data-container="body"><i className="icon-twitter" /></a>
                      {/* <a href="#" className="list-icons-item" data-popup="tooltip" title="Github" data-container="body"><i className="icon-github" /></a> */}
                    </div>
                  </div>
                </div>
                {/* /user card */}
                {/* Navigation */}
                <div className="card">
                  <div className="card-header bg-transparent header-elements-inline">
                    <span className="card-title font-weight-semibold">Navigation</span>
                    <div className="header-elements">
                      <div className="list-icons">
                        <a className="list-icons-item" data-action="collapse" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <ul className="nav nav-sidebar my-2">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="icon-user" />
                          My profile
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="icon-cash3" />
                          Balance
                          <span className="text-muted font-size-sm font-weight-normal ml-auto">$1,430</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="icon-tree7" />
                          Connections
                          <span className="badge bg-danger badge-pill ml-auto">29</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="icon-users" />
                          Friends
                        </a>
                      </li>
                      <li className="nav-item-divider" />
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="icon-calendar3" />
                          Events
                          <span className="badge bg-teal-400 badge-pill ml-auto">48</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="icon-cog3" />
                          Account settings
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              
              </div>
              {/* /sidebar content */}
            </div>
            {/* /right sidebar component */}
          </div>
          {/* /inner container */}
        </div>
        {/* /content area */}
      </div>
  </div>
        </Fragment>
    )
}

export default Profile





