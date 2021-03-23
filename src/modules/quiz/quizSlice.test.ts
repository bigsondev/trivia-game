import { quizReducer, initialState, quizActions } from './quizSlice';

describe('quizSlice reducers', () => {
  it('should handle saveUserAnswer reducer', () => {
    const userAnswerOne = true;
    const userAnswerTwo = false;
    const resultOne = { ...initialState, userAnswers: [userAnswerOne] };
    const resultTwo = {
      ...initialState,
      userAnswers: [userAnswerOne, userAnswerTwo],
    };

    expect(
      quizReducer(initialState, quizActions.saveUserAnswer(userAnswerOne)),
    ).toEqual(resultOne);

    expect(
      quizReducer(resultOne, quizActions.saveUserAnswer(userAnswerTwo)),
    ).toEqual(resultTwo);
  });

  it('should handle fetch reducer', () => {
    const result = {
      ...initialState,
      userAnswers: [],
      isLoading: true,
      isError: false,
    };

    expect(quizReducer(initialState, quizActions.fetch())).toEqual(result);
  });

  it('should handle fetchSuccess reducer', () => {
    const questions = [
      { question: 'que?', answer: true, category: 'Pasa' },
      { question: 'pasa?', answer: false, category: 'Que' },
    ];

    const result = {
      ...initialState,
      questions,
      isLoading: false,
      isError: false,
    };

    expect(
      quizReducer(initialState, quizActions.fetchSuccess(questions)),
    ).toEqual(result);
  });

  it('should handle fetchFailure reducer', () => {
    const result = {
      ...initialState,
      isLoading: false,
      isError: true,
    };

    expect(quizReducer(initialState, quizActions.fetchFailure())).toEqual(
      result,
    );
  });
});
