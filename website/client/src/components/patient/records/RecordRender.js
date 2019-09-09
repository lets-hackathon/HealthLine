import React, { Fragment,useContext,useEffect} from "react";
import SideBar from "../../layout/SideBar";
import AuthContext from '../../../context/auth/authContext';

export default function RecordRender(props) {
  const authContext=useContext(AuthContext);

	useEffect(()=>{
		authContext.loadUser();
		//eslint-disable-next-line
	},[])
  const { title, description, pdf } = props;
  return (
    <Fragment>
      <div className="page-content">
        <SideBar />
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              {/* Blog layout #1 with image */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title font-weight-semibold">
                    <a href="#" className="text-default">
                      {title}
                    </a>
                  </h5>
                </div>
                <div className="card-body">
                  <div className="embed-responsive">
                    <object
                      data="C:\Users\asus\Documents\React\phone\my-app\public\test.pdf"
                      type="application/pdf"
                      width="100%"
                      height="100%"
                    >
                      <p>
                        This browser does not support inline PDFs. Please
                        download the PDF to view it:
                        <a href="C:\Users\asus\Documents\React\phone\my-app\public\test.pdf">
                          Download PDF
                        </a>
                      </p>
                    </object>
                  </div>
                  <div className="card-img-actions mb-3">
                    <img
                      className="card-img img-fluid"
                      src="../../../../global_assets/images/demo/images/blog1.jpg"
                      alt=""
                    />
                    <div className="card-img-actions-overlay card-img">
                      <a
                        href="blog_single.html"
                        className="btn btn-outline bg-white text-white border-white border-2 btn-icon rounded-round"
                      >
                        <i className="icon-link" />
                      </a>
                    </div>
                  </div>
                  {description}
                </div>
                <div className="card-footer bg-transparent d-sm-flex justify-content-sm-between align-items-sm-center border-top-0 pt-0 pb-3">
                  <ul className="list-inline list-inline-dotted text-muted mb-3 mb-sm-0">
                    <li className="list-inline-item">July 5th, 2016</li>
                  </ul>
                </div>
              </div>
              {/* /blog layout #1 with image */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
