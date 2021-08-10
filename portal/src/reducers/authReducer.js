import types from '../actions/actionTypes';

const initialState = {
  authStatus: true,
  errorDetails: false
};

export default function authReducer(state = initialState, actions = {}) {
  switch (actions.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, authStatus: true };
    case types.LOGIN_ERROR:
      return { ...state, errorDetails: true };
    case types.LOGOUT:
      return { ...state, authStatus: false, errorDetails: true };
    case types.REMOVE_ERRORS_ONCHANGE:
      return { ...state, errorDetails: false };
    default: return state;
  }
}
