import { LinearProgress, Box } from '@components';

interface IQuizProgressProps {
  progress: number;
}

export const QuizProgressBar = ({ progress }: IQuizProgressProps) => {
  return (
    <Box position="absolute" width="100%" top="0">
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};
