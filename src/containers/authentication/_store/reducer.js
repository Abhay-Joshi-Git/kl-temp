import types from './types';

const authInitialState = {
  isAuthenticated: false
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case types.SET_LOGGED_IN:
      return Object.assign({}, state, {
        isAuthenticated: action.payload
      });
    default:
      return state;
  }
};

export default authReducer;
