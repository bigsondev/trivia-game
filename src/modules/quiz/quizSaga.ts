import { call, takeEvery, put } from 'redux-saga/effects';

import { quizActions } from './quizSlice';

export function* fetchDataSaga(): Generator<string, void, boolean> {
  try {
    yield '5';
  } catch (e) {}
}

export function* quizSaga() {
  yield takeEvery(quizActions.fetch().type, fetchDataSaga);
}
