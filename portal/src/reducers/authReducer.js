import actionTypes from '../actions/actionTypes';

const initialState = {
  authStatus: false,
  errorDetails: false,
};

export default function authReducer(state = initialState, actions = {}) {
  switch (actions.type) {
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, authStatus: true };
    case actionTypes.LOGIN_ERROR:
      return { ...state, errorDetails: true };
    case actionTypes.LOGOUT:
      return { ...state, authStatus: false, errorDetails: true };
    case actionTypes.REMOVE_ERRORS_ONCHANGE:
      return { ...state, errorDetails: false };
    default:
      return state;
  }
}
