import {takeLatest, put, all, call} from 'redux-saga'
import ContactActionTypes from './contact.types'
import {
  contactFailure,
  contactStart,
  contactSuccess
} from './contact.actions'

export function* contact({payload:{email,name,message}}){

  try{
    const send = z
  }
  catch(error){
    yield put(contactFailure(error))
  }
}
