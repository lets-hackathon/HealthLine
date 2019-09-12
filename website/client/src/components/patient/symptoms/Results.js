import React,{Fragment,useContext,useEffect} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import SymptomContext from '../../../context/symptom/symptomContext'; 
import ResultItem from './ResultItem';
// import Spinner from '../layout/Spinner';
const Results=()=>{
	const symptomContext=useContext(SymptomContext);
	const {results,getResults,loading}=symptomContext;
	
	useEffect(()=>{
        getResults();
        console.log(results);
		//eslint-disable-next-line
	},[])
	
	
	// if(contacts!==null&&contacts.length===0&&!loading){
	// return <h4>Please add a Contact</h4>;	
	// }
	return(
	<Fragment>
		{!loading ? (<TransitionGroup>
			{
			results.map( result =>(
				<CSSTransition timeout={500} classNames="item" >
			<ResultItem  result={result}/>
					</CSSTransition>
			))
			}
</TransitionGroup>): <h1>Loading</h1> }
			
	</Fragment>
	);
}
export default Results;