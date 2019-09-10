import React,{useContext,useRef,useEffect} from 'react';
import SymptomContext from '../../../context/symptom/symptomContext';
const SymptomFilter=()=>{
	const symptomContext=useContext(SymptomContext);
	
	const text=useRef('');
	
	const{filterSymptoms,clearFilter,filtered}=symptomContext;
	
	useEffect(()=>{
		if(filtered===null){
			text.current.value='';
		}
	})
	
	const onChange=e=>{
		
		if(text.current.value!==''){
			filterSymptoms(e.target.value);
		}
		else{
			clearFilter();
		}
	}
	
	
	return (
	<form>
	<input ref={text} type="text" placeholder="Filter Symptoms..."
		onChange={onChange}
		/>
	</form>
	);	
}
export default SymptomFilter;