import { CircularProgress, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
  loadingIndicatorHolder: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

export const LoadingIndicator = () => {
  const { loadingIndicatorHolder } = useStyles();

  return (
    <Box className={loadingIndicatorHolder}>
      <CircularProgress />
    </Box>
  );
};
