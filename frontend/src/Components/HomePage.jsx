import { Container, Grid } from '@mui/material';
import React from 'react';

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
            maxWidth: '90%',
          }}
        />
      </Grid>
    </Container>
  );
}
