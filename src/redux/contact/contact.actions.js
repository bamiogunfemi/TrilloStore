import ContactActionTypes from './contact.types'


export const contactStart = contactDetails =>({
  type: ContactActionTypes.CONTACT_START,
  payload: contactDetails
});

export const contactSuccess = () =>({
  type:ContactActionTypes.CONTACT_SUCCESS
})

export const contactFailure = error =>({
  type: ContactActionTypes.CONTACT_FAILURE,
  payload:error
})
