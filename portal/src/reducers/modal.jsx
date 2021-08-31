import types from '../actions/actionTypes';
const initialState = {
  modalData: {},
};

export default function modal(state = initialState.modalData, action = {}) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
