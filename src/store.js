import cases from 'containers/cases/_store/reducer';
// import authentication from 'containers/authentication/_store/reducer';
import createStore from 'unistore'

const store = createStore({
  isAuthenticated: false,
  testString: 'testString'
});

export default store;