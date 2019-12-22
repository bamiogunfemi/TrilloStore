import ContactActionTypes from './contact.types'

const INITIAL_STATE ={
  errorMessage: null,
  successMesage: null,
  isSending:false,
  contact:{}
}

const contactReducer = (state = INITIAL_STATE, action)=>{
  switch (action.type) {
    case ContactActionTypes.CONTACT_START:
        return{
          ...state,
          errorMessage:null,
          successMesage:null,
          isSending:true,
          contact:action.payload
         
        }
    case ContactActionTypes.CONTACT_SUCCESS:
    return{
      ...state,
      successMesage:action.payload,
      errorMessage:null,
      isSending:false,
     
    }
    case ContactActionTypes.CONTACT_FAILURE:
      return{
        ...state,
        errorMessage:action.payload,
        isSending:false,
       
      }
      
  
    default:
      return state;
    
  }
}
export default contactReducer;
