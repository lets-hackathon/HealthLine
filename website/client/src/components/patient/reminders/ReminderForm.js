import React, { Fragment,useContext,useState,useEffect} from "react";
import TimePicker from 'react-time-picker'
import SideBar from "../../layout/SideBar";
import ReminderContext from '../../../context/reminder/reminderContext'
import AuthContext from '../../../context/auth/authContext';

const ReminderForm = () => {
  const authContext=useContext(AuthContext);

	useEffect(()=>{
		authContext.loadUser();
		//eslint-disable-next-line
	},[])
  const reminderContext=useContext(ReminderContext);
	
	const{addReminder}=reminderContext;
	const [reminder,setReminder]=useState(
	{
	
    message:'',
    medname:'',
		time:''		
	});
	const{message,medname,time}=reminder;
  const onChanger= time => setReminder({ time })
	const onChange=e=>{
    console.log(medname);
   
    setReminder({...reminder,[e.target.name]:e.target.value})};

	const onSubmit=e=>{
    e.preventDefault();
    console.log(medname);
    console.log(message);
    console.log(time);
			addReminder(reminder);
		
	
		setReminder({
    message:'',
    medname:'',
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
            <TimePicker
          onChange={onChanger}
          value={time}
        />
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
