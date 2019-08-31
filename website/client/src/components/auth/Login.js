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
				props.history.push('/');
			}
			 if (error === 'Invalid Credentials') {
			//    setAlert(error, 'danger');
			   clearErrors();
			 }
			 // eslint-disable-next-line
		   }, [error,isAuthenticated,props.history]);
		const [user,setUser]=useState({
		
		email:'',
		password:''
	});
	
	const{email,password}=user;
	const onChange=e=>setUser({...user,[e.target.name]:e.target.value});
						
	const onSubmit=e=>{
	e.preventDefault();
	if(email===''||password===''){
		// setAlert('Please fill in all fields','danger');
	}
	else{
		login({
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
            {/* Login form */}
            <form className="login-form" action="http://demo.interface.club/limitless/demo/bs4/Template/layout_1/LTR/default/full/index.html">
              <div className="card mb-0">
                <div className="card-body">
                  <div className="text-center mb-3">
                    <i className="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1" />
                    <h5 className="mb-0">Login to your account</h5>
                    <span className="d-block text-muted">Enter your credentials below</span>
                  </div>
                  <div className="form-group form-group-feedback form-group-feedback-left">
                    <input type="text" className="form-control" placeholder="Username" />
                    <div className="form-control-feedback">
                      <i className="icon-user text-muted" />
                    </div>
                  </div>
                  <div className="form-group form-group-feedback form-group-feedback-left">
                    <input type="password" className="form-control" placeholder="Password" />
                    <div className="form-control-feedback">
                      <i className="icon-lock2 text-muted" />
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Sign in <i className="icon-circle-right2 ml-2" /></button>
                  </div>
                  <div className="text-center">
                    <a href="login_password_recover.html">Forgot password?</a>
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