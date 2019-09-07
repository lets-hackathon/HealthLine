import React, { Fragment } from "react";
import SideBar from "../layout/SideBar";

const ReminderRender = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="card" style={{ marginTop: "25px" }}>
          <div className="card-header header-elements-inline">
            <h3 className="card-title">
              {"{"}Medicine Name{"}"}
            </h3>
          </div>
          <div className="card-body">
            <p className="card-text">
              {"{"}Descrition{"}"}
            </p>
            <div className="form-group row">
              <p className="card-text col-lg-2">Time</p>
              <p className="card-text col-lg-10">
                {"{"}Time{"}"}
              </p>
            </div>
            <div className="form-group row mb-0">
              <div className="col-lg-12 ml-lg-auto">
                <div className="d-flex justify-content-between align-items-center">
                  <button type="submit" className="btn btn-danger">
                    Delete Reminder
                  </button>
                  <button type="submit" className="btn  btn-secondary">
                    Edit Reminder
                    <i className="icon-paperplane ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ReminderRender;
