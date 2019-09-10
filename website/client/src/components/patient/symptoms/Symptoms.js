import React,{Fragment,useContext,useEffect} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import SymptomContext from '../../../context/symptom/symptomContext'; 
import SymptomItem from './SymptomItem';
// import Spinner from '../layout/Spinner';
const Symptoms=()=>{
	const symptomContext=useContext(SymptomContext);
	const {symptoms,filtered,getSymptoms,loading}=contactContext;
	
	useEffect(()=>{
		getSymptoms();
		//eslint-disable-next-line
	},[])
	
	
	// if(contacts!==null&&contacts.length===0&&!loading){
	// return <h4>Please add a Contact</h4>;	
	// }
	return(
	<Fragment>
		{!loading ? (<TransitionGroup>
			{
			filtered!==null?
			filtered.map( symptom =>(
				<CSSTransition key={symptom._id} timeout={500} classNames="item" >
			<SymptomItem  symptom={symptom}/>
					</CSSTransition>
			))
			:<h1>Please tell us how you are feeling!</h1>
			}
</TransitionGroup>): <Spinner/> }
			
	</Fragment>
	);
}
export default Symptoms;