import React,{useState,useContext,useEffect,Fragment} from 'react';
import AuthContext from '../../context/auth/authContext';
// import AlertContext from '../../context/alert/alertContext';

const Login=(props)=>{
	// const alertContext=useContext(AlertContext);
		const authContext = useContext(AuthContext);
	
		// const{setAlert}=alertContext;
		const { login,error,clearErrors,isAuthenticated} = authContext;
		useEffect(() => {
			if(isAuthenticated){
				props.history.push('/profile');
			}
			 if (error === 'Invalid Credentials') {
			//    setAlert(error, 'danger');
			   clearErrors();
			 }
			 // eslint-disable-next-line
		   }, [error,isAuthenticated,props.history]);
		const [user,setUser]=useState({
		
		email:'',
		password:'',
		role:''
	});
	
	const{email,password,role}=user;
	const onChange=e=>setUser({...user,[e.target.name]:e.target.value});
						
	const onSubmit=e=>{
	e.preventDefault();
	if(email===''||password===''||role===''){
		// setAlert('Please fill in all fields','danger');
	}
	else{
		login({
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
            {/* Login form */}
            <form className="login-form" onSubmit={onSubmit}>
              <div className="card mb-0">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1" />
                    <h5 className="mb-0">Login to your account</h5>
                    <span className="d-block text-muted">Enter your credentials below</span>
                  </div>
                  <div className="form-group form-group-feedback form-group-feedback-left">
					<input type="text" 
					className="form-control" 
					placeholder="Email"
					name="email"
					value={email}
					onChange={onChange} />
                    <div className="form-control-feedback">
                      <i className="icon-user text-muted" />
                    </div>
                  </div>
                  <div className="form-group form-group-feedback form-group-feedback-left">
					<input type="password"
					 className="form-control"
					  placeholder="Password"
					  name="password"
					  value={password}
					  onChange={onChange} />
                    <div className="form-control-feedback">
                      <i className="icon-lock2 text-muted" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                  </div>
  <select style={{marginBottom:"10px"}} placeholder="Select a role" className="form-control select" name="role" value={role} onChange={onChange} >
  <option>Select a role</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
		  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Sign in <i className="icon-circle-right2 ml-2" /></button>
                  </div>
                </div>
              </div>
            </form>
            {/* /login form */}
          </div>
          {/* /content area */}
    
        </div>
        {/* /main content */}
      </div>
      {/* /page content */}
 
		</Fragment>
	);
}

export default Login;

{/* <div className="form-container">
<h1>
Account <span className="text-primary">Login</span>	
	</h1>
	
	<form onSubmit={onSubmit}>

	<div className="form-group" >
		<label htmlForm="email">Email Address</label>
<input type="email" name="email" value={email} onChange={onChange}/>
		
		</div>
<div className="form-group" >
		<label htmlForm="password">Password</label>
<input type="password" 
	name="password" 
	value={password} 
	onChange={onChange}/>
		
		</div>

		<input type="submit" value="Login" 
			className="btn btn-primary btn-block"/>
	</form>
</div> */}