import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SymptomContext from "../../../context/symptom/symptomContext";
import SelectedSymptomItem from "./SelectedSymptomItem";
// import Spinner from '../layout/Spinner';
const SelectedSymptoms = () => {
  const symptomContext = useContext(SymptomContext);
  const { selectedsymptoms,getSelectedSymptoms,loading } = symptomContext;
  useEffect(()=>{
		getSelectedSymptoms();
		//eslint-disable-next-line
	},[])
  return (
    <Fragment>
      {!loading ? (
        <TransitionGroup>
          {selectedsymptoms !== null ? (
            selectedsymptoms.map(selectedsymptom => (
              <CSSTransition
                key={selectedsymptom._id}
                timeout={500}
                classNames="item"
              >
                <SelectedSymptomItem selectedsymptom={selectedsymptom} />
              </CSSTransition>
            ))
          ) : (
            <h1>Please add some symptoms!</h1>
          )}
        </TransitionGroup>
      ) : (
        // <Spinner />
        <h1>Loading</h1>
      )}
    </Fragment>
  );
};
export default SelectedSymptoms;
