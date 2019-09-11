import React,{useContext,useEffect} from 'react';
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
	return (
	<div className="grid-2">
	<div>
	<SymptomFilter/>
    <Symptoms/>
	</div>		
	<div>
	<SelectedSymptoms/>
    {/* <button onCLick={onClick}>Get analysis!</button> */}
	</div>
			
	</div>
	);
};

export default SymptomRender;