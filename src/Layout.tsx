import { ReactNode } from 'react';
import { Container, Box, Paper, makeStyles } from '@material-ui/core';

interface ILayoutProps {
  children: ReactNode;
}

const useStyles = makeStyles({
  paperHolder: {
    height: '100%',
    padding: '1rem',
  },
});

export const Layout = ({ children }: ILayoutProps) => {
  const { paperHolder } = useStyles();

  return (
    <Container maxWidth="sm">
      <Box height="100vh" padding="2rem 0.5rem">
        <Paper className={paperHolder}>{children}</Paper>
      </Box>
    </Container>
  );
};
