import { call, takeEvery, put, StrictEffect } from 'redux-saga/effects';
import he from 'he';

import { fetchQuizData, IQuizData } from '@api';

import { quizActions, TQuestion } from './quizSlice';

const transformQuizData = ({ results }: IQuizData): TQuestion[] =>
  results.map(({ category, question, correct_answer }) => ({
    category: he.decode(category),
    question: he.decode(question),
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
