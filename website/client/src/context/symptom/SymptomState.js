import React,{useReducer} from 'react';
import axios from 'axios';
import SymptomContext from './symptomContext';
import SymptomReducer from './symptomReducer';

import {
	GET_SYMPTOMS,
SET_CURRENT,
CLEAR_CURRENT,
FILTER_SYMPTOMS,
CLEAR_CONTACTS,
CLEAR_FILTER,
SYMPTOM_ERROR,
ADD_SELECT
}
from '../types';

const SymptomState=props=>{
	const initialState={
		symptoms:null,
		current:null,
		selectedsymptoms:null,
		filtered:null,
		error:null
		
	};
	const [state,dispatch]=useReducer(SymptomReducer,initialState);
	
	//get contacts

	const getSymptoms=async ()=>{
		try {
			const res=await axios.get('/api/contacts');
			//the only difference that this ill be where i declare a json object with all symptoms
			dispatch({type:GET_SYMPTOMS,payload:res.data});
		} catch (error) {
			dispatch({type:SYMPTOM_ERROR,
			payload:error.response.msg
			});
		}
		
	}
	
	const addSelectedSymptom= symptom=>{
		dispatch({type:ADD_SELECT,payload:symptom});
	}
	const deleteSelectedSymptom=async selectedsymptom=>{
		dispatch({type:DELETE_CONTACT,payload:selectedsymptom});
	}

//clear contacts
const clearContacts=contact=>{
	dispatch({type:CLEAR_CONTACTS});
}	

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
					setCurrent,
					clearCurrent,
					filterSymptoms,
					clearFilter,
					getSymptoms,
					clearSymptoms,
					addSelectedSymptom,
					deleteSelectedSymptom
			
			}}>
		{props.children}
		</SymptomContext.Provider>
	);

};
export default SymptomState;