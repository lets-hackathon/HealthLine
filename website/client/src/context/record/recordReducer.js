import {
    GET_RECORDS,
    ADD_RECORD,
    DELETE_RECORD,
    RECORD_ERROR
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_RECORDS:
        return {
          ...state,
          records: action.payload,
          loading: false
        };
      case ADD_RECORD:
        return {
          ...state,
          // records: [action.payload, ...state.records],
          loading: false
        };
      case DELETE_RECORD:
        return {
          ...state,
          records: state.records.filter(
            record => record._id !== action.payload
          ),
          loading: false
        };
      case RECORD_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };