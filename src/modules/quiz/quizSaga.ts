import { call, takeEvery, put, StrictEffect } from 'redux-saga/effects';

import { fetchQuizData, IQuizData } from '@api';

import { quizActions } from './quizSlice';

const transformQuizData = ({ results }: IQuizData) =>
  results.map(({ category, question, correct_answer }) => ({
    category,
    question,
    answer: correct_answer === 'True' ? true : false,
  }));

export function* fetchDataSaga(): Generator<StrictEffect, void, any> {
  try {
    const data: IQuizData = yield call(fetchQuizData);

    yield put(quizActions.fetchSuccess(transformQuizData(data)));
  } catch (e) {}
}

export function* quizSaga() {
  yield takeEvery(quizActions.fetch().type, fetchDataSaga);
}
