import types from './types';

const casesInitialState = [];

const casesReducer = (state = casesInitialState, action) => {
  switch (action.type) {
    case types.FETCH_CASES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default casesReducer;
