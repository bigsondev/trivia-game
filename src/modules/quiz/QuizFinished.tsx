import { Heading, Box, Button, Alert, Grid } from '@components';
import { useAppDispatch, useAppSelector } from '@store';

import { quizActions } from './quizSlice';
import {
  quizScoreSelector,
  questionsSelector,
  userAnswersSelector,
} from './quizSelectors';

export const QuizFinished = () => {
  const quizScore = useAppSelector(quizScoreSelector);
  const questions = useAppSelector(questionsSelector);
  const userAnswers = useAppSelector(userAnswersSelector);
  const dispatch = useAppDispatch();

  const handleTryAgainClick = () => {
    dispatch(quizActions.fetch());
  };

  return (
    <>
      <Heading>
        You scored <br /> {quizScore}/10
      </Heading>
      <Box overflow="hidden auto" maxHeight="55vh">
        <Grid container spacing={1}>
          {questions.map(({ question, answer }, index) => {
            const userAnswer = userAnswers[index];
            const isCorrectAnswer = answer === userAnswer;

            return (
              <Grid item xs={12} key={question}>
                <Alert severity={isCorrectAnswer ? 'success' : 'error'}>
                  {question}
                </Alert>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Button variant="contained" color="primary" onClick={handleTryAgainClick}>
        Play again?
      </Button>
    </>
  );
};
