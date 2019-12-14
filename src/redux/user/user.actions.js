import userActionTypes from "./user.type";

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});
export const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndpassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndpassword
});

export const userSession = () => ({
  type: userActionTypes.USER_SESSION
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = error => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error
});
export const signUpStart = UserCredentials => ({ 
  type: userActionTypes.SIGN_UP_START,
  payload: UserCredentials
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload:{user, additionalData}
});
export const signUpFailure = error => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload:error
});
