import {
  Box,
  Grid,
  Typography,
  Button,
  LinearProgress,
} from '@material-ui/core';

import { useFetching } from '@store';
import { Heading } from '@components';

import { quizActions } from './quizSlice';

export const Quiz = () => {
  useFetching(quizActions.fetch);

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <div>
        <Heading>Entertainment: Video Games</Heading>
        <Box mt="0.5rem">
          <LinearProgress variant="determinate" value={0} />
        </Box>
      </div>
      <Box
        border="1px solid black"
        height="25vh"
        padding="2rem"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="body1" align="center" paragraph>
          Unturned originally started as a Roblox game.
        </Typography>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary">
              YES
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              NO
            </Button>
          </Grid>
        </Grid>
      </Box>
      <div />
    </Box>
  );
};
