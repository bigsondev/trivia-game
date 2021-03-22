import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: [],
  userAnswers: [],
  currentQuestionIndex: 0,
  stage: 'NOT_STARTED',

  isLoading: false,
  isError: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    fetch: (state) => ({ ...state, data: [], isLoading: true, isError: false }),
    fetchSuccess: (state, action) => ({
      ...state,
      data: action.payload,
      isLoading: false,
      isError: false,
    }),
    fetchFailure: (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
  },
});

export const { actions: quizActions, reducer: quizReducer } = quizSlice;
