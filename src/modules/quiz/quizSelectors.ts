import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store';

import { TQuestion } from './quizSlice';

export type TQuizStage = 'finished' | 'playing';

export const changeStage = (userAnswers: boolean[]): TQuizStage =>
  userAnswers.length === 10 ? 'finished' : 'playing';

export const getCurrentQuestion = (
  questions: TQuestion[],
  userAnswers: boolean[],
) => {
  const currentQuestionIndex = userAnswers.length;

  return questions[currentQuestionIndex];
};

export const calculateProgress = (userAnswers: boolean[]) =>
  (userAnswers.length + 1) * 10;

export const calculateScore = (
  questions: TQuestion[],
  userAnswers: boolean[],
) =>
  userAnswers.reduce(
    (score, answer, currentIndex) =>
      answer === questions[currentIndex].answer ? ++score : score,
    0,
  );

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
  ({ userAnswers }): TQuizStage => changeStage(userAnswers),
);

export const currentQuestionSelector = createSelector(
  selectQuiz,
  ({ questions, userAnswers }) => getCurrentQuestion(questions, userAnswers),
);

export const quizProgressSelector = createSelector(
  selectQuiz,
  ({ userAnswers }) => calculateProgress(userAnswers),
);

export const quizScoreSelector = createSelector(
  selectQuiz,
  ({ questions, userAnswers }) => calculateScore(questions, userAnswers),
);
