import React,{useContext,useEffect,Fragment} from 'react';
import axios from 'axios';
import SideBar from "../../layout/SideBar";
import Symptoms from './Symptoms';
import SymptomFilter from './SymptomFilter';
import SelectedSymptoms from './SelectedSymptoms'
import Results from './Results';
import AuthContext from '../../../context/auth/authContext';
import SymptomContext from '../../../context/symptom/symptomContext';
const SymptomRender=()=>{
const authContext=useContext(AuthContext);
const symptomContext=useContext(SymptomContext);
const {getResults,results}=symptomContext;
useEffect(()=>{
	authContext.loadUser();
	getResults();
	//eslint-disable-next-line
},[]);
	return (<Fragment>
		<div class="page-content">
<SideBar/>
<div className="content-wrapper">
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
	<div className="col-lg-4">
		<Results/>
	</div>
	
	</div>
	</div>
	</div>
	</div>
	
	</Fragment>
	);
};

export default SymptomRender;