import React,{useReducer} from 'react';
import axios from 'axios';
import SymptomContext from './symptomContext';
import SymptomReducer from './symptomReducer';

import {
	GET_SYMPTOMS,
FILTER_SYMPTOMS,
CLEAR_FILTER,
SYMPTOM_ERROR,
ADD_SELECT,
DELETE_SELECT,
GET_SELECTEDSYMPTOMS,
GET_RESULTS
}
from '../types';

const SymptomState=props=>{
	const initialState={
		symptoms:null,
		current:null,
		selectedsymptoms:null,
		filtered:null,
		error:null,
		results:[]
		
	};
	const [state,dispatch]=useReducer(SymptomReducer,initialState);
	
	//get contacts

	const getSymptoms=async ()=>{
		try {
			const res=await axios.get('/api/symptoms');
			//the only difference that this ill be where i declare a json object with all symptoms
			dispatch({type:GET_SYMPTOMS,payload:res.data});
		} catch (error) {
			dispatch({type:SYMPTOM_ERROR,
			payload:error.response.msg
			});
		}
		
	}
	
	const getSelectedSymptoms=async ()=>{
		try {
			const res=await axios.get('/api/selectedsymp');
			//the only difference that this ill be where i declare a json object with all symptoms
			dispatch({type:GET_SELECTEDSYMPTOMS,payload:res.data});
		} catch (error) {
			dispatch({type:SYMPTOM_ERROR,
			payload:error.response.msg
			});
		}
		
	}
	const getResults=async()=>{
		try {
			const res=await axios.get('/api/results');
			console.log(res.data.predictions);
			dispatch({type:GET_RESULTS,payload:res.data.predictions});
		} catch (error) {
			dispatch({type:SYMPTOM_ERROR,
			payload:error.response.msg
			});
		}

	}
	
	const addSelectedSymptom=async symptom=>{
		const config={
			headers:{
			'Content-Type':'application/json'
			}
		}
		try {
			const res=await axios.post('/api/selectedsymp',symptom,config)
			console.log("woohoo");
			dispatch({type:ADD_SELECT,payload:res.data});
		} catch (error) {
			dispatch({type:SYMPTOM_ERROR,
			payload:error.response.msg
			});
		}

	}
	const deleteSelectedSymptom=async id=>{
		try {
			await axios.delete(`/api/selectedsymp/${id}`)
			dispatch({type:DELETE_SELECT,payload:id});
		} catch (error) {
			dispatch({type:SYMPTOM_ERROR,
			payload:error.response.msg
			});
		}
			
		}	

//clear contacts
// const clearContacts=contact=>{
// 	dispatch({type:CLEAR_CONTACTS});
// }	

	//set current contact


	
	//filter contact
const filterSymptoms=text=>{
		dispatch({type:FILTER_SYMPTOMS,payload:text});
	}	

	//clear filter
const clearFilter=()=>{
		dispatch({type:CLEAR_FILTER});
	}	
	
	return(
		<SymptomContext.Provider 
			value={{
				symptoms:state.symptoms,
				selectedsymptoms:state.selectedsymptoms,
				error:state.error,
					filtered:state.filtered,
					results:state.results,
					filterSymptoms,
					clearFilter,
					getSymptoms,
					addSelectedSymptom,
					deleteSelectedSymptom,
					getSelectedSymptoms,
					getResults
			}}>
		{props.children}
		</SymptomContext.Provider>
	);

};
export default SymptomState;