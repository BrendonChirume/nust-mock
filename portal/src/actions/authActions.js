import actionTypes from './actionTypes';

const initialCredentials = {
  username: 'brenDon',
  position: 'pharmacist',
  password: 'chirume',
};

export function signIn(credentials, cb) {
  return (dispatch) => {
    if (
      initialCredentials.username.toLowerCase().trimEnd() ===
        credentials.username.toLowerCase().trimEnd() &&
      initialCredentials.position.toLowerCase() ===
        credentials.position.toLowerCase() &&
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
