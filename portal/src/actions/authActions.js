import actionTypes from './actionTypes';

const initialCredentials = {
  studentID: 'chirume',
  position: 'pharmacist',
  password: 'biwQi0-tizjip-zuvcis',
};

export function signIn(credentials, cb) {
  return (dispatch) => {
    if (
      initialCredentials.studentID.toLowerCase().trimEnd() ===
        credentials.studentID.toLowerCase().trimEnd() &&
      initialCredentials.password === credentials.password.trimEnd()
    ) {
      dispatch({ type: actionTypes.LOGIN_SUCCESS });
      cb();
    } else {
      dispatch({ type: actionTypes.LOGIN_ERROR });
    }
  };
}

export function signOut(cb) {
  return (dispatch) => {
    dispatch({ type: actionTypes.LOGOUT });
    cb();
  };
}

export function clearErrors() {
  return (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_ERRORS_ONCHANGE });
  };
}
