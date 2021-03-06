import React,{useState,useContext,useEffect,Fragment} from 'react';
// import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register=(props)=>{
		// const alertContext=useContext(AlertContext);
		const authContext = useContext(AuthContext);

// const{setAlert}=alertContext;
const { register,error,clearErrors,isAuthenticated} = authContext;

useEffect(() => {
   if(isAuthenticated){
	   props.history.push('/');
   }
    if (error === 'User already exists') {
    //   setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error,isAuthenticated,props.history]);

	const [user,setUser]=useState({
        email:'',
		password:'',
		password2:'',
		role:''
	});
	
	const{name,email,password,password2,role}=user;
	const onChange=e=>setUser({...user,[e.target.name]:e.target.value});
						
	const onSubmit=e=>{
		console.log("register called");

	e.preventDefault();
		if(name===''||email===''||password===''||role===''){
			// setAlert('Please enter all fields','danger');
		}
		else if(password!==password2){
			// setAlert('Passwords do not match','danger');
		}
		else{
			register({
                name,
                email,
				password,
				role
			  });
					
		}
				
	}
	return (
<Fragment>

		{/* Page content */}
		<div className="page-content">
		  {/* Main content */}
		  <div className="content-wrapper">
			{/* Content area */}
			<div className="content d-flex justify-content-center align-items-center">
			  {/* Registration form */}
			  <form onSubmit={onSubmit} className="flex-fill">
				<div className="row">
				  <div className="col-lg-6 offset-lg-3">
					<div className="card mb-0">
					  <div className="card-body">
						<div className="text-center mb-3">
						  <i className="icon-plus3 icon-2x text-success border-success border-3 rounded-round p-3 mb-3 mt-1" />
						  <h5 className="mb-0">Create account</h5>
						  <span className="d-block text-muted">All fields are required</span>
						</div>
						<div className="form-group form-group-feedback form-group-feedback-right">
						  <input type="text" 
						  className="form-control" 
						placeholder="Your Name" 
						  value={name} 
						  name="name"
						  onChange={onChange}/>
						  <div className="form-control-feedback">
							<i className="icon-user-plus text-muted" />
						  </div>
						</div>
						<div className="form-group form-group-feedback form-group-feedback-right">
						  <input type="email" 
						  className="form-control" 
						placeholder="Your Email" 
						  value={email} 
						  name="email"
						  onChange={onChange}/>
						  <div className="form-control-feedback">
							<i className="icon-user-plus text-muted" />
						  </div>
						</div>
						
						<div className="row">
						  <div className="col-md-6">
							<div className="form-group form-group-feedback form-group-feedback-right">
							  <input
							   type="password" 
							   className="form-control" 
							   placeholder="Create password"
							   name="password"
							   value={password}
							   onChange={onChange} />
							  <div className="form-control-feedback">
								<i className="icon-user-lock text-muted" />
							  </div>
							</div>
						  </div>
						  <div className="col-md-6">
							<div className="form-group form-group-feedback form-group-feedback-right">
							  <input type="password"
							   className="form-control" 
							   placeholder="Repeat password"
							   name="password2"
							   value={password2}
							   onChange={onChange} />
							  <div className="form-control-feedback">
								<i className="icon-user-lock text-muted" />
							  </div>
							</div>
						  </div>
						</div>
						
						<div>
  <label>Role</label>
  <select style={{marginBottom:"10px"}} placeholder="Select a role" className="form-control select" name="role" value={role} onChange={onChange} >
  <option>Select a role</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
</div>
						<button type="submit" className="btn bg-teal-400 btn-labeled btn-labeled-right"><b><i className="icon-plus3" /></b> Create account</button>
					  </div>
					</div>
				  </div>
				</div>
			  </form>
			  {/* /registration form */}
			</div>
			{/* /content area */}
			
		  </div>
		  {/* main content */}
		</div>
		{/* page content */}
		</Fragment>
	
	);
}

export default Register;
