import { Box, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { Heading } from '@components';

export const Home = () => {
  const { push } = useHistory();

  const handleQuizBeginClick = () => {
    push('/quiz');
  };

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading>
        Welcome to the <br />
        Trivia Challenge!
      </Heading>
      <Typography variant="body1" align="center">
        You will be presented <br /> with 10 True or False <br />
        questions.
      </Typography>
      <Typography variant="body1">Can you score 100%?</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleQuizBeginClick}
      >
        Begin
      </Button>
    </Box>
  );
};
