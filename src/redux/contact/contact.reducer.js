import ContactActionTypes from './contact.types'

const INITIAL_STATE ={
  error: null,
  isSending:false
}

const contactReducer = (state = INITIAL_STATE, action)=>{
  switch (action.type) {
    case ContactActionTypes.CONTACT_START:
        return{
          ...state,
          error:null,
          isSending:true
        }
    case ContactActionTypes.CONTACT_SUCCESS:
    return{
      ...state,
      error:null,
      isSending:false
    }
    case ContactActionTypes.CONTACT_FAILURE:
      return{
        ...state,
        error:action.payload,
        isSending:false
      }
      
  
    default:
      return state;
    
  }
}
export default contactReducer;
