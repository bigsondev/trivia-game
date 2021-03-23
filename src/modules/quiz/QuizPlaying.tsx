import { Heading, Box, Typography, Grid, Button } from '@components';
import { useAppDispatch, useAppSelector } from '@store';

import { QuizProgressBar } from './QuizProgressBar';
import { quizActions } from './quizSlice';
import { currentQuestionSelector, quizProgressSelector } from './quizSelectors';

export const QuizPlaying = () => {
  const currentQuestion = useAppSelector(currentQuestionSelector);
  const quizProgress = useAppSelector(quizProgressSelector);
  const dispatch = useAppDispatch();

  const handleYesClick = () => {
    dispatch(quizActions.saveUserAnswer(true));
  };

  const handleNoClick = () => {
    dispatch(quizActions.saveUserAnswer(false));
  };

  const { category, question } = currentQuestion;

  return (
    <>
      <QuizProgressBar progress={quizProgress} />
      <Heading>{category}</Heading>
      <Box
        border="1px solid black"
        height="25vh"
        padding="2rem"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="body1" align="center" paragraph>
          {question}
        </Typography>
      </Box>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={6} sm={4}>
          <Button variant="contained" color="primary" onClick={handleYesClick}>
            YES
          </Button>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Button variant="contained" color="secondary" onClick={handleNoClick}>
            NO
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
