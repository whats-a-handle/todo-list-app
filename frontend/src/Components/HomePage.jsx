import { Container, Grid } from '@mui/material';
import React from 'react';
import CreateItemForm from './CreateItemForm';
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
          xs={12}
          sm={8}
          md={6}
          lg={6}
          xl={6}
          justifyContent="center"
          sx={{ marginBottom: 1 }}
        >
          <CreateItemForm />
        </Grid>
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
