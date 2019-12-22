import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.saga";
import { userSagas } from "./user/user.saga";
import {cartSagas} from './cart/cart.saga';
import {contactSaga} from './contact/contact.saga';
export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas), call(contactSaga)]);
}
