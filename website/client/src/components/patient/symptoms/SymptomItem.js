import React,{useContext} from 'react';
import SymptomContext from '../../../context/symptom/symptomContext';
const SymptomItem=({symptom})=>{
	const symptomContext=useContext(SymptomContext);
	const{addSelectedSymptom,clearFilter,getResults}=symptomContext;
	const onClickHandler=()=>{
		addSelectedSymptom(symptom);
		clearFilter();
		getResults();
	}

	const {name}=symptom;
	
	return(
	
	< div className = "ui card" id="choose_sym">
	<h3 className="text-primary">
		{name}{''}
	</h3>	
	<p>
			<button 
				className="btn btn-dark btn-sm"
				onClick={onClickHandler} >Add Symptom</button>
		    {/* <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button> */}

			</p>
	</div>
	);

}
export default SymptomItem;