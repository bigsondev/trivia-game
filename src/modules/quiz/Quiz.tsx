import { useFetching } from '@store';

import { quizActions } from './quizSlice';

export const Quiz = () => {
  useFetching(quizActions.fetch);

  return <div>Hello Quiz</div>;
};
