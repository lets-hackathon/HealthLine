import React,{useContext} from 'react';
import SymptomContext from '../../../context/symptom/symptomContext';
const ResultItem=({result})=>{
	const symptomContext=useContext(SymptomContext);
	// const{addSelectedSymptom,clearFilter,getResults}=symptomContext;
	// const onClickHandler=()=>{
	// 	addSelectedSymptom(symptom);
	// 	clearFilter();
	// 	getResults();
	// }

	return(
	<div className='card bg-light'>
	<h3 className="text-primary text-left">
		{result}{''}
	</h3>	
	</div>
	);

}
export default ResultItem;