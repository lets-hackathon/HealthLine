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
        name:'',
        email:'',
		password:'',
		password2:''
		
	});
	
	const{name,email,password,password2}=user;
	const onChange=e=>setUser({...user,[e.target.name]:e.target.value});
						
	const onSubmit=e=>{
	e.preventDefault();
		if(name===''||email===''||password===''){
			// setAlert('Please enter all fields','danger');
		}
		else if(password!==password2){
			// setAlert('Passwords do not match','danger');
		}
		else{
			register({
                name,
                email,
				password
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
			  <form action="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/index.html" className="flex-fill">
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
						  <input type="text" className="form-control" placeholder="Choose username" />
						  <div className="form-control-feedback">
							<i className="icon-user-plus text-muted" />
						  </div>
						</div>
						<div className="row">
						  <div className="col-md-6">
							<div className="form-group form-group-feedback form-group-feedback-right">
							  <input type="text" className="form-control" placeholder="First name" />
							  <div className="form-control-feedback">
								<i className="icon-user-check text-muted" />
							  </div>
							</div>
						  </div>
						  <div className="col-md-6">
							<div className="form-group form-group-feedback form-group-feedback-right">
							  <input type="text" className="form-control" placeholder="Second name" />
							  <div className="form-control-feedback">
								<i className="icon-user-check text-muted" />
							  </div>
							</div>
						  </div>
						</div>
						<div className="row">
						  <div className="col-md-6">
							<div className="form-group form-group-feedback form-group-feedback-right">
							  <input type="password" className="form-control" placeholder="Create password" />
							  <div className="form-control-feedback">
								<i className="icon-user-lock text-muted" />
							  </div>
							</div>
						  </div>
						  <div className="col-md-6">
							<div className="form-group form-group-feedback form-group-feedback-right">
							  <input type="password" className="form-control" placeholder="Repeat password" />
							  <div className="form-control-feedback">
								<i className="icon-user-lock text-muted" />
							  </div>
							</div>
						  </div>
						</div>
						<div className="row">
						  <div className="col-md-6">
							<div className="form-group form-group-feedback form-group-feedback-right">
							  <input type="email" className="form-control" placeholder="Your email" />
							  <div className="form-control-feedback">
								<i className="icon-mention text-muted" />
							  </div>
							</div>
						  </div>
						  <div className="col-md-6">
							<div className="form-group form-group-feedback form-group-feedback-right">
							  <input type="email" className="form-control" placeholder="Repeat email" />
							  <div className="form-control-feedback">
								<i className="icon-mention text-muted" />
							  </div>
							</div>
						  </div>
						</div>
						<div className="form-group">
						  <div className="form-check">
							<label className="form-check-label">
							  <input type="checkbox" className="form-input-styled" defaultChecked data-fouc />
							  Send me <a href="#">test account settings</a>
							</label>
						  </div>
						  <div className="form-check">
							<label className="form-check-label">
							  <input type="checkbox" className="form-input-styled" defaultChecked data-fouc />
							  Subscribe to monthly newsletter
							</label>
						  </div>
						  <div className="form-check">
							<label className="form-check-label">
							  <input type="checkbox" className="form-input-styled" data-fouc />
							  Accept <a href="#">terms of service</a>
							</label>
						  </div>
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


// 	<div className="form-container">
// 		<h1>
// 		Account <span className="text-primary">Register</span>	
// 			</h1>
			
// 			<form onSubmit={onSubmit}>
// <div className="form-group" >
// 				<label htmlFor="name">Name</label>
// 		<input type="text" name="name" value={name} onChange={onChange} required />
				
// 				</div>
               
// 			<div className="form-group" >
// 				<label htmlFor="email">Email Address</label>
// 		<input type="email" name="email" value={email} onChange={onChange} required />
				
// 				</div>
				
// <div className="form-group" >
// 				<label htmlFor="password">Password</label>
// 		<input type="password" 
// 			name="password" 
// 			value={password} 
// 			onChange={onChange}
// 			required
// 			minLength="6"
// 			/>
				
// 				</div>
// <div className="form-group" >
// 				<label htmlFor="password2">Confirm Password</label>
// 		<input type="password" 
// 			name="password2" 
// 			value={password2} 
// 			onChange={onChange}
// 			required
// 			minLength="6"
// 			/>
				
// 				</div>
// 				<input type="submit" value="Register" 
// 					className="btn btn-primary btn-block"/>
// 			</form>
// 		</div>