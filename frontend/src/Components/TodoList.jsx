import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import TodoCard from './TodoCard';

export default function TodoList() {
  const items = [<TodoCard title="title 1" isCompleted />,
    <TodoCard title="title 2" isCompleted />, <TodoCard title="title 3" isCompleted />, <TodoCard title="title 4" isCompleted />];
  return (
    <Box sx={{ maxHeight: '100%' }}>
      <Grid container item xs={12} style={{ padding: '20px' }} align="center" justifyContent="center">
        <Grid
          container
          item
          xs={3}
          rowSpacing={2}
          sx={{
            borderRadius: 3, border: '1px solid rgb(246, 247, 248)', backgroundColor: 'rgb(246, 247, 248)', paddingBottom: '10px', marginRight: 3, boxShadow: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              Todo
            </Typography>
          </Grid>
          {items.map((item) => (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {item}
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          item
          xs={3}
          rowSpacing={2}
          sx={{
            borderRadius: 3, border: '1px solid white', backgroundColor: 'rgb(246, 247, 248)', paddingBottom: '10px', marginRight: 3, boxShadow: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              In-progress
            </Typography>
          </Grid>
          {items.map((item) => (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {item}
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          item
          xs={3}
          rowSpacing={2}
          sx={{
            borderRadius: 3, border: '1px solid white', backgroundColor: 'rgb(246, 247, 248)', paddingBottom: '10px', boxShadow: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              Done!
            </Typography>
          </Grid>
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
