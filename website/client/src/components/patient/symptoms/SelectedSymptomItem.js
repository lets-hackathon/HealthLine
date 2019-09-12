import React,{useContext} from 'react';
import SymptomContext from '../../../context/symptom/symptomContext';
const SelectedSymptomItem=({selectedsymptom})=>{
	
	const symptomContext=useContext(SymptomContext);
	const{deleteSelectedSymptom,getResults}=symptomContext;

	const {name,_id}=selectedsymptom;
	// console.log(name);
	return(
	
	<div className='card bg-light'>
	<h3 className="text-primary text-left">
		{name}{''}
	</h3>	
	<p>
			<button 
				className="btn btn-dark btn-sm"
				onClick={()=>{deleteSelectedSymptom(_id);
				getResults()}} >Delete Symptom</button>
		    {/* <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button> */}

			</p>
	</div>
	);

}
export default SelectedSymptomItem;