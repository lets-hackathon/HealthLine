import React,{Fragment} from 'react'
import SideBar from '../layout/SideBar'
const Profile = () => {
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
          {/* /breadcrumb line */}
          {/* Page header content */}
          <div className="page-header-content header-elements-md-inline">
            <div className="page-title d-flex">
              <h4><i className="icon-arrow-left52 mr-2" /> <span className="font-weight-semibold">User Pages</span> - Profile</h4>
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
          {/* /page header content */}
          {/* Profile navigation */}
          <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="text-center d-lg-none w-100">
              <button type="button" className="navbar-toggler dropdown-toggle" data-toggle="collapse" data-target="#navbar-second">
                <i className="icon-menu7 mr-2" />
                Profile navigation
              </button>
            </div>
            <div className="navbar-collapse collapse" id="navbar-second">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  <a href="#activity" className="navbar-nav-link active" data-toggle="tab">
                    <i className="icon-menu7 mr-2" />
                    Activity
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#schedule" className="navbar-nav-link" data-toggle="tab">
                    <i className="icon-calendar3 mr-2" />
                    Schedule
                    <span className="badge badge-pill bg-success position-static ml-auto ml-lg-2">32</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#settings" className="navbar-nav-link" data-toggle="tab">
                    <i className="icon-cog3 mr-2" />
                    Settings
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item">
                  <a href="#" className="navbar-nav-link">
                    <i className="icon-stack-text mr-2" />
                    Notes
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="navbar-nav-link">
                    <i className="icon-collaboration mr-2" />
                    Friends
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="navbar-nav-link">
                    <i className="icon-images3 mr-2" />
                    Photos
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="navbar-nav-link dropdown-toggle" data-toggle="dropdown">
                    <i className="icon-gear" />
                    <span className="d-lg-none ml-2">Settings</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#" className="dropdown-item"><i className="icon-image2" /> Update cover</a>
                    <a href="#" className="dropdown-item"><i className="icon-clippy" /> Update info</a>
                    <a href="#" className="dropdown-item"><i className="icon-make-group" /> Manage sections</a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item"><i className="icon-three-bars" /> Activity log</a>
                    <a href="#" className="dropdown-item"><i className="icon-cog5" /> Profile settings</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* /profile navigation */}
        </div>
        {/* /page header */}
        {/* Content area */}
        <div className="content">
          {/* Inner container */}
          <div className="d-flex align-items-start flex-column flex-md-row">
            {/* Left content */}
            <div className="tab-content w-100 overflow-auto order-2 order-md-1">
              <div className="tab-pane fade active show" id="activity">
                {/* Timeline */}
                <div className="timeline timeline-left">
                  <div className="timeline-container">
                    {/* Sales stats */}
                    <div className="timeline-row">
                      <div className="timeline-icon">
                        <a href="#"><img src="../../../../global_assets/images/demo/users/face24.jpg" alt="" /></a>
                      </div>
                      <div className="card">
                        <div className="card-header header-elements-sm-inline">
                          <h6 className="card-title">Weekly statistics</h6>
                          <div className="header-elements">
                            <span><i className="icon-history mr-2 text-success" /> Updated 3 hours ago</span>
                            <div className="list-icons ml-3">
                              <a className="list-icons-item" data-action="reload" />
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="chart-container">
                            <div className="chart has-fixed-height" id="weekly_statistics" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /sales stats */}
                    {/* Blog post */}
                    <div className="timeline-row">
                      <div className="timeline-icon">
                        <img src="../../../../global_assets/images/demo/users/face12.jpg" alt="" />
                      </div>
                      <div className="card">
                        <div className="card-header header-elements-sm-inline">
                          <h6 className="card-title">Himalayan sunset</h6>
                          <div className="header-elements">
                            <span><i className="icon-checkmark-circle mr-2 text-success" /> 49 minutes ago</span>
                            <div className="list-icons ml-3">
                              <div className="list-icons-item dropdown">
                                <a href="#" className="list-icons-item caret-0 dropdown-toggle" data-toggle="dropdown">
                                  <i className="icon-arrow-down12" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item"><i className="icon-user-lock" /> Hide user posts</a>
                                  <a href="#" className="dropdown-item"><i className="icon-user-block" /> Block user</a>
                                  <a href="#" className="dropdown-item"><i className="icon-user-minus" /> Unfollow user</a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item"><i className="icon-embed" /> Embed post</a>
                                  <a href="#" className="dropdown-item"><i className="icon-blocked" /> Report this post</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="card-img-actions mb-3">
                            <img className="card-img img-fluid" src="../../../../global_assets/images/demo/cover3.jpg" alt="" />
                            <div className="card-img-actions-overlay card-img">
                              <a href="blog_single.html" className="btn btn-outline bg-white text-white border-white border-2 btn-icon rounded-round">
                                <i className="icon-link" />
                              </a>
                            </div>
                          </div>
                          <h6 className="mb-3">
                            <i className="icon-comment-discussion mr-2" />
                            <a href="#">Jason Ansley</a> commented:
                          </h6>
                          <blockquote className="blockquote blockquote-bordered py-2 pl-3 mb-0">
                            <p className="mb-2 font-size-base">When suspiciously goodness labrador understood rethought yawned grew piously endearingly inarticulate oh goodness jeez trout distinct hence cobra despite taped laughed the much audacious less inside tiger groaned darn stuffily metaphoric unihibitedly inside cobra.</p>
                            <footer className="blockquote-footer">Jason, <cite title="Source Title">10:39 am</cite></footer>
                          </blockquote>
                        </div>
                        <div className="card-footer bg-transparent d-sm-flex justify-content-sm-between align-items-sm-center border-top-0 pt-0 pb-3">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item"><a href="#" className="text-default"><i className="icon-eye4 mr-2" /> 438</a></li>
                            <li className="list-inline-item"><a href="#" className="text-default"><i className="icon-comment-discussion mr-2" /> 71</a></li>
                          </ul>
                          <a href="#" className="d-inline-block text-default mt-2 mt-sm-0">Read post <i className="icon-arrow-right14 ml-2" /></a>
                        </div>
                      </div>
                    </div>
                    {/* /blog post */}
                    {/* Date stamp */}
                    <div className="timeline-date text-muted">
                      <i className="icon-history mr-2" /> <span className="font-weight-semibold">Monday</span>, April 18
                    </div>
                    {/* /date stamp */}
                    {/* Invoices */}
                    <div className="timeline-row">
                      <div className="timeline-icon">
                        <div className="bg-warning-400">
                          <i className="icon-cash3" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card border-left-3 border-left-danger rounded-left-0">
                            <div className="card-body">
                              <div className="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                <div>
                                  <h6 className="font-weight-semibold">Leonardo Fellini</h6>
                                  <ul className="list list-unstyled mb-0">
                                    <li>Invoice #: &nbsp;0028</li>
                                    <li>Issued on: <span className="font-weight-semibold">2015/01/25</span></li>
                                  </ul>
                                </div>
                                <div className="text-sm-right mb-0 mt-3 mt-sm-0 ml-auto">
                                  <h6 className="font-weight-semibold">$8,750</h6>
                                  <ul className="list list-unstyled mb-0">
                                    <li>Method: <span className="font-weight-semibold">SWIFT</span></li>
                                    <li className="dropdown">
                                      Status: &nbsp;
                                      <a href="#" className="badge bg-danger-400 align-top dropdown-toggle" data-toggle="dropdown">Overdue</a>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item active"><i className="icon-alert" /> Overdue</a>
                                        <a href="#" className="dropdown-item"><i className="icon-alarm" /> Pending</a>
                                        <a href="#" className="dropdown-item"><i className="icon-checkmark3" /> Paid</a>
                                        <div className="dropdown-divider" />
                                        <a href="#" className="dropdown-item"><i className="icon-spinner2 spinner" /> On hold</a>
                                        <a href="#" className="dropdown-item"><i className="icon-cross2" /> Canceled</a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">
                              <span>
                                <span className="badge badge-mark border-danger mr-2" />
                                Due:
                                <span className="font-weight-semibold">2015/02/25</span>
                              </span>
                              <ul className="list-inline list-inline-condensed mb-0 mt-2 mt-sm-0">
                                <li className="list-inline-item">
                                  <a href="#" className="text-default"><i className="icon-eye8" /></a>
                                </li>
                                <li className="list-inline-item dropdown">
                                  <a href="#" className="text-default dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-printer" /> Print invoice</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-download" /> Download invoice</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-file-plus" /> Edit invoice</a>
                                    <a href="#" className="dropdown-item"><i className="icon-cross2" /> Remove invoice</a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card border-left-3 border-left-success rounded-left-0">
                            <div className="card-body">
                              <div className="d-sm-flex align-item-sm-center flex-sm-nowrap">
                                <div>
                                  <h6 className="font-weight-semibold">Rebecca Manes</h6>
                                  <ul className="list list-unstyled mb-0">
                                    <li>Invoice #: &nbsp;0027</li>
                                    <li>Issued on: <span className="font-weight-semibold">2015/02/24</span></li>
                                  </ul>
                                </div>
                                <div className="text-sm-right mb-0 mt-3 mt-sm-0 ml-auto">
                                  <h6 className="font-weight-semibold">$5,100</h6>
                                  <ul className="list list-unstyled mb-0">
                                    <li>Method: <span className="font-weight-semibold">Paypal</span></li>
                                    <li className="dropdown">
                                      Status: &nbsp;
                                      <a href="#" className="badge bg-success-400 align-top dropdown-toggle" data-toggle="dropdown">Paid</a>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item"><i className="icon-alert" /> Overdue</a>
                                        <a href="#" className="dropdown-item"><i className="icon-alarm" /> Pending</a>
                                        <a href="#" className="dropdown-item active"><i className="icon-checkmark3" /> Paid</a>
                                        <div className="dropdown-divider" />
                                        <a href="#" className="dropdown-item"><i className="icon-spinner2 spinner" /> On hold</a>
                                        <a href="#" className="dropdown-item"><i className="icon-cross2" /> Canceled</a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="card-footer d-sm-flex justify-content-sm-between align-items-sm-center">
                              <span>
                                <span className="badge badge-mark border-success mr-2" />
                                Due:
                                <span className="font-weight-semibold">2015/03/24</span>
                              </span>
                              <ul className="list-inline list-inline-condensed mb-0 mt-2 mt-sm-0">
                                <li className="list-inline-item">
                                  <a href="#" className="text-default"><i className="icon-eye8" /></a>
                                </li>
                                <li className="list-inline-item dropdown">
                                  <a href="#" className="text-default dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7" /></a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item"><i className="icon-printer" /> Print invoice</a>
                                    <a href="#" className="dropdown-item"><i className="icon-file-download" /> Download invoice</a>
                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item"><i className="icon-file-plus" /> Edit invoice</a>
                                    <a href="#" className="dropdown-item"><i className="icon-cross2" /> Remove invoice</a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /invoices */}
                    {/* Messages */}
                    <div className="timeline-row">
                      <div className="timeline-icon">
                        <div className="bg-info-400">
                          <i className="icon-comment-discussion" />
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header header-elements-inline">
                          <h6 className="card-title">Conversation with James</h6>
                          <div className="header-elements">
                            <div className="list-icons ml-3">
                              <div className="list-icons-item dropdown">
                                <a href="#" className="list-icons-item caret-0 dropdown-toggle" data-toggle="dropdown">
                                  <i className="icon-arrow-down12" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a href="#" className="dropdown-item"><i className="icon-user-lock" /> Hide user posts</a>
                                  <a href="#" className="dropdown-item"><i className="icon-user-block" /> Block user</a>
                                  <a href="#" className="dropdown-item"><i className="icon-user-minus" /> Unfollow user</a>
                                  <div className="dropdown-divider" />
                                  <a href="#" className="dropdown-item"><i className="icon-embed" /> Embed post</a>
                                  <a href="#" className="dropdown-item"><i className="icon-blocked" /> Report this post</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul className="media-list media-chat media-chat-scrollable mb-3">
                            <li className="media content-divider justify-content-center text-muted mx-0">Today</li>
                            <li className="media media-chat-item-reverse">
                              <div className="media-body">
                                <div className="media-chat-item">Thus superb the tapir the wallaby blank frog execrably much since dalmatian by in hot. Uninspiringly arose mounted stared one curt safe</div>
                                <div className="font-size-sm text-muted mt-2">Tue, 8:12 am <a href="#"><i className="icon-pin-alt ml-2 text-muted" /></a></div>
                              </div>
                              <div className="ml-3">
                                <a href="../../../../global_assets/images/demo/images/3.png">
                                  <img src="../../../../global_assets/images/demo/users/face1.jpg" className="rounded-circle" width={40} height={40} alt="" />
                                </a>
                              </div>
                            </li>
                            <li className="media">
                              <div className="mr-3">
                                <a href="../../../../global_assets/images/demo/images/3.png">
                                  <img src="../../../../global_assets/images/demo/users/face11.jpg" className="rounded-circle" width={40} height={40} alt="" />
                                </a>
                              </div>
                              <div className="media-body">
                                <div className="media-chat-item">Tolerantly some understood this stubbornly after snarlingly frog far added insect into snorted more auspiciously heedless drunkenly jeez foolhardy oh.</div>
                                <div className="font-size-sm text-muted mt-2">Wed, 4:20 pm <a href="#"><i className="icon-pin-alt ml-2 text-muted" /></a></div>
                              </div>
                            </li>
                            <li className="media media-chat-item-reverse">
                              <div className="media-body">
                                <div className="media-chat-item">Satisfactorily strenuously while sleazily dear frustratingly insect menially some shook far sardonic badger telepathic much jeepers immature much hey.</div>
                                <div className="font-size-sm text-muted mt-2">2 hours ago <a href="#"><i className="icon-pin-alt ml-2 text-muted" /></a></div>
                              </div>
                              <div className="ml-3">
                                <a href="../../../../global_assets/images/demo/images/3.png">
                                  <img src="../../../../global_assets/images/demo/users/face1.jpg" className="rounded-circle" width={40} height={40} alt="" />
                                </a>
                              </div>
                            </li>
                            <li className="media">
                              <div className="mr-3">
                                <a href="../../../../global_assets/images/demo/images/3.png">
                                  <img src="../../../../global_assets/images/demo/users/face11.jpg" className="rounded-circle" width={40} height={40} alt="" />
                                </a>
                              </div>
                              <div className="media-body">
                                <div className="media-chat-item">Grunted smirked and grew less but rewound much despite and impressive via alongside out and gosh easy manatee dear ineffective yikes.</div>
                                <div className="font-size-sm text-muted mt-2">13 minutes ago <a href="#"><i className="icon-pin-alt ml-2 text-muted" /></a></div>
                              </div>
                            </li>
                            <li className="media media-chat-item-reverse">
                              <div className="media-body">
                                <div className="media-chat-item"><i className="icon-menu" /></div>
                              </div>
                              <div className="ml-3">
                                <a href="../../../../global_assets/images/demo/images/3.png">
                                  <img src="../../../../global_assets/images/demo/users/face1.jpg" className="rounded-circle" width={40} height={40} alt="" />
                                </a>
                              </div>
                            </li>
                          </ul>
                          <textarea name="enter-message" className="form-control mb-3" rows={3} cols={1} placeholder="Enter your message..." defaultValue={""} />
                          <div className="d-flex align-items-center">
                            <div className="list-icons list-icons-extended">
                              <a href="#" className="list-icons-item" data-popup="tooltip" data-container="body" title="Send photo"><i className="icon-file-picture" /></a>
                              <a href="#" className="list-icons-item" data-popup="tooltip" data-container="body" title="Send video"><i className="icon-file-video" /></a>
                              <a href="#" className="list-icons-item" data-popup="tooltip" data-container="body" title="Send file"><i className="icon-file-plus" /></a>
                            </div>
                            <button type="button" className="btn bg-teal-400 btn-labeled btn-labeled-right ml-auto"><b><i className="icon-paperplane" /></b> Send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /messages */}
                    {/* Video post */}
                    <div className="timeline-row">
                      <div className="timeline-icon">
                        <img src="../../../../global_assets/images/demo/users/face3.jpg" alt="" />
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card">
                            <div className="card-header header-elements-sm-inline">
                              <h6 className="card-title">Peru mountains</h6>
                              <div className="header-elements">
                                <span><i className="icon-checkmark-circle mr-2 text-success" /> Today, 8:39 am</span>
                                <div className="list-icons ml-3">
                                  <div className="list-icons-item dropdown">
                                    <a href="#" className="list-icons-item caret-0 dropdown-toggle" data-toggle="dropdown">
                                      <i className="icon-arrow-down12" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item"><i className="icon-user-lock" /> Hide user posts</a>
                                      <a href="#" className="dropdown-item"><i className="icon-user-block" /> Block user</a>
                                      <a href="#" className="dropdown-item"><i className="icon-user-minus" /> Unfollow user</a>
                                      <div className="dropdown-divider" />
                                      <a href="#" className="dropdown-item"><i className="icon-embed" /> Embed post</a>
                                      <a href="#" className="dropdown-item"><i className="icon-blocked" /> Report this post</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <p className="mb-3">Cutting much goodness more from sympathetic unwittingly under wow affluent luckily or distinctly demonstrable strewed lewd outside coaxingly and after and rational alas this fitted. Hippopotamus noticeably oh bridled more until dutiful.</p>
                              <div className="card-img embed-responsive embed-responsive-16by9">
                                <iframe allowFullScreen frameBorder={0} mozallowfullscreen src="https://player.vimeo.com/video/126945693?title=0&byline=0&portrait=0" webkitallowfullscreen />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card">
                            <div className="card-header header-elements-sm-inline">
                              <h6 className="card-title">Woodturner master</h6>
                              <div className="header-elements">
                                <span><i className="icon-checkmark-circle mr-2 text-success" /> Yesterday, 7:52 am</span>
                                <div className="list-icons ml-3">
                                  <div className="list-icons-item dropdown">
                                    <a href="#" className="list-icons-item caret-0 dropdown-toggle" data-toggle="dropdown">
                                      <i className="icon-arrow-down12" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <a href="#" className="dropdown-item"><i className="icon-user-lock" /> Hide user posts</a>
                                      <a href="#" className="dropdown-item"><i className="icon-user-block" /> Block user</a>
                                      <a href="#" className="dropdown-item"><i className="icon-user-minus" /> Unfollow user</a>
                                      <div className="dropdown-divider" />
                                      <a href="#" className="dropdown-item"><i className="icon-embed" /> Embed post</a>
                                      <a href="#" className="dropdown-item"><i className="icon-blocked" /> Report this post</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <p className="mb-3">Bewitchingly amid heard by llama glanced fussily quetzal more that overcame eerie goodness badger woolly where since gosh accurate irrespective that pounded much winked urgent and furtive house gosh one while this more.</p>
                              <div className="card-img embed-responsive embed-responsive-16by9">
                                <iframe allowFullScreen frameBorder={0} mozallowfullscreen src="https://player.vimeo.com/video/126545288?title=0&byline=0&portrait=0" webkitallowfullscreen />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /video post */}
                  </div>
                </div>
                {/* /timeline */}
              </div>
              <div className="tab-pane fade" id="schedule">
                {/* Available hours */}
                <div className="card">
                  <div className="card-header header-elements-inline">
                    <h6 className="card-title">Available hours</h6>
                    <div className="header-elements">
                      <div className="list-icons">
                        <a className="list-icons-item" data-action="collapse" />
                        <a className="list-icons-item" data-action="reload" />
                        <a className="list-icons-item" data-action="remove" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <div className="chart has-fixed-height" id="available_hours" />
                    </div>
                  </div>
                </div>
                {/* /available hours */}
                {/* Schedule */}
                <div className="card">
                  <div className="card-header header-elements-inline">
                    <h5 className="card-title">My schedule</h5>
                    <div className="header-elements">
                      <div className="list-icons">
                        <a className="list-icons-item" data-action="collapse" />
                        <a className="list-icons-item" data-action="reload" />
                        <a className="list-icons-item" data-action="remove" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="my-schedule" />
                  </div>
                </div>
                {/* /schedule */}
              </div>
              <div className="tab-pane fade" id="settings">
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
                            <label>Username</label>
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
                          <div className="col-md-6">
                            <label>Address line 1</label>
                            <input type="text" defaultValue="Ring street 12" className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label>Address line 2</label>
                            <input type="text" defaultValue="building D, flat #67" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-4">
                            <label>City</label>
                            <input type="text" defaultValue="Munich" className="form-control" />
                          </div>
                          <div className="col-md-4">
                            <label>State/Province</label>
                            <input type="text" defaultValue="Bayern" className="form-control" />
                          </div>
                          <div className="col-md-4">
                            <label>ZIP code</label>
                            <input type="text" defaultValue={1031} className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label>Email</label>
                            <input type="text" readOnly="readonly" defaultValue="eugene@kopyov.com" className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label>Your country</label>
                            <select className="form-control form-control-select2" data-fouc>
                              <option value="germany" selected>Germany</option> 
                              <option value="france">France</option> 
                              <option value="spain">Spain</option> 
                              <option value="netherlands">Netherlands</option> 
                              <option value="other">...</option> 
                              <option value="uk">United Kingdom</option> 
                            </select>
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
                            <input type="file" className="form-input-styled" data-fouc />
                            <span className="form-text text-muted">Accepted formats: gif, png, jpg. Max file size 2Mb</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <button type="submit" className="btn btn-primary">Save changes</button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* /profile info */}
                {/* Account settings */}
                <div className="card">
                  <div className="card-header header-elements-inline">
                    <h5 className="card-title">Account settings</h5>
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
                            <label>Username</label>
                            <input type="text" defaultValue="Kopyov" readOnly="readonly" className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label>Current password</label>
                            <input type="password" defaultValue="password" readOnly="readonly" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label>New password</label>
                            <input type="password" placeholder="Enter new password" className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <label>Repeat password</label>
                            <input type="password" placeholder="Repeat new password" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label>Profile visibility</label>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" name="visibility" className="form-input-styled" defaultChecked data-fouc />
                                Visible to everyone
                              </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" name="visibility" className="form-input-styled" data-fouc />
                                Visible to friends only
                              </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" name="visibility" className="form-input-styled" data-fouc />
                                Visible to my connections only
                              </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" name="visibility" className="form-input-styled" data-fouc />
                                Visible to my colleagues only
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label>Notifications</label>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-input-styled" defaultChecked data-fouc />
                                Password expiration notification
                              </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-input-styled" defaultChecked data-fouc />
                                New message notification
                              </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-input-styled" defaultChecked data-fouc />
                                New task notification
                              </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-input-styled" />
                                New contact request notification
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <button type="submit" className="btn btn-primary">Save changes</button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* /account settings */}
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
                      <a href="#" className="list-icons-item" data-popup="tooltip" title="Google Drive" data-container="body"><i className="icon-google-drive" /></a>
                      <a href="#" className="list-icons-item" data-popup="tooltip" title="Twitter" data-container="body"><i className="icon-twitter" /></a>
                      <a href="#" className="list-icons-item" data-popup="tooltip" title="Github" data-container="body"><i className="icon-github" /></a>
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
                {/* /navigation */}
                {/* Share your thoughts */}
                <div className="card">
                  <div className="card-header bg-transparent header-elements-inline">
                    <span className="card-title font-weight-semibold">Share your thoughts</span>
                    <div className="header-elements">
                      <div className="list-icons">
                        <a className="list-icons-item" data-action="collapse" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <textarea name="enter-message" className="form-control mb-3" rows={3} cols={1} placeholder="Enter your message..." defaultValue={""} />
                      <div className="d-flex align-items-center">
                        <div className="list-icons list-icons-extended">
                          <a href="#" className="list-icons-item" data-popup="tooltip" title="Add photo" data-container="body"><i className="icon-images2" /></a>
                          <a href="#" className="list-icons-item" data-popup="tooltip" title="Add video" data-container="body"><i className="icon-film2" /></a>
                          <a href="#" className="list-icons-item" data-popup="tooltip" title="Add event" data-container="body"><i className="icon-calendar2" /></a>
                        </div>
                        <button type="button" className="btn bg-blue btn-labeled btn-labeled-right ml-auto"><b><i className="icon-paperplane" /></b> Share</button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* /share your thoughts */}
                {/* Balance changes */}
                <div className="card">
                  <div className="card-header bg-transparent header-elements-inline">
                    <span className="card-title font-weight-semibold">Balance changes</span>
                    <div className="header-elements">
                      <span><i className="icon-arrow-down22 text-danger" /> <span className="font-weight-semibold">- 29.4%</span></span>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">
                      <div className="chart has-fixed-height" id="balance_statistics" />
                    </div>
                  </div>
                </div>
                {/* /balance changes */}
                {/* Latest connections */}
                <div className="card">
                  <div className="card-header bg-transparent header-elements-inline">
                    <span className="card-title font-weight-semibold">Latest connections</span>
                    <div className="header-elements">
                      <span className="badge bg-success badge-pill">+32</span>
                    </div>
                  </div>
                  <ul className="media-list media-list-linked my-2">
                    <li className="media font-weight-semibold border-0 py-2">Office staff</li>
                    <li>
                      <a href="#" className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/demo/users/face1.jpg" className="rounded-circle" width={40} height={40} alt="" />
                        </div>
                        <div className="media-body">
                          <div className="media-title font-weight-semibold">James Alexander</div>
                          <span className="text-muted font-size-sm">UI/UX expert</span>
                        </div>
                        <div className="align-self-center ml-3">
                          <span className="badge badge-mark bg-success border-success" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/demo/users/face2.jpg" className="rounded-circle" width={40} height={40} alt="" />
                        </div>
                        <div className="media-body">
                          <div className="media-title font-weight-semibold">Jeremy Victorino</div>
                          <span className="text-muted font-size-sm">Senior designer</span>
                        </div>
                        <div className="align-self-center ml-3">
                          <span className="badge badge-mark bg-danger border-danger" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/demo/users/face6.jpg" className="rounded-circle" width={40} height={40} alt="" />
                        </div>
                        <div className="media-body">
                          <div className="media-title"><span className="font-weight-semibold">Jordana Mills</span></div>
                          <span className="text-muted">Sales consultant</span>
                        </div>
                        <div className="align-self-center ml-3">
                          <span className="badge badge-mark bg-grey-300 border-grey-300" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/demo/users/face9.jpg" className="rounded-circle" width={40} height={40} alt="" />
                        </div>
                        <div className="media-body">
                          <div className="media-title"><span className="font-weight-semibold">William Miles</span></div>
                          <span className="text-muted">SEO expert</span>
                        </div>
                        <div className="align-self-center ml-3">
                          <span className="badge badge-mark bg-success border-success" />
                        </div>
                      </a>
                    </li>
                    <li className="media font-weight-semibold border-0 py-2">Partners</li>
                    <li>
                      <a href="#" className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/demo/users/face3.jpg" className="rounded-circle" width={40} height={40} alt="" />
                        </div>
                        <div className="media-body">
                          <div className="media-title font-weight-semibold">Margo Baker</div>
                          <span className="text-muted font-size-sm">Google</span>
                        </div>
                        <div className="align-self-center ml-3">
                          <span className="badge badge-mark bg-success border-success" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/demo/users/face4.jpg" className="rounded-circle" width={40} height={40} alt="" />
                        </div>
                        <div className="media-body">
                          <div className="media-title font-weight-semibold">Beatrix Diaz</div>
                          <span className="text-muted font-size-sm">Facebook</span>
                        </div>
                        <div className="align-self-center ml-3">
                          <span className="badge badge-mark bg-warning-400 border-warning-400" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="media">
                        <div className="mr-3">
                          <img src="../../../../global_assets/images/demo/users/face5.jpg" className="rounded-circle" width={40} height={40} alt="" />
                        </div>
                        <div className="media-body">
                          <div className="media-title font-weight-semibold">Richard Vango</div>
                          <span className="text-muted font-size-sm">Microsoft</span>
                        </div>
                        <div className="align-self-center ml-3">
                          <span className="badge badge-mark bg-grey-300 border-grey-300" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* /latest connections */}
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



