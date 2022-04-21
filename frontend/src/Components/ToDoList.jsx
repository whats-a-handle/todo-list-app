import * as React from 'react';
import { Grid } from '@mui/material';
import TodoCard from './TodoCard';

function TodoList() {
  const items = [<TodoCard title="title 1" isCompleted />,
    <TodoCard title="title 2" isCompleted />, <TodoCard title="title 3" isCompleted />, <TodoCard title="title 4" isCompleted />];
  return (
    <Grid container item xs={12} spacing={2} style={{ padding: 20 }} align="center">
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          {item}
        </Grid>
      ))}
    </Grid>
  );
}

export default TodoList;
