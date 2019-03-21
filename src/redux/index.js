const API_CALL_REQUEST = 'API_CALL_REQUEST';
const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
const API_CALL_FAILURE = 'API_CALL_FAILURE';
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case API_CALL_REQUEST:
      return {fetching:true, dog:null, error:null};
    case API_CALL_SUCCESS:
      return {fetching:false, dog:action.dog, error:null};
    case API_CALL_FAILURE:
      return {fetching:false, dog:null, error:action.error};
    default:
      return state;
    }
}
