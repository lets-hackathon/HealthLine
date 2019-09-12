import React,{useContext,useEffect,Fragment} from 'react';
import Symptoms from './Symptoms';
import SymptomFilter from './SymptomFilter';
import SelectedSymptoms from './SelectedSymptoms'
import AuthContext from '../../../context/auth/authContext';
import SymptomContext from '../../../context/symptom/symptomContext';
const SymptomRender=()=>{
const authContext=useContext(AuthContext);
const symptomContext=useContext(SymptomContext);

useEffect(()=>{
	authContext.loadUser();
	//eslint-disable-next-line
},[]);
	return (<Fragment>
		<div className="container">
		<div className="row">
	<div className="col-lg-6">
	<div>
	<SymptomFilter/>
    <Symptoms/>
	</div>				
	</div>
	<div className="cole-lg-6">
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