import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import TodoCard from './TodoCard';

export default function TodoList() {
  const items = [<TodoCard title="title 1" isCompleted />,
    <TodoCard title="title 2" isCompleted />, <TodoCard title="title 3" isCompleted />, <TodoCard title="title 4" isCompleted />];
  return (
    <Box sx={{ maxHeight: '100%' }}>
      <Grid container item xs={12} align="center" justifyContent="center">
        <Grid item xs={3}>
          <Typography color="inherit">
            Todo
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            In-progress
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            Done!
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} style={{ padding: '20px' }} align="center" justifyContent="center">
        <Grid container item xs={3} rowSpacing={2} sx={{ border: '1px solid white', paddingBottom: '10px', marginRight: 3 }}>
          {items.map((item) => (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {item}
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={3} rowSpacing={2} sx={{ border: '1px solid white', paddingBottom: '10px', marginRight: 3 }}>
          {items.map((item) => (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {item}
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={3} rowSpacing={2} sx={{ border: '1px solid white', paddingBottom: '10px' }}>
          {items.map((item) => (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {item}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
