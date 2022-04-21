import { Container, Grid } from '@mui/material';
import React from 'react';
import TodoList from './TodoList';

export default function HomePage() {
  return (
    <Container
      style={{ backgroundColor: 'gray', height: '100vh', maxWidth: '100vw' }}
    >
      <Grid container justifyContent="center">
        <Grid
          container
          item
          lg={12}
          sx={{ boxShadow: 3 }}
          style={{
            backgroundColor: 'lightgrey',
            justifyContent: 'center',
            maxWidth: '80%',
          }}
        >
          <TodoList />
        </Grid>
      </Grid>
    </Container>
  );
}
