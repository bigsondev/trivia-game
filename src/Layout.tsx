import { ReactNode } from 'react';

import { Container, Box, Paper } from '@components';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => (
  <Container maxWidth="sm">
    <Box height="100vh" padding="1rem 0.5rem">
      <Paper>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          {children}
        </Box>
      </Paper>
    </Box>
  </Container>
);
