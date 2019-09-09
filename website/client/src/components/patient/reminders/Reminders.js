import React,{Fragment,useContext,useEffect} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import SideBar from "../../layout/SideBar";

import ReminderContext from '../../../context/reminder/reminderContext'; 
import ReminderRender from './ReminderRender';
import AuthContext from '../../../context/auth/authContext';

// import Spinner from '../layout/Spinner';
const Reminders=()=>{
	const reminderContext=useContext(ReminderContext);
	const {reminders,getReminders,loading}=reminderContext;
	const authContext=useContext(AuthContext);

	useEffect(()=>{
		authContext.loadUser();
		getReminders();
		//eslint-disable-next-line
	},[])
	
	
	if(reminders!==null&&reminders.length===0&&!loading){
	return <h4>Please add a Contact</h4>;	
	}
	return(
	<Fragment>
<div class="page-content">

<SideBar/>
<div className="content-wrapper">
		{reminders!==null&&!loading ? (<TransitionGroup>
			{
			reminders.map( reminder=>(
			<CSSTransition key={reminder._id} timeout={500} classNames="item" >

			<ReminderRender  reminder={reminder}/>
				</CSSTransition>
			))
			}
</TransitionGroup>): <h1>loading</h1> }
</div>
</div>
			
	</Fragment>
	);
}
export default Reminders;