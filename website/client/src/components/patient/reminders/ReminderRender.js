import React, { Fragment,useContext } from "react";
import ReminderContext from '../../../context/reminder/reminderContext'; 

const ReminderRender = ({reminder}) => {
  const reminderContext=useContext(ReminderContext);
	const{deleteReminder}=reminderContext;

	const {_id,medname,message,time}=reminder;
	const onDelete=()=>{
		deleteReminder(_id);
	}
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="card" style={{ marginTop: "25px" }}>
          {medname&&(<div className="card-header header-elements-inline">
            <h3 className="card-title">
              {medname}
            </h3>
          </div>)}
         <div className="card-body">
         {message&&(<p className="card-text">
              {message}
            </p>)}
            {time&&(<div className="form-group row">
              <p className="card-text col-lg-2">Time</p>
              <p className="card-text col-lg-10">
                {time}
              </p>
            </div>)}
            <div className="form-group row mb-0">
              <div className="col-lg-12 ml-lg-auto">
                <div className="d-flex justify-content-between align-items-center">
                  <button type="submit" onClick={onDelete} className="btn btn-danger">
                    Delete Reminder
                  </button>
                  {/* <button type="submit" className="btn  btn-secondary">
                    Edit Reminder
                    <i className="icon-paperplane ml-2" />
                  </button> */}
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
