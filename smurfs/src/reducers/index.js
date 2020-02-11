import { 
    FETCH,
    GET_SMURFS,
    ERROR,
    ADD_SMURF } from '../actions'
  
   const initialState ={
     smurfs: [],
     fetchingSmurfs: false,
     addingSmurf: false,
     updatingSmurf: false,
     deletingSmurf: false,
     error: null
   }
  
   export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH: 
      return { ...state, fetchingSmurfs: true }
      case GET_SMURFS:
      return { ...state, fetchingSmurfs: false, smurfs: action.payload }
      case ERROR:
      return { ...state, fetchingSmurfs: false, error: action.payload }
      case ADD_SMURF:
      return { ...state, smurfs: action.payload, addingSmurf: true }
      default:
      return state
    }
   }