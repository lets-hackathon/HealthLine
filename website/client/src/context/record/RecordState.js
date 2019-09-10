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
	
	//get records
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
	
	//add record
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