import { put, takeEvery } from 'redux-saga/effects';
import types from './types';
import apis from '../apis';

function* fetchCases() {
  try {
    const cases = yield apis.fetchCases();
    yield put({ type: types.FETCH_CASES_SUCCESS, payload: cases });
  } catch (error) {
    yield put({ type: types.FETCH_CASES_FAILURE, payload: error });
  }
}

function* fetchCasesWatcher() {
  yield takeEvery(types.FETCH_CASES, fetchCases);
}

export default {
  fetchCasesWatcher,
};
