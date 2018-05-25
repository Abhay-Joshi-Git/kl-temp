import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import cases from 'containers/cases/_store/reducer';
import casesSagas from 'containers/cases/_store/sagas';
import authentication from 'containers/authentication/_store/reducer';

const rootReducer = combineReducers({
  cases,
  authentication
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(casesSagas.fetchCasesWatcher);

export default store;
