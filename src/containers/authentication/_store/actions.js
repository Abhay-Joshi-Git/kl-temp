import types from './types';

const setLogedIn = payload => ({
  type: types.SET_LOGGED_IN,
  payload
});

export default {
  setLogedIn
};
