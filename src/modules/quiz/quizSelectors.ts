import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store';

export type TQuizStage = 'finished' | 'playing';

const selectSelf = (state: RootState) => state;
const selectQuiz = createSelector(selectSelf, (state) => state.quiz);

export const fetchingSelector = createSelector(
  selectQuiz,
  ({ isLoading, isError }) => ({
    isLoading,
    isError,
  }),
);

export const questionsSelector = createSelector(
  selectQuiz,
  ({ questions }) => questions,
);

export const userAnswersSelector = createSelector(
  selectQuiz,
  ({ userAnswers }) => userAnswers,
);

export const quizStageSelector = createSelector(
  selectQuiz,
  ({ userAnswers }): TQuizStage =>
    userAnswers.length === 10 ? 'finished' : 'playing',
);

export const currentQuestionSelector = createSelector(
  selectQuiz,
  ({ questions, userAnswers }) => {
    const currentQuestionIndex = userAnswers.length;

    return questions[currentQuestionIndex];
  },
);

export const quizProgressSelector = createSelector(
  selectQuiz,
  ({ userAnswers }) => (userAnswers.length + 1) * 10,
);

export const quizScoreSelector = createSelector(
  selectQuiz,
  ({ userAnswers, questions }) => {
    return userAnswers.reduce(
      (score, answer, currentIndex) =>
        answer === questions[currentIndex].answer ? ++score : score,
      0,
    );
  },
);