// import React,{Fragment} from 'react'

// const Profile = () => {
//     return (
//         <Fragment>
//            {/* photo
//            name
//            age 
//            email
//            address
//            emergency address
//            allergies
//            history of sickness
//            Occupation */}

//            {/* pending tests: */}

//            {/* health services you can buy and other relevant links */}
//            {/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
// <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
// <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}

// <div class="container emp-profile">
//             <form method="post">
//                 <div class="row">
//                     <div class="col-md-4">
//                         <div class="profile-img">
//                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
//                             <div class="file btn btn-lg btn-primary">
//                                 Change Photo
//                                 <input type="file" name="file"/>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-md-6">
//                         <div class="profile-head">
//                                     <h5>
//                                         Kanishk Gupta
//                                     </h5>
//                                     {/* <h6>
//                                         Web Developer and Designer
//                                     </h6> */}
//                                     {/* <p class="proile-rating">RANKINGS : <span>8/10</span></p> */}
//                             <ul class="nav nav-tabs" id="myTab" role="tablist">
//                                 <li class="nav-item">
//                                     <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="col-md-2">
//                         <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col-md-4">
//                         <div class="profile-work">
//                             <p>WORK LINK</p>
//                             <a href="">Website Link</a><br/>
//                             <a href="">Bootsnipp Profile</a><br/>
//                             <a href="">Bootply Profile</a>
//                             <p>SKILLS</p>
//                             <a href="">Web Designer</a><br/>
//                             <a href="">Web Developer</a><br/>
//                             <a href="">WordPress</a><br/>
//                             <a href="">WooCommerce</a><br/>
//                             <a href="">PHP, .Net</a><br/>
//                         </div>
//                     </div>
//                     <div class="col-md-8">
//                         <div class="tab-content profile-tab" id="myTabContent">
//                             <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Record Id</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>#ka1234</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Name</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>Kanishk Gupta</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Email</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>kanishkgupta2000@gmail.com</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Phone</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>123 456 7890</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Emergency Contact id</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>+919818533500</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Address</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>J-7/137,Rajouri Garden,New Delhi</p>
//                                             </div>
//                                         </div>
//                             </div>
//                             <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Experience</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>Expert</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Hourly Rate</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>10$/hr</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Total Projects</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>230</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>English Level</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>Expert</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Availability</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>6 months</p>
//                                             </div>
//                                         </div>
//                                 <div class="row">
//                                     <div class="col-md-12">
//                                         <label>Your Bio</label><br/>
//                                         <p>Your detail description</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>           
//         </div>
//         </Fragment>
//     )
// }

// export default Profile
