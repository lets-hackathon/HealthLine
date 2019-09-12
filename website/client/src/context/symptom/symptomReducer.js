import {
  GET_SYMPTOMS,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_SYMPTOMS,
  CLEAR_FILTER,
  SYMPTOM_ERROR,
  CLEAR_CONTACTS,
  ADD_SELECT,
  DELETE_SELECT,
  GET_SELECTEDSYMPTOMS,
  GET_RESULTS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SYMPTOMS:
      return {
        ...state,
        symptoms: action.payload,
        loading: false
      };
      case GET_RESULTS:
      return {
        ...state,
        results: action.payload,
        loading: false
      };
      case GET_SELECTEDSYMPTOMS:
      return {
        ...state,
        selectedsymptoms: action.payload,
        loading: false
      };

      case ADD_SELECT:
      return {
        ...state,
        selectedsymptoms: [action.payload, ...state.selectedsymptoms],
        loading: false
      };
      case DELETE_SELECT:
      return {
        ...state,
        selectedsymptoms: state.selectedsymptoms.filter(
          selectedsymptom => selectedsymptom._id !== action.payload
        ),
        loading: false
      };
      case FILTER_SYMPTOMS:
        return {
          ...state,
        filtered: state.symptoms.filter(symptom => {
        const regex = new RegExp(`${action.payload}`, 'gi');
            return (symptom.name.match(regex));              
  })      
  };
    
   
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
   
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case SYMPTOM_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};