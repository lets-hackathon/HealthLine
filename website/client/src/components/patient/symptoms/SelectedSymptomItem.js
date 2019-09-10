import React,{useContext} from 'react';
import SymptomContext from '../../../context/symptom/symptomContext';
const SelectedSymptomItem=({selectedsymptom})=>{
	
	const symptomContext=useContext(SymptomContext);
	const{deleteSelectedSymptom}=symptomContext;

	const {_id,name,email,phone,type}=selectedsymptom;
	
	return(
	
	<div className='card bg-light'>
	<h3 className="text-primary text-left">
		{name}{''}
	</h3>	
	<p>
			<button 
				className="btn btn-dark btn-sm"
				onClick={()=>deleteSelectedSymptom(selectedsymptom)} >Delete Symptom</button>
		    {/* <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button> */}

			</p>
	</div>
	);

}
export default SelectedSymptomItem;