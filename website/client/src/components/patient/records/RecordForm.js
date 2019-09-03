import React, { Fragment } from "react";
import SideBar from "../../layout/SideBar";
const RecordForm = () => {
  return (
    <Fragment>
      {/* <h1>This is Record page</h1> */}
      {/* display of medical records */}
      {/*
            form submittal 
            date of addition
            purpose of report 
             summary
            submitting pdfs to medical record */}

      <div className="page-content">
        <SideBar />
        <div className="container-fluid">
          <div className="card">
            <div className="card-header header-elements-inline">
              <h6 className="card-title">Submit Personal Record</h6>
              {/* <div className="header-elements">
            <div className="list-icons">
              <a className="list-icons-item" data-action="collapse" />
              <a className="list-icons-item" data-action="reload" />
              <a className="list-icons-item" data-action="remove" />
            </div>
          </div> */}
            </div>

            <div className="card-body" style={{}}>
              <form action="#">
                <div className="form-group row">
                  <label className="col-form-label col-lg-2">Title:</label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Record Title"
                    />
                  </div>
                </div>
                {/* <div className="form-group row">
            <label className="col-form-label col-lg-2">Your password:</label>
            <div className="col-lg-10">
              <input
                type="password"
                className="form-control"
                placeholder="Your strong password"
              />
            </div>
          </div> */}
                <div className="form-group row">
                  <label className="col-form-label col-lg-2">Upload PDF:</label>
                  <div className="col-lg-10">
                    <input type="file" className="form-control-file" />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-2">
                    Description:
                  </label>
                  <div className="col-lg-10">
                    <textarea
                      rows={3}
                      cols={3}
                      className="form-control"
                      placeholder="Record Descreption"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="form-group row mb-0">
                  <div className="col-lg-10 ml-lg-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <button type="submit" className="btn btn-info">
                        Cancel
                      </button>
                      <button type="submit" className="btn  btn-primary">
                        Submit
                        <i className="icon-paperplane ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecordForm;
