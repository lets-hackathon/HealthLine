import React, { Fragment,useEffect,useContext,useState} from "react";
import SideBar from "../../layout/SideBar";
import AuthContext from '../../../context/auth/authContext';
import RecordContext from "../../../context/record/recordContext";
import axios from 'axios';
const RecordForm = () => {
  const authContext=useContext(AuthContext);
  const recordContext=useContext(RecordContext);
  const {addRecord}=recordContext;
	useEffect(()=>{
		authContext.loadUser();
		//eslint-disable-next-line
  },[])
  
 const [record,setRecord]=useState({
    image:'',
    subjectId:'',
    description:'',
    selectedFile:null
  });
  const {subjectId,description,selectedFile,image}=record;
  
 const onChangeHandler=event=>{
    setRecord({
      selectedFile: event.target.files[0]
        })
  }
	const onChange=e=>{   
    setRecord({...record,[e.target.name]:e.target.value})};

const onClickHandler = async e => {
  const data = new FormData()
  data.append('file',selectedFile)
  const res=await axios.post("http://localhost:5000/api/upload", data);
  console.log(res.data);
  setRecord({
    image:res.data
  });
}
  const onSubmit=e=>{
    e.preventDefault();
			addRecord(record);
		setRecord({
    image:'',
    subjectId:'',
    description:'',
    selectedFile:null
		});
  }
  return (
    <Fragment>
      <div className="page-content">
        <SideBar />
        <div className="container-fluid">
          <div className="card" style={{ marginTop: "25px" }}>
            <div className="card-header header-elements-inline">
              <h6 className="card-title">Submit Personal Record</h6>
             
            </div>

            <div className="card-body" style={{}}>
            <div className="form-group row">
                  <label className="col-form-label col-lg-2">Upload Image:</label>
                  <div className="col-lg-10">
                    <input type="file" onChange={onChangeHandler} className="form-control-file" />
                  </div>
                  <button type="button" class="btn btn-success btn-block" onClick={onClickHandler}>Upload</button> 

                </div>
              <form onSubmit={onSubmit}>
                <div className="form-group row">
                  <label className="col-form-label col-lg-2">Title:</label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      name="subjectId"
                      value={subjectId}
                      onChange={onChange}
                      className="form-control"
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
                      name='description'
                      value={description}
                      onChange={onChange}
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
