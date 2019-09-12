import React,{useContext,useEffect,Fragment} from 'react';
import axios from 'axios';
import Symptoms from './Symptoms';
import SymptomFilter from './SymptomFilter';
import SelectedSymptoms from './SelectedSymptoms'
import AuthContext from '../../../context/auth/authContext';
import SymptomContext from '../../../context/symptom/symptomContext';
const SymptomRender=()=>{
const authContext=useContext(AuthContext);
const symptomContext=useContext(SymptomContext);
// const {getResults,result};
useEffect(()=>{
	authContext.loadUser();
	// getResults();
	
	//eslint-disable-next-line
},[]);
	return (<Fragment>
		<div className="container">
		<div className="row">
	<div className="col-lg-4">
	<div>
	<SymptomFilter/>
    <Symptoms/>
	</div>				
	</div>
	<div className="col-lg-4">
	<div>
	<SelectedSymptoms/>
	</div>
	</div>
	
	</div>
	</div>
	
	</Fragment>
	);
};

export default SymptomRender;