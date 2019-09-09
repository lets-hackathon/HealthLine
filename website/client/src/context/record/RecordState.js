import React,{useReducer} from 'react';
import axios from 'axios';
import RecordContext from './recordContext';
import RecordReducer from './recordReducer';

import {
	GET_RECORDS,
ADD_RECORD,
DELETE_RECORD,
RECORD_ERROR
}
from '../types';

const RecordState=props=>{
	const initialState={
		records:null,
		current:null,
		filtered:null,
		error:null
	};
	const [state,dispatch]=useReducer(RecordReducer,initialState);
	
	//get contacts

	const getRecords=async ()=>{
		

		try {
			const res=await axios.get('/api/patient/records');
			dispatch({type:GET_RECORDS,payload:res.data});
		} catch (error) {
			dispatch({type:RECORD_ERROR,
			payload:error.response.msg
			});
		}
		
	}
	
	
	//add contact
	const addRecord=async record=>{
		const config={
			headers:{
			'Content-Type':'application/json'
			}
		}

		try {
			const res=await axios.post('/api/patient/records',record,config)
			dispatch({type:ADD_RECORD,payload:res.data});
		} catch (error) {
			dispatch({type:RECORD_ERROR,
			payload:error.response.msg
			});
		}
		
	}
	//update contact
// const updateRecord=async record=>{
// 	const config={
// 		headers:{
// 		'Content-Type':'application/json'
// 		}
// 	}

// 	try {
// 		const res=await axios.put(`/api/patient/records/${record._id}`,record,config)
// 		dispatch({type:UPDATE_RECORD,payload:res.data});
// 	} catch (error) {
// 		dispatch({type:RECORD_ERROR,
// 		payload:error.response.msg
// 		});
// 	}

	
// }	
    //delete contact
	
const deleteRecord=async id=>{
	try {
		await axios.delete(`/api/patient/records/${id}`)
		dispatch({type:DELETE_RECORD,payload:id});
	} catch (error) {
		dispatch({type:RECORD_ERROR,
		payload:error.response.msg
		});
	}
		
	}	

//clear contacts
// const clearRecords=record=>{
// 	dispatch({type:CLEAR_RECORDS});
// }	

	//set current contact

// const setCurrent=record=>{
// 		dispatch({type:SET_CURRENT,payload:record});
// 	}	
// 	// clear current contact
// const clearCurrent=()=>{
// 		dispatch({type:CLEAR_CURRENT});
// 	}	
	
// 	//filter contact
// const filterContacts=text=>{
// 		dispatch({type:FILTER_RECORDS,payload:text});
// 	}	

// 	//clear filter
// const clearFilter=()=>{
// 		dispatch({type:CLEAR_FILTER});
// 	}	
	
	return(
		<RecordContext.Provider 
			value={{
				records:state.records,
				error:state.error,
					addRecord,
					deleteRecord,
					getRecords,
			}}>
		{props.children}
		</RecordContext.Provider>
	);

};
export default RecordState;