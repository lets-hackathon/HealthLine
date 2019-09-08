import React, { Fragment,useContext,useState} from "react";
import TimePicker from 'react-time-picker'
import SideBar from "../../layout/SideBar";
import ReminderContext from '../../../context/reminder/reminderContext'
import moment from 'moment'
const ReminderForm = () => {
  const reminderContext=useContext(ReminderContext);
	
	const{addReminder}=reminderContext;
	const [reminder,setReminder]=useState(
	{
		medname:'',
		message:'',
		time:''		
	});
	
	
	
	
	
	const{medname,message,time}=reminder;
  const onChanger= time => setReminder({ time })
	const onChange=e=>{
    setReminder({...reminder,[e.target.name]:e.target.value})};
	const onSubmit=e=>{
		e.preventDefault();
			addReminder(reminder);
		
	
		setReminder({
			medname:'',
		message:'',
		time:''			
		});
		
	}
	
  return (
    <Fragment>
      <div className="page-content">
        <SideBar />
        <div className="container-fluid">
          <div className="card" style={{ marginTop: "25px" }}>
            <div className="card-header header-elements-inline">
              <h6 className="card-title">Set Reminder</h6>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="form-group row">
                  <label className="col-form-label col-lg-2">
                    Medicine Name:
                  </label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      className="form-control"
                      onChange={onChange}
                      name="medname"
                      value={medname}
                      placeholder="Record Title"
                    />
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
                      onChange={onChange}
                      name="message"
                      value={message}
                      placeholder="Record Descreption"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-lg-2">Time:</label>
                  {/* <div className="col-lg-10">
                    <input
                      type="time"
                      onChange={onChange}
                     name="time"
                     value={moment(time).format('MM-DD-YYYY hh:mma')}
                      className="form-control"
                      placeholder="Record Title"
                    />
                  </div> */}
                  <TimePicker
          onChange={onChanger}
          value={time}
        />
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

      {/* form for setting reminders -DB COLLECTION AND CORRESPONDING FUNCTIONALITIES TO CONNECT 
            TO MESSAGES/DESTOP NOTIFS ETC */}

      {/* form will have 
            medicine name,
             dosage, 
             reminder time, 
             purpose of medicine */}
    </Fragment>
  );
};

export default ReminderForm;
