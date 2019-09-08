import React,{useReducer} from 'react';
import axios from 'axios';
import ReminderContext from './reminderContext';
import ReminderReducer from './reminderReducer';

import {
	GET_REMINDERS,
ADD_REMINDER,
DELETE_REMINDER,
REMINDER_ERROR
}
from '../types';

const ReminderState=props=>{
	const initialState={
		reminders:null,
		error:null		
	};
	const [state,dispatch]=useReducer(ReminderReducer,initialState);
	
	//get reminders

	const getReminders=async ()=>{
		

		try {
			const res=await axios.get('http://localhost:5000/api/patient/reminder');
			dispatch({type:GET_REMINDERS,payload:res.data});
		} catch (error) {
			dispatch({type:REMINDER_ERROR,
			payload:error.response.msg
			});
		}
		
    }
    
	//add contact
	const addReminder=async reminder=>{
		const config={
			headers:{
			'Content-Type':'application/json'
			}
		}

		// try {
			const res=await axios.post('http://localhost:5000/api/patient/reminder',reminder,config)
			dispatch({type:ADD_REMINDER,payload:res.data});
		// } 
		
		// catch (error) {
		// 	dispatch({type:REMINDER_ERROR,
		// 	payload:error.response.msg
		// 	});
		// }
		
	}
	
	
const deleteReminder=async id=>{
	try {
		await axios.delete(`http://localhost:5000/api/patient/reminder/${id}`)
		dispatch({type:DELETE_REMINDER,payload:id});
	} catch (error) {
		dispatch({type:REMINDER_ERROR,
		payload:error.response.msg
		});
	}
		
	}	
	
	return(
		<ReminderContext.Provider 
			value={{
				reminders:state.reminders,
				error:state.error,
					addReminder,
					deleteReminder,
					getReminders,
					
			}}>
		{props.children}
		</ReminderContext.Provider>
	);

};
export default ReminderState;