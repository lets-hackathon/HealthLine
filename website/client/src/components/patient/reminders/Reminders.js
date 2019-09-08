import React,{Fragment,useContext,useEffect} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import SideBar from "../../layout/SideBar";

import ReminderContext from '../../../context/reminder/reminderContext'; 
import ReminderRender from './ReminderRender';
// import Spinner from '../layout/Spinner';
const Reminders=()=>{
	const reminderContext=useContext(ReminderContext);
	const {reminders,getReminders,loading}=reminderContext;
	
	useEffect(()=>{
		getReminders();
		//eslint-disable-next-line
	},[])
	
	
	if(reminders!==null&&reminders.length===0&&!loading){
	return <h4>Please add a Contact</h4>;	
	}
	return(
	<Fragment>
		{reminders!==null&&!loading ? (<TransitionGroup>
			{
			reminders.map( reminder=>(
			<CSSTransition key={reminder._id} timeout={500} classNames="item" >

			<ReminderRender  reminder={reminder}/>
				</CSSTransition>
			))
			}
</TransitionGroup>): <Spinner/> }
			
	</Fragment>
	);
}
export default Reminders;