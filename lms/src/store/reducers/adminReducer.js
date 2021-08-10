import {
  SET_AUTHENTICATED,
  SET_ERRORS,
  LOADING_SIGNIN,
  LOADING_SIGNIN_DONE,
} from '../contructors';

const initialState = {
  authenticated: true,
  userCredentials: [],
  error: '',
  loading: false,
};

const AdminReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_ERRORS:
      console.log('ass=>', actions.payload);
      return {
        ...state,
        error: actions.payload,
      };

    case LOADING_SIGNIN_DONE:
      return {
        ...state,
        loading: false,
        error: '',
      };

    case LOADING_SIGNIN:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        error: '',
      };
    default:
      return state;
  }
};

export default AdminReducer;
