import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import TodoCard from './TodoCard';

export default function TodoList() {
  const todoColumn = [<TodoCard title="title 1" isCompleted={false} column="todo" />,
    <TodoCard title="title 2" isCompleted={false} column="todo" />, <TodoCard title="title 3" isCompleted={false} column="todo" />, <TodoCard title="title 4" isCompleted={false} column="todo" />];
  const inProgressColumn = [<TodoCard title="title 1" isCompleted={false} column="in_progress" />,
    <TodoCard title="title 2" isCompleted={false} column="in_progress" />, <TodoCard title="title 3" isCompleted={false} column="in_progress" />, <TodoCard title="title 4" isCompleted={false} column="in_progress" />];
  const doneColumn = [<TodoCard title="title 1" isCompleted column="done" />,
    <TodoCard title="title 2" isCompleted column="done" />, <TodoCard title="title 3" isCompleted column="done" />, <TodoCard title="title 4" isCompleted column="done" />];

  return (
    <Box
      sx={{
        maxHeight: '100%',
        maxWidth: '100%',
        width: '100%',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <Grid container item xs={12} align="center" justifyContent="center">
        <Grid
          container
          item
          xs={4}
          rowSpacing={1}
          sx={{
            borderRadius: 3, backgroundColor: 'rgb(246, 247, 248)', paddingBottom: '10px', marginLeft: 1, marginRight: 1, boxShadow: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              Todo
            </Typography>
          </Grid>
          {todoColumn.map((item) => (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {item}
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          item
          xs={4}
          rowSpacing={1}
          sx={{
            borderRadius: 3, backgroundColor: 'rgb(246, 247, 248)', paddingBottom: '10px', marginLeft: 1, marginRight: 1, boxShadow: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              In-progress
            </Typography>
          </Grid>
          {inProgressColumn.map((item) => (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {item}
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={1} />
        <Grid
          container
          item
          xs={2}
          rowSpacing={1}
          sx={{
            borderRadius: 3, backgroundColor: 'rgb(246, 247, 248)', paddingBottom: '10px', boxShadow: 1, marginLeft: 1, marginRight: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              Done!
            </Typography>
          </Grid>
          {doneColumn.map((item) => (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {item}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
