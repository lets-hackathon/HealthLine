import React,{useState,useContext,useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register=(props)=>{
		const alertContext=useContext(AlertContext);
		const authContext = useContext(AuthContext);

const{setAlert}=alertContext;
const { register,error,clearErrors,isAuthenticated} = authContext;

useEffect(() => {
   if(isAuthenticated){
	   props.history.push('/');
   }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error,isAuthenticated,props.history]);

	const [user,setUser]=useState({
        name:'',
        age:'',
        avatar:'',
        email:'',
        address:'',
        Phone:'',
        emergencyPhone:'',
		password:'',
		password2:''
		
	});
	
	const{name,age,avatar,email,Address,Phone,EmergenyPhone,password,password2}=user;
	const onChange=e=>setUser({...user,[e.target.name]:e.target.value});
						
	const onSubmit=e=>{
	e.preventDefault();
		if(name===''||email===''||password===''){
			setAlert('Please enter all fields','danger');
		}
		else if(password!==password2){
			setAlert('Passwords do not match','danger');
		}
		else{
			register({
                name,
                age,
                avatar,
                email,
                Address,
                Phone,
                EmergencyPhone,
				password
			  });
					
		}
				
	}
	return (
	<div className="form-container">
		<h1>
		Account <span className="text-primary">Register</span>	
			</h1>
			
			<form onSubmit={onSubmit}>
<div className="form-group" >
				<label htmlFor="name">Name</label>
		<input type="text" name="name" value={name} onChange={onChange} required />
				
				</div>
                <div className="form-group" >
				<label htmlFor="age">Age</label>
		<input type="text" name="age" value={age} onChange={onChange} required />
				
				</div>
			<div className="form-group" >
				<label htmlFor="email">Email Address</label>
		<input type="email" name="email" value={email} onChange={onChange} required />
				
				</div>
				<div className="form-group" >
				<label htmlFor="avatar">Avatar URL</label>
		<input type="text" name="avatar" value={avatar} onChange={onChange}/>
				</div>
				<div className="form-group" >
				<label htmlFor="address">Address</label>
		<input type="text" name="address" value={address} onChange={onChange}/>
				</div>
				<div className="form-group" >
				<label htmlFor="phone">Phone Number</label>
		<input type="text" name="phone" value={phone} onChange={onChange}/>
				</div>
				
<div className="form-group" >
				<label htmlFor="password">Password</label>
		<input type="password" 
			name="password" 
			value={password} 
			onChange={onChange}
			required
			minLength="6"
			/>
				
				</div>
<div className="form-group" >
				<label htmlFor="password2">Confirm Password</label>
		<input type="password" 
			name="password2" 
			value={password2} 
			onChange={onChange}
			required
			minLength="6"
			/>
				
				</div>
				<input type="submit" value="Register" 
					className="btn btn-primary btn-block"/>
			</form>
		</div>
	);
}

export default Register;