import {takeLatest, put, all, call} from 'redux-saga/effects'
import ContactActionTypes from './contact.types'
import {
  contactFailure,
  contactSuccess
} from './contact.actions'

export function* contact({payload:{email,name,message}}){

  try{
    const send = `mailto:ayobamiarafat09@gmail.com?subject=${name}Mail%20from%20Trillo&body=${message}`
    yield put(contactSuccess(send))
  }
  catch(error){
    yield put(contactFailure(error))
  }
}
export function* contactStart(){
  yield takeLatest(ContactActionTypes.CONTACT_SUCCESS, contact )
}


export function* contactSaga() {
  yield all([
    call(contactStart)])
}

