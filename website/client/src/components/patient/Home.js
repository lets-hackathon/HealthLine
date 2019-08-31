import React,{Fragment} from 'react'
import SideBar from '../layout/SideBar'
const Home = () => {
    return (
        <Fragment>
           
      <div>
      
        {/* /main navbar */}
        {/* Page content */}
        <div className="page-content">
          {/* Main sidebar */}
          <SideBar /> 
          {/* /main sidebar */}
          {/* Main content */}
          <div className="content-wrapper">
            {/* Page header */}
            <div className="page-header page-header-light">
              <div className="page-header-content header-elements-md-inline">
                <div className="page-title d-flex">
                  <h4><i className="icon-arrow-left52 mr-2" /> <span className="font-weight-semibold">Home</span> - Dashboard</h4>
                  <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more" /></a>
                </div>
                <div className="header-elements d-none">
                  <div className="d-flex justify-content-center">
                    <a href="#" className="btn btn-link btn-float text-default"><i className="icon-bars-alt text-primary" /><span>Statistics</span></a>
                    <a href="#" className="btn btn-link btn-float text-default"><i className="icon-calculator text-primary" /> <span>Invoices</span></a>
                    <a href="#" className="btn btn-link btn-float text-default"><i className="icon-calendar5 text-primary" /> <span>Schedule</span></a>
                  </div>
                </div>
              </div>
              <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
                <div className="d-flex">
                  <div className="breadcrumb">
                    <a href="index.html" className="breadcrumb-item"><i className="icon-home2 mr-2" /> Home</a>
                    <span className="breadcrumb-item active">Dashboard</span>
                  </div>
                  <a href="#" className="header-elements-toggle text-default d-md-none"><i className="icon-more" /></a>
                </div>
                <div className="header-elements d-none">
                  <div className="breadcrumb justify-content-center">
                    <a href="#" className="breadcrumb-elements-item">
                      <i className="icon-comment-discussion mr-2" />
                      Support
                    </a>
                    <div className="breadcrumb-elements-item dropdown p-0">
                      <a href="#" className="breadcrumb-elements-item dropdown-toggle" data-toggle="dropdown">
                        <i className="icon-gear mr-2" />
                        Settings
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a href="#" className="dropdown-item"><i className="icon-user-lock" /> Account security</a>
                        <a href="#" className="dropdown-item"><i className="icon-statistics" /> Analytics</a>
                        <a href="#" className="dropdown-item"><i className="icon-accessibility" /> Accessibility</a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item"><i className="icon-gear" /> All settings</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /page header */}
            {/* Content area */}
            <div className="content">
              {/* Main charts */}
              <div className="row">
                <div className="col-xl-7">
                  {/* Traffic sources */}
                  <div className="card">
                    <div className="card-header header-elements-inline">
                      <h6 className="card-title">Traffic sources</h6>
                      <div className="header-elements">
                        <div className="form-check form-check-right form-check-switchery form-check-switchery-sm">
                          <label className="form-check-label">
                            Live update:
                            <input type="checkbox" className="form-input-switchery" defaultChecked data-fouc />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="card-body py-0">
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <a href="#" className="btn bg-transparent border-teal text-teal rounded-round border-2 btn-icon mr-3">
                              <i className="icon-plus3" />
                            </a>
                            <div>
                              <div className="font-weight-semibold">New visitors</div>
                              <span className="text-muted">2,349 avg</span>
                            </div>
                          </div>
                          <div className="w-75 mx-auto mb-3" id="new-visitors" />
                        </div>
                        <div className="col-sm-4">
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <a href="#" className="btn bg-transparent border-warning-400 text-warning-400 rounded-round border-2 btn-icon mr-3">
                              <i className="icon-watch2" />
                            </a>
                            <div>
                              <div className="font-weight-semibold">New sessions</div>
                              <span className="text-muted">08:20 avg</span>
                            </div>
                          </div>
                          <div className="w-75 mx-auto mb-3" id="new-sessions" />
                        </div>
                        <div className="col-sm-4">
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <a href="#" className="btn bg-transparent border-indigo-400 text-indigo-400 rounded-round border-2 btn-icon mr-3">
                              <i className="icon-people" />
                            </a>
                            <div>
                              <div className="font-weight-semibold">Total online</div>
                              <span className="text-muted"><span className="badge badge-mark border-success mr-2" /> 5,378 avg</span>
                            </div>
                          </div>
                          <div className="w-75 mx-auto mb-3" id="total-online" />
                        </div>
                      </div>
                    </div>
                    <div className="chart position-relative" id="traffic-sources" />
                  </div>
                  {/* /traffic sources */}
                </div>
                <div className="col-xl-5">
                  {/* Sales stats */}
                  <div className="card">
                    <div className="card-header header-elements-inline">
                      <h6 className="card-title">Sales statistics</h6>
                      <div className="header-elements">
                        <select className="form-control" id="select_date" data-fouc>
                          <option value="val1">June, 29 - July, 5</option>
                          <option value="val2">June, 22 - June 28</option>
                          <option value="val3" selected>June, 15 - June, 21</option>
                          <option value="val4">June, 8 - June, 14</option>
                        </select>
                      </div>
                    </div>
                    <div className="card-body py-0">
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="font-weight-semibold mb-0">5,689</h5>
                            <span className="text-muted font-size-sm">new orders</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="font-weight-semibold mb-0">32,568</h5>
                            <span className="text-muted font-size-sm">this month</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="font-weight-semibold mb-0">$23,464</h5>
                            <span className="text-muted font-size-sm">expected profit</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chart mb-2" id="app_sales" />
                    <div className="chart" id="monthly-sales-stats" />
                  </div>
                  {/* /sales stats */}
                </div>
              </div>
              {/* /main charts */}
              {/* Dashboard content */}
              <div className="row">
                <div className="col-xl-8">
                  {/* Marketing campaigns */}
                  <div className="card">
                    <div className="card-header header-elements-sm-inline">
                      <h6 className="card-title">Marketing campaigns</h6>
                      <div className="header-elements">
                        <span className="badge bg-success badge-pill">28 active</span>
                        <div className="list-icons ml-3">
                          <div className="list-icons-item dropdown">
                            <a href="#" className="list-icons-item dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7" /></a>
                            <div className="dropdown-menu">
                              <a href="#" className="dropdown-item"><i className="icon-sync" /> Update data</a>
                              <a href="#" className="dropdown-item"><i className="icon-list-unordered" /> Detailed log</a>
                              <a href="#" className="dropdown-item"><i className="icon-pie5" /> Statistics</a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item"><i className="icon-cross3" /> Clear list</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-sm-flex align-items-sm-center justify-content-sm-between flex-sm-wrap">
                      <div className="d-flex align-items-center mb-3 mb-sm-0">
                        <div id="campaigns-donut" />
                        <div className="ml-3">
                          <h5 className="font-weight-semibold mb-0">38,289 <span className="text-success font-size-sm font-weight-normal"><i className="icon-arrow-up12" /> (+16.2%)</span></h5>
                          <span className="badge badge-mark border-success mr-1" /> <span className="text-muted">May 12, 12:30 am</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3 mb-sm-0">
                        <div id="campaign-status-pie" />
                        <div className="ml-3">
                          <h5 className="font-weight-semibold mb-0">2,458 <span className="text-danger font-size-sm font-weight-normal"><i className="icon-arrow-down12" /> (-4.9%)</span></h5>
                          <span className="badge badge-mark border-danger mr-1" /> <span className="text-muted">Jun 4, 4:00 am</span>
                        </div>
                      </div>
                      <div>
                        <a href="#" className="btn bg-indigo-300"><i className="icon-statistics mr-2" /> View report</a>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table text-nowrap">
                        <thead>
                          <tr>
                            <th>Campaign</th>
                            <th>Client</th>
                            <th>Changes</th>
                            <th>Budget</th>
                            <th>Status</th>
                            <th className="text-center" style={{width: '20px'}}><i className="icon-arrow-down12" /></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table-active table-border-double">
                            <td colSpan={5}>Today</td>
                            <td className="text-right">
                              <span className="progress-meter" id="today-progress" data-progress={30} />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#">
                                    <img src=" global_assets/images/brands/facebook.png" className="rounded-circle" width={32} height={32} alt="" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold">Facebook</a>
                                  <div className="text-muted font-size-sm">
                                    <span className="badge badge-mark border-blue mr-1" />
                                    02:00 - 03:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td><span className="text-muted">Mintlime</span></td>
                            <td><span className="text-success-600"><i className="icon-stats-growth2 mr-2" /> 2.43%</span></td>
                            <td><h6 className="font-weight-semibold mb-0">$5,489</h6></td>
                            <td><span className="badge bg-blue">Active</span></td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-file-stats" /> View statement</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-text2" /> Edit campaign</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-locked" /> Disable campaign</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-gear" /> Settings</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#">
                                    <img src=" global_assets/images/brands/youtube.png" className="rounded-circle" width={32} height={32} alt="" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold">Youtube videos</a>
                                  <div className="text-muted font-size-sm">
                                    <span className="badge badge-mark border-danger mr-1" />
                                    13:00 - 14:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td><span className="text-muted">CDsoft</span></td>
                            <td><span className="text-success-600"><i className="icon-stats-growth2 mr-2" /> 3.12%</span></td>
                            <td><h6 className="font-weight-semibold mb-0">$2,592</h6></td>
                            <td><span className="badge bg-danger">Closed</span></td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-file-stats" /> View statement</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-text2" /> Edit campaign</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-locked" /> Disable campaign</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-gear" /> Settings</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#">
                                    <img src=" global_assets/images/brands/spotify.png" className="rounded-circle" width={32} height={32} alt="" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold">Spotify ads</a>
                                  <div className="text-muted font-size-sm">
                                    <span className="badge badge-mark border-grey-400 mr-1" />
                                    10:00 - 11:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td><span className="text-muted">Diligence</span></td>
                            <td><span className="text-danger"><i className="icon-stats-decline2 mr-2" /> - 8.02%</span></td>
                            <td><h6 className="font-weight-semibold mb-0">$1,268</h6></td>
                            <td><span className="badge bg-grey-400">On hold</span></td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-file-stats" /> View statement</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-text2" /> Edit campaign</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-locked" /> Disable campaign</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-gear" /> Settings</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#">
                                    <img src=" global_assets/images/brands/twitter.png" className="rounded-circle" width={32} height={32} alt="" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold">Twitter ads</a>
                                  <div className="text-muted font-size-sm">
                                    <span className="badge badge-mark border-grey-400 mr-1" />
                                    04:00 - 05:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td><span className="text-muted">Deluxe</span></td>
                            <td><span className="text-success-600"><i className="icon-stats-growth2 mr-2" /> 2.78%</span></td>
                            <td><h6 className="font-weight-semibold mb-0">$7,467</h6></td>
                            <td><span className="badge bg-grey-400">On hold</span></td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-file-stats" /> View statement</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-text2" /> Edit campaign</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-locked" /> Disable campaign</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-gear" /> Settings</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="table-active table-border-double">
                            <td colSpan={5}>Yesterday</td>
                            <td className="text-right">
                              <span className="progress-meter" id="yesterday-progress" data-progress={65} />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#">
                                    <img src=" global_assets/images/brands/bing.png" className="rounded-circle" width={32} height={32} alt="" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold">Bing campaign</a>
                                  <div className="text-muted font-size-sm">
                                    <span className="badge badge-mark border-success mr-1" />
                                    15:00 - 16:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td><span className="text-muted">Metrics</span></td>
                            <td><span className="text-danger"><i className="icon-stats-decline2 mr-2" /> - 5.78%</span></td>
                            <td><h6 className="font-weight-semibold mb-0">$970</h6></td>
                            <td><span className="badge bg-success-400">Pending</span></td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-file-stats" /> View statement</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-text2" /> Edit campaign</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-locked" /> Disable campaign</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-gear" /> Settings</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#">
                                    <img src=" global_assets/images/brands/amazon.png" className="rounded-circle" width={32} height={32} alt="" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold">Amazon ads</a>
                                  <div className="text-muted font-size-sm">
                                    <span className="badge badge-mark border-danger mr-1" />
                                    18:00 - 19:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td><span className="text-muted">Blueish</span></td>
                            <td><span className="text-success-600"><i className="icon-stats-growth2 mr-2" /> 6.79%</span></td>
                            <td><h6 className="font-weight-semibold mb-0">$1,540</h6></td>
                            <td><span className="badge bg-blue">Active</span></td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-file-stats" /> View statement</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-text2" /> Edit campaign</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-locked" /> Disable campaign</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-gear" /> Settings</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#">
                                    <img src=" global_assets/images/brands/dribbble.png" className="rounded-circle" width={32} height={32} alt="" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold">Dribbble ads</a>
                                  <div className="text-muted font-size-sm">
                                    <span className="badge badge-mark border-blue mr-1" />
                                    20:00 - 21:00
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td><span className="text-muted">Teamable</span></td>
                            <td><span className="text-danger"><i className="icon-stats-decline2 mr-2" /> 9.83%</span></td>
                            <td><h6 className="font-weight-semibold mb-0">$8,350</h6></td>
                            <td><span className="badge bg-danger">Closed</span></td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-file-stats" /> View statement</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-text2" /> Edit campaign</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-locked" /> Disable campaign</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-gear" /> Settings</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* /marketing campaigns */}
                  {/* Quick stats boxes */}
                  <div className="row">
                    <div className="col-lg-4">
                      {/* Members online */}
                      <div className="card bg-teal-400">
                        <div className="card-body">
                          <div className="d-flex">
                            <h3 className="font-weight-semibold mb-0">3,450</h3>
                            <span className="badge bg-teal-800 badge-pill align-self-center ml-auto">+53,6%</span>
                          </div>
                          <div>
                            Members online
                            <div className="font-size-sm opacity-75">489 avg</div>
                          </div>
                        </div>
                        <div className="container-fluid">
                          <div id="members-online" />
                        </div>
                      </div>
                      {/* /members online */}
                    </div>
                    <div className="col-lg-4">
                      {/* Current server load */}
                      <div className="card bg-pink-400">
                        <div className="card-body">
                          <div className="d-flex">
                            <h3 className="font-weight-semibold mb-0">49.4%</h3>
                            <div className="list-icons ml-auto">
                              <div className="list-icons-item dropdown">
                                <a href="#" className="list-icons-item dropdown-toggle" data-toggle="dropdown"><i className="icon-cog3" /></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item"><i className="icon-sync" /> Update data</a>
                                  <a href="#" className="dropdown-item"><i className="icon-list-unordered" /> Detailed log</a>
                                  <a href="#" className="dropdown-item"><i className="icon-pie5" /> Statistics</a>
                                  <a href="#" className="dropdown-item"><i className="icon-cross3" /> Clear list</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            Current server load
                            <div className="font-size-sm opacity-75">34.6% avg</div>
                          </div>
                        </div>
                        <div id="server-load" />
                      </div>
                      {/* /current server load */}
                    </div>
                    <div className="col-lg-4">
                      {/* Today's revenue */}
                      <div className="card bg-blue-400">
                        <div className="card-body">
                          <div className="d-flex">
                            <h3 className="font-weight-semibold mb-0">$18,390</h3>
                            <div className="list-icons ml-auto">
                              <a className="list-icons-item" data-action="reload" />
                            </div>
                          </div>
                          <div>
                            Today's revenue
                            <div className="font-size-sm opacity-75">$37,578 avg</div>
                          </div>
                        </div>
                        <div id="today-revenue" />
                      </div>
                      {/* /today's revenue */}
                    </div>
                  </div>
                  {/* /quick stats boxes */}
                  {/* Support tickets */}
                  <div className="card">
                    <div className="card-header header-elements-sm-inline">
                      <h6 className="card-title">Support tickets</h6>
                      <div className="header-elements">
                        <a className="text-default daterange-ranges font-weight-semibold cursor-pointer dropdown-toggle">
                          <i className="icon-calendar3 mr-2" />
                          <span />
                        </a>
                      </div>
                    </div>
                    <div className="card-body d-md-flex align-items-md-center justify-content-md-between flex-md-wrap">
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <div id="tickets-status" />
                        <div className="ml-3">
                          <h5 className="font-weight-semibold mb-0">14,327 <span className="text-success font-size-sm font-weight-normal"><i className="icon-arrow-up12" /> (+2.9%)</span></h5>
                          <span className="badge badge-mark border-success mr-1" /> <span className="text-muted">Jun 16, 10:00 am</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <a href="#" className="btn bg-transparent border-indigo-400 text-indigo-400 rounded-round border-2 btn-icon">
                          <i className="icon-alarm-add" />
                        </a>
                        <div className="ml-3">
                          <h5 className="font-weight-semibold mb-0">1,132</h5>
                          <span className="text-muted">total tickets</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <a href="#" className="btn bg-transparent border-indigo-400 text-indigo-400 rounded-round border-2 btn-icon">
                          <i className="icon-spinner11" />
                        </a>
                        <div className="ml-3">
                          <h5 className="font-weight-semibold mb-0">06:25:00</h5>
                          <span className="text-muted">response time</span>
                        </div>
                      </div>
                      <div>
                        <a href="#" className="btn bg-teal-400"><i className="icon-statistics mr-2" /> Report</a>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table text-nowrap">
                        <thead>
                          <tr>
                            <th style={{width: '50px'}}>Due</th>
                            <th style={{width: '300px'}}>User</th>
                            <th>Description</th>
                            <th className="text-center" style={{width: '20px'}}><i className="icon-arrow-down12" /></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table-active table-border-double">
                            <td colSpan={3}>Active tickets</td>
                            <td className="text-right">
                              <span className="badge bg-blue badge-pill">24</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <h6 className="mb-0">12</h6>
                              <div className="font-size-sm text-muted line-height-1">hours</div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#" className="btn bg-teal-400 rounded-round btn-icon btn-sm">
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold letter-icon-title">Annabelle Doney</a>
                                  <div className="text-muted font-size-sm"><span className="badge badge-mark border-blue mr-1" /> Active</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-default">
                                <div className="font-weight-semibold">[#1183] Workaround for OS X selects printing bug</div>
                                <span className="text-muted">Chrome fixed the bug several versions ago, thus rendering this...</span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-undo" /> Quick reply</a>
                                    <a href="#" className="dropdown-item"><i className="icon-history" /> Full history</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-checkmark3 text-success" /> Resolve issue</a>
                                    <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger" /> Close issue</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <h6 className="mb-0">16</h6>
                              <div className="font-size-sm text-muted line-height-1">hours</div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#">
                                    <img src=" global_assets/images/demo/users/face15.jpg" className="rounded-circle" width={32} height={32} alt="" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold">Chris Macintyre</a>
                                  <div className="text-muted font-size-sm"><span className="badge badge-mark border-blue mr-1" /> Active</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-default">
                                <div className="font-weight-semibold">[#1249] Vertically center carousel controls</div>
                                <span className="text-muted">Try any carousel control and reduce the screen width below...</span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-undo" /> Quick reply</a>
                                    <a href="#" className="dropdown-item"><i className="icon-history" /> Full history</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-checkmark3 text-success" /> Resolve issue</a>
                                    <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger" /> Close issue</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <h6 className="mb-0">20</h6>
                              <div className="font-size-sm text-muted line-height-1">hours</div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#" className="btn bg-blue rounded-round btn-icon btn-sm">
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold letter-icon-title">Robert Hauber</a>
                                  <div className="text-muted font-size-sm"><span className="badge badge-mark border-blue mr-1" /> Active</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-default">
                                <div className="font-weight-semibold">[#1254] Inaccurate small pagination height</div>
                                <span className="text-muted">The height of pagination elements is not consistent with...</span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-undo" /> Quick reply</a>
                                    <a href="#" className="dropdown-item"><i className="icon-history" /> Full history</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-checkmark3 text-success" /> Resolve issue</a>
                                    <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger" /> Close issue</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <h6 className="mb-0">40</h6>
                              <div className="font-size-sm text-muted line-height-1">hours</div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#" className="btn bg-warning-400 rounded-round btn-icon btn-sm">
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold letter-icon-title">Robert Hauber</a>
                                  <div className="text-muted font-size-sm"><span className="badge badge-mark border-blue mr-1" /> Active</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-default">
                                <div className="font-weight-semibold">[#1184] Round grid column gutter operations</div>
                                <span className="text-muted">Left rounds up, right rounds down. should keep everything...</span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-undo" /> Quick reply</a>
                                    <a href="#" className="dropdown-item"><i className="icon-history" /> Full history</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-checkmark3 text-success" /> Resolve issue</a>
                                    <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger" /> Close issue</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="table-active table-border-double">
                            <td colSpan={3}>Resolved tickets</td>
                            <td className="text-right">
                              <span className="badge bg-success badge-pill">42</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <i className="icon-checkmark3 text-success" />
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#" className="btn bg-success-400 rounded-round btn-icon btn-sm">
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold letter-icon-title">Alan Macedo</a>
                                  <div className="text-muted font-size-sm"><span className="badge badge-mark border-success mr-1" /> Resolved</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-default">
                                <div>[#1046] Avoid some unnecessary HTML string</div>
                                <span className="text-muted">Rather than building a string of HTML and then parsing it...</span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-undo" /> Quick reply</a>
                                    <a href="#" className="dropdown-item"><i className="icon-history" /> Full history</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-plus3 text-blue" /> Unresolve issue</a>
                                    <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger" /> Close issue</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <i className="icon-checkmark3 text-success" />
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#" className="btn bg-pink-400 rounded-round btn-icon btn-sm">
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold letter-icon-title">Brett Castellano</a>
                                  <div className="text-muted font-size-sm"><span className="badge badge-mark border-success mr-1" /> Resolved</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-default">
                                <div>[#1038] Update json configuration</div>
                                <span className="text-muted">The <code>files</code> property is necessary to override the files property...</span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-undo" /> Quick reply</a>
                                    <a href="#" className="dropdown-item"><i className="icon-history" /> Full history</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-plus3 text-blue" /> Unresolve issue</a>
                                    <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger" /> Close issue</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <i className="icon-checkmark3 text-success" />
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#">
                                    <img src=" global_assets/images/demo/users/face3.jpg" className="rounded-circle" width={32} height={32} alt="" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold">Roxanne Forbes</a>
                                  <div className="text-muted font-size-sm"><span className="badge badge-mark border-success mr-1" /> Resolved</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-default">
                                <div>[#1034] Tooltip multiple event</div>
                                <span className="text-muted">Fix behavior when using tooltips and popovers that are...</span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-undo" /> Quick reply</a>
                                    <a href="#" className="dropdown-item"><i className="icon-history" /> Full history</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-plus3 text-blue" /> Unresolve issue</a>
                                    <a href="#" className="dropdown-item"><i className="icon-cross2 text-danger" /> Close issue</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="table-active table-border-double">
                            <td colSpan={3}>Closed tickets</td>
                            <td className="text-right">
                              <span className="badge bg-danger badge-pill">37</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <i className="icon-cross2 text-danger-400" />
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#">
                                    <img src=" global_assets/images/demo/users/face8.jpg" className="rounded-circle" width={32} height={32} alt="" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold">Mitchell Sitkin</a>
                                  <div className="text-muted font-size-sm"><span className="badge badge-mark border-danger mr-1" /> Closed</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-default">
                                <div>[#1040] Account for static form controls in form group</div>
                                <span className="text-muted">Resizes control label's font-size and account for the standard...</span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-undo" /> Quick reply</a>
                                    <a href="#" className="dropdown-item"><i className="icon-history" /> Full history</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-plus3 text-blue" /> Unresolve issue</a>
                                    <a href="#" className="dropdown-item"><i className="icon-spinner11 text-grey" /> Reopen issue</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">
                              <i className="icon-cross2 text-danger" />
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#" className="btn bg-brown-400 rounded-round btn-icon btn-sm">
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold letter-icon-title">Katleen Jensen</a>
                                  <div className="text-muted font-size-sm"><span className="badge badge-mark border-danger mr-1" /> Closed</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="text-default">
                                <div>[#1038] Proper sizing of form control feedback</div>
                                <span className="text-muted">Feedback icon sizing inside a larger/smaller form-group...</span>
                              </a>
                            </td>
                            <td className="text-center">
                              <div className="list-icons">
                                <div className="list-icons-item dropdown">
                                  <a href="#" className="list-icons-item dropdown-toggle caret-0" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-undo" /> Quick reply</a>
                                    <a href="#" className="dropdown-item"><i className="icon-history" /> Full history</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-plus3 text-blue" /> Unresolve issue</a>
                                    <a href="#" className="dropdown-item"><i className="icon-spinner11 text-grey" /> Reopen issue</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* /support tickets */}
                  {/* Latest posts */}
                  <div className="card">
                    <div className="card-header header-elements-inline">
                      <h6 className="card-title">Latest posts</h6>
                      <div className="header-elements">
                        <div className="list-icons">
                          <a className="list-icons-item" data-action="collapse" />
                          <a className="list-icons-item" data-action="reload" />
                          <a className="list-icons-item" data-action="remove" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body pb-0">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="media flex-column flex-sm-row mt-0 mb-3">
                            <div className="mr-sm-3 mb-2 mb-sm-0">
                              <div className="card-img-actions">
                                <a href="#">
                                  <img src=" global_assets/images/demo/flat/1.png" className="img-fluid img-preview rounded" alt="" />
                                  <span className="card-img-actions-overlay card-img"><i className="icon-play3 icon-2x" /></span>
                                </a>
                              </div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-title"><a href="#">Up unpacked friendly</a></h6>
                              <ul className="list-inline list-inline-dotted text-muted mb-2">
                                <li className="list-inline-item"><i className="icon-book-play mr-2" /> Video tutorials</li>
                              </ul>
                              The him father parish looked has sooner. Attachment frequently terminated son hello...
                            </div>
                          </div>
                          <div className="media flex-column flex-sm-row mt-0 mb-3">
                            <div className="mr-sm-3 mb-2 mb-sm-0">
                              <div className="card-img-actions">
                                <a href="#">
                                  <img src=" global_assets/images/demo/flat/21.png" className="img-fluid img-preview rounded" alt="" />
                                  <span className="card-img-actions-overlay card-img"><i className="icon-play3 icon-2x" /></span>
                                </a>
                              </div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-title"><a href="#">It allowance prevailed</a></h6>
                              <ul className="list-inline list-inline-dotted text-muted mb-2">
                                <li className="list-inline-item"><i className="icon-book-play mr-2" /> Video tutorials</li>
                              </ul>
                              Alteration literature to or an sympathize mr imprudence. Of is ferrars subject enjoyed...
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="media flex-column flex-sm-row mt-0 mb-3">
                            <div className="mr-sm-3 mb-2 mb-sm-0">
                              <div className="card-img-actions">
                                <a href="#">
                                  <img src=" global_assets/images/demo/flat/12.png" className="img-fluid img-preview rounded" alt="" />
                                  <span className="card-img-actions-overlay card-img"><i className="icon-play3 icon-2x" /></span>
                                </a>
                              </div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-title"><a href="#">Case read they must</a></h6>
                              <ul className="list-inline list-inline-dotted text-muted mb-2">
                                <li className="list-inline-item"><i className="icon-book-play mr-2" /> Video tutorials</li>
                              </ul>
                              On it differed repeated wandered required in. Then girl neat why yet knew rose spot...
                            </div>
                          </div>
                          <div className="media flex-column flex-sm-row mt-0 mb-3">
                            <div className="mr-sm-3 mb-2 mb-sm-0">
                              <div className="card-img-actions">
                                <a href="#">
                                  <img src=" global_assets/images/demo/flat/15.png" className="img-fluid img-preview rounded" alt="" />
                                  <span className="card-img-actions-overlay card-img"><i className="icon-play3 icon-2x" /></span>
                                </a>
                              </div>
                            </div>
                            <div className="media-body">
                              <h6 className="media-title"><a href="#">Too carriage attended</a></h6>
                              <ul className="list-inline list-inline-dotted text-muted mb-2">
                                <li className="list-inline-item"><i className="icon-book-play mr-2" /> FAQ section</li>
                              </ul>
                              Marianne or husbands if at stronger ye. Considered is as middletons uncommonly...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /latest posts */}
                </div>
                <div className="col-xl-4">
                  {/* Progress counters */}
                  <div className="row">
                    <div className="col-sm-6">
                      {/* Available hours */}
                      <div className="card text-center">
                        <div className="card-body">
                          {/* Progress counter */}
                          <div className="svg-center position-relative" id="hours-available-progress" />
                          {/* /progress counter */}
                          {/* Bars */}
                          <div id="hours-available-bars" />
                          {/* /bars */}
                        </div>
                      </div>
                      {/* /available hours */}
                    </div>
                    <div className="col-sm-6">
                      {/* Productivity goal */}
                      <div className="card text-center">
                        <div className="card-body">
                          {/* Progress counter */}
                          <div className="svg-center position-relative" id="goal-progress" />
                          {/* /progress counter */}
                          {/* Bars */}
                          <div id="goal-bars" />
                          {/* /bars */}
                        </div>
                      </div>
                      {/* /productivity goal */}
                    </div>
                  </div>
                  {/* /progress counters */}
                  {/* Daily sales */}
                  <div className="card">
                    <div className="card-header header-elements-inline">
                      <h6 className="card-title">Daily sales stats</h6>
                      <div className="header-elements">
                        <span className="font-weight-bold text-danger-600 ml-2">$4,378</span>
                        <div className="list-icons ml-3">
                          <div className="list-icons-item dropdown">
                            <a href="#" className="list-icons-item dropdown-toggle" data-toggle="dropdown"><i className="icon-cog3" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#" className="dropdown-item"><i className="icon-sync" /> Update data</a>
                              <a href="#" className="dropdown-item"><i className="icon-list-unordered" /> Detailed log</a>
                              <a href="#" className="dropdown-item"><i className="icon-pie5" /> Statistics</a>
                              <div className="dropdown-divider" />
                              <a href="#" className="dropdown-item"><i className="icon-cross3" /> Clear list</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart" id="sales-heatmap" />
                    </div>
                    <div className="table-responsive">
                      <table className="table text-nowrap">
                        <thead>
                          <tr>
                            <th className="w-100">Application</th>
                            <th>Time</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#" className="btn bg-primary-400 rounded-round btn-icon btn-sm">
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold letter-icon-title">Sigma application</a>
                                  <div className="text-muted font-size-sm"><i className="icon-checkmark3 font-size-sm mr-1" /> New order</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted font-size-sm">06:28 pm</span>
                            </td>
                            <td>
                              <h6 className="font-weight-semibold mb-0">$49.90</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#" className="btn bg-danger-400 rounded-round btn-icon btn-sm">
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold letter-icon-title">Alpha application</a>
                                  <div className="text-muted font-size-sm"><i className="icon-spinner11 font-size-sm mr-1" /> Renewal</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted font-size-sm">04:52 pm</span>
                            </td>
                            <td>
                              <h6 className="font-weight-semibold mb-0">$90.50</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#" className="btn bg-indigo-400 rounded-round btn-icon btn-sm">
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold letter-icon-title">Delta application</a>
                                  <div className="text-muted font-size-sm"><i className="icon-lifebuoy font-size-sm mr-1" /> Support</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted font-size-sm">01:26 pm</span>
                            </td>
                            <td>
                              <h6 className="font-weight-semibold mb-0">$60.00</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#" className="btn bg-success-400 rounded-round btn-icon btn-sm">
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold letter-icon-title">Omega application</a>
                                  <div className="text-muted font-size-sm"><i className="icon-lifebuoy font-size-sm mr-1" /> Support</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted font-size-sm">11:46 am</span>
                            </td>
                            <td>
                              <h6 className="font-weight-semibold mb-0">$55.00</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="mr-3">
                                  <a href="#" className="btn bg-danger-400 rounded-round btn-icon btn-sm">
                                    <span className="letter-icon" />
                                  </a>
                                </div>
                                <div>
                                  <a href="#" className="text-default font-weight-semibold letter-icon-title">Alpha application</a>
                                  <div className="text-muted font-size-sm"><i className="icon-spinner11 font-size-sm mr-2" /> Renewal</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="text-muted font-size-sm">10:29 am</span>
                            </td>
                            <td>
                              <h6 className="font-weight-semibold mb-0">$90.50</h6>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* /daily sales */}
                  {/* My messages */}
                  <div className="card">
                    <div className="card-header header-elements-inline">
                      <h6 className="card-title">My messages</h6>
                      <div className="header-elements">
                        <span><i className="icon-history text-warning mr-2" /> Jul 7, 10:30</span>
                        <span className="badge bg-success align-self-start ml-3">Online</span>
                      </div>
                    </div>
                    {/* Numbers */}
                    <div className="card-body py-0">
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="font-weight-semibold mb-0">2,345</h5>
                            <span className="text-muted font-size-sm">this week</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="font-weight-semibold mb-0">3,568</h5>
                            <span className="text-muted font-size-sm">this month</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-3">
                            <h5 className="font-weight-semibold mb-0">32,693</h5>
                            <span className="text-muted font-size-sm">all messages</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /numbers */}
                    {/* Area chart */}
                    <div id="messages-stats" />
                    {/* /area chart */}
                    {/* Tabs */}
                    <ul className="nav nav-tabs nav-tabs-solid nav-justified bg-indigo-400 border-x-0 border-bottom-0 border-top-indigo-300 mb-0">
                      <li className="nav-item">
                        <a href="#messages-tue" className="nav-link font-size-sm text-uppercase active" data-toggle="tab">
                          Tuesday
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#messages-mon" className="nav-link font-size-sm text-uppercase" data-toggle="tab">
                          Monday
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#messages-fri" className="nav-link font-size-sm text-uppercase" data-toggle="tab">
                          Friday
                        </a>
                      </li>
                    </ul>
                    {/* /tabs */}
                    {/* Tabs content */}
                    <div className="tab-content card-body">
                      <div className="tab-pane active fade show" id="messages-tue">
                        <ul className="media-list">
                          <li className="media">
                            <div className="mr-3 position-relative">
                              <img src=" global_assets/images/demo/users/face10.jpg" className="rounded-circle" width={36} height={36} alt="" />
                              <span className="badge bg-danger-400 badge-pill badge-float border-2 border-white">8</span>
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">James Alexander</a>
                                <span className="font-size-sm text-muted">14:58</span>
                              </div>
                              The constitutionally inventoried precariously...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3 position-relative">
                              <img src=" global_assets/images/demo/users/face3.jpg" className="rounded-circle" width={36} height={36} alt="" />
                              <span className="badge bg-danger-400 badge-pill badge-float border-2 border-white">6</span>
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Margo Baker</a>
                                <span className="font-size-sm text-muted">12:16</span>
                              </div>
                              Pinched a well more moral chose goodness...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face24.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Jeremy Victorino</a>
                                <span className="font-size-sm text-muted">09:48</span>
                              </div>
                              Pert thickly mischievous clung frowned well...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face4.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Beatrix Diaz</a>
                                <span className="font-size-sm text-muted">05:54</span>
                              </div>
                              Nightingale taped hello bucolic fussily cardinal...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face25.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">												
                              <div className="d-flex justify-content-between">
                                <a href="#">Richard Vango</a>
                                <span className="font-size-sm text-muted">01:43</span>
                              </div>
                              Amidst roadrunner distantly pompously where...
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane fade" id="messages-mon">
                        <ul className="media-list">
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face2.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Isak Temes</a>
                                <span className="font-size-sm text-muted">Tue, 19:58</span>
                              </div>
                              Reasonable palpably rankly expressly grimy...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face7.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Vittorio Cosgrove</a>
                                <span className="font-size-sm text-muted">Tue, 16:35</span>
                              </div>
                              Arguably therefore more unexplainable fumed...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face18.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Hilary Talaugon</a>
                                <span className="font-size-sm text-muted">Tue, 12:16</span>
                              </div>
                              Nicely unlike porpoise a kookaburra past more...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face14.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Bobbie Seber</a>
                                <span className="font-size-sm text-muted">Tue, 09:20</span>
                              </div>
                              Before visual vigilantly fortuitous tortoise...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face8.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Walther Laws</a>
                                <span className="font-size-sm text-muted">Tue, 03:29</span>
                              </div>
                              Far affecting more leered unerringly dishonest...
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane fade" id="messages-fri">
                        <ul className="media-list">
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face15.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Owen Stretch</a>
                                <span className="font-size-sm text-muted">Mon, 18:12</span>
                              </div>
                              Tardy rattlesnake seal raptly earthworm...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face12.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Jenilee Mcnair</a>
                                <span className="font-size-sm text-muted">Mon, 14:03</span>
                              </div>
                              Since hello dear pushed amid darn trite...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face22.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Alaster Jain</a>
                                <span className="font-size-sm text-muted">Mon, 13:59</span>
                              </div>
                              Dachshund cardinal dear next jeepers well...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face24.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Sigfrid Thisted</a>
                                <span className="font-size-sm text-muted">Mon, 09:26</span>
                              </div>
                              Lighted wolf yikes less lemur crud grunted...
                            </div>
                          </li>
                          <li className="media">
                            <div className="mr-3">
                              <img src=" global_assets/images/demo/users/face17.jpg" className="rounded-circle" width={36} height={36} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="d-flex justify-content-between">
                                <a href="#">Sherilyn Mckee</a>
                                <span className="font-size-sm text-muted">Mon, 06:38</span>
                              </div>
                              Less unicorn a however careless husky...
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /tabs content */}
                  </div>
                  {/* /my messages */}
                  {/* Daily financials */}
                  <div className="card">
                    <div className="card-header header-elements-inline">
                      <h6 className="card-title">Daily financials</h6>
                      <div className="header-elements">
                        <div className="form-check form-check-inline form-check-right form-check-switchery form-check-switchery-sm">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-input-switchery" id="realtime" defaultChecked data-fouc />
                            Realtime
                          </label>
                        </div>
                        <span className="badge bg-danger-400 badge-pill">+86</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="chart mb-3" id="bullets" />
                      <ul className="media-list">
                        <li className="media">
                          <div className="mr-3">
                            <a href="#" className="btn bg-transparent border-pink text-pink rounded-round border-2 btn-icon"><i className="icon-statistics" /></a>
                          </div>
                          <div className="media-body">
                            Stats for July, 6: <span className="font-weight-semibold">1938</span> orders, <span className="font-weight-semibold text-danger">$4220</span> revenue
                            <div className="text-muted">2 hours ago</div>
                          </div>
                          <div className="ml-3 align-self-center">
                            <a href="#" className="list-icons-item"><i className="icon-more" /></a>
                          </div>
                        </li>
                        <li className="media">
                          <div className="mr-3">
                            <a href="#" className="btn bg-transparent border-success text-success rounded-round border-2 btn-icon"><i className="icon-checkmark3" /></a>
                          </div>
                          <div className="media-body">
                            Invoices <a href="#">#4732</a> and <a href="#">#4734</a> have been paid
                            <div className="text-muted">Dec 18, 18:36</div>
                          </div>
                          <div className="ml-3 align-self-center">
                            <a href="#" className="list-icons-item"><i className="icon-more" /></a>
                          </div>
                        </li>
                        <li className="media">
                          <div className="mr-3">
                            <a href="#" className="btn bg-transparent border-primary text-primary rounded-round border-2 btn-icon"><i className="icon-alignment-unalign" /></a>
                          </div>
                          <div className="media-body">
                            Affiliate commission for June has been paid
                            <div className="text-muted">36 minutes ago</div>
                          </div>
                          <div className="ml-3 align-self-center">
                            <a href="#" className="list-icons-item"><i className="icon-more" /></a>
                          </div>
                        </li>
                        <li className="media">
                          <div className="mr-3">
                            <a href="#" className="btn bg-transparent border-warning-400 text-warning-400 rounded-round border-2 btn-icon"><i className="icon-spinner11" /></a>
                          </div>
                          <div className="media-body">
                            Order <a href="#">#37745</a> from July, 1st has been refunded
                            <div className="text-muted">4 minutes ago</div>
                          </div>
                          <div className="ml-3 align-self-center">
                            <a href="#" className="list-icons-item"><i className="icon-more" /></a>
                          </div>
                        </li>
                        <li className="media">
                          <div className="mr-3">
                            <a href="#" className="btn bg-transparent border-teal text-teal rounded-round border-2 btn-icon"><i className="icon-redo2" /></a>
                          </div>
                          <div className="media-body">
                            Invoice <a href="#">#4769</a> has been sent to <a href="#">Robert Smith</a>
                            <div className="text-muted">Dec 12, 05:46</div>
                          </div>
                          <div className="ml-3 align-self-center">
                            <a href="#" className="list-icons-item"><i className="icon-more" /></a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /daily financials */}
                </div>
              </div>
              {/* /dashboard content */}
            </div>
            {/* /content area */}
            {/* Footer */}
            
            {/* /footer */}
          </div>
          {/* /main content */}
        </div>
      </div>
  
        </Fragment>
        )
}

export default Home
