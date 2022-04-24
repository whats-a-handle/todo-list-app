import { Container, Grid } from '@mui/material';
import React from 'react';
import TodoList from './TodoList';

export default function HomePage() {
  return (
    <Container
      style={{ backgroundColor: 'lightgrey', height: '100vh', maxWidth: '100%' }}
    >
      <Grid container justifyContent="center" style={{ width: '100%' }}>
        <Grid
          container
          item
          lg={12}
          style={{
            backgroundColor: 'lightgray',
            justifyContent: 'center',
          }}
        >
          <TodoList />
        </Grid>
      </Grid>
    </Container>
  );
}
