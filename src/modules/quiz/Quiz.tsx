import { useAppSelector, useFetching } from '@store';
import { LoadingIndicator } from '@components';

import { QuizPlaying } from './QuizPlaying';
import { QuizFinished } from './QuizFinished';
import {
  fetchingSelector,
  quizStageSelector,
  TQuizStage,
} from './quizSelectors';
import { quizActions } from './quizSlice';

const mapStageToQuizComponent: Record<TQuizStage, JSX.Element> = {
  playing: <QuizPlaying />,
  finished: <QuizFinished />,
};

export const Quiz = () => {
  const { isLoading, isError } = useAppSelector(fetchingSelector);
  const quizStage = useAppSelector(quizStageSelector);

  useFetching(quizActions.fetch);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    throw new Error('Failed fetching data from the API');
  }

  return mapStageToQuizComponent[quizStage];
};
