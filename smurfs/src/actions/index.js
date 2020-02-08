import axios from "axios";


export const FETCH = 'FETCH'

// GET
export const GET_SMURFS = 'GET_SMURFS'
export const ERROR = 'ERROR'

// POST
export const ADD_SMURF = 'ADD_SMURF'

// GET 
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH })
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    dispatch({ type: GET_SMURFS, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err.errorResponse})
  })
}

// POST
export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: FETCH })
  axios
  .post('http://localhost:3333/smurfs', newSmurf)
  .then(res => {
    dispatch({ type: ADD_SMURF, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err.errorResponse})
  })
}