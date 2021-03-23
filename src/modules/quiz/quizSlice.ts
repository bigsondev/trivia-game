import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TQuestion = {
  category: string;
  question: string;
  answer: boolean;
};

export interface IQuizState {
  questions: TQuestion[];
  userAnswers: boolean[];
  isLoading: boolean;
  isError: boolean;
}

export const initialState: IQuizState = {
  questions: [],
  userAnswers: [],
  isLoading: true,
  isError: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    saveUserAnswer: (state, action: PayloadAction<boolean>) => {
      state.userAnswers = [...state.userAnswers, action.payload];
    },
    fetch: (state) => {
      (state.questions = []),
        (state.userAnswers = []),
        (state.isLoading = true),
        (state.isError = false);
    },
    fetchSuccess: (state, action: PayloadAction<TQuestion[]>) => {
      (state.questions = action.payload), (state.isLoading = false);
    },
    fetchFailure: (state) => {
      (state.isLoading = false), (state.isError = true);
    },
  },
});

export const { actions: quizActions, reducer: quizReducer } = quizSlice;
