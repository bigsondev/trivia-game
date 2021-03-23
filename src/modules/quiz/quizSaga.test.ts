import { takeEvery, call, put } from 'redux-saga/effects';

import * as api from '@api';

import { transformQuizData, fetchDataSaga, quizSaga } from './quizSaga';
import { quizActions } from './quizSlice';

const data: api.IQuizData = { response_code: 0, results: [] };

describe('transformQuizData works', () => {
  it('works', () => {
    const data = {
      response_code: 0 as api.TResponseCode,
      results: [
        {
          category: 'abc',
          correct_answer: 'True' as api.TAnswer,
          difficulty: 'hard' as api.TAnswerDifficulty,
          incorrect_answers: ['False'] as api.TAnswer[],
          question: 'que?',
          type: 'boolean' as api.TAnswerType,
        },
        {
          category: 'cba',
          correct_answer: 'False' as api.TAnswer,
          difficulty: 'easy' as api.TAnswerDifficulty,
          incorrect_answers: ['True'] as api.TAnswer[],
          question: 'pasa?',
          type: 'boolean' as api.TAnswerType,
        },
      ],
    };

    const result = [
      {
        category: 'abc',
        question: 'que?',
        answer: true,
      },
      { category: 'cba', question: 'pasa?', answer: false },
    ];

    expect(transformQuizData(data)).toEqual(result);
  });
});

describe('fetchDataSaga works', () => {
  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks();
  });
  it('should execute happy path', () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify(data));

    const gen = fetchDataSaga();

    expect(gen.next().value).toEqual(call(api.fetchQuizData));
  });
  it('should execute error path', () => {
    const gen = fetchDataSaga();

    expect(gen.next().value).toEqual(call(api.fetchQuizData));

    expect(gen.throw({ error: 'API error' }).value).toEqual(
      put(quizActions.fetchFailure()),
    );

    expect(gen.next().done).toBe(true);
  });
});

describe('quizSaga works', () => {
  const gen = quizSaga();

  expect(gen.next().value).toEqual(
    takeEvery(quizActions.fetch().type, fetchDataSaga),
  );
  expect(gen.next().done).toBe(true);
});
