import * as React from 'react';
import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import TodoCard from './TodoCard';

const initialTodoItemsState = {
  todo: [],
  inProgress: [],
  done: [],
};

export default function TodoList() {
  // eslint-disable-next-line no-unused-vars
  const [todoItems, setTodoItems] = useState(initialTodoItemsState);

  const renderTodoCards = (items) => {
    let todoCards = [];
    if (items !== null && items !== undefined) {
      todoCards = items.map((item) => {
        const {
          title, description, isCompleted, dueDate, column,
        } = item;
        return (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TodoCard
              title={title}
              description={description}
              isCompleted={isCompleted}
              dueDate={dueDate}
              column={column}
            />
          </Grid>
        );
      });
    }
    return todoCards;
  };
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
      <Grid
        container
        item
        xs={12}
        align="center"
        justifyContent="center"
      >
        <Grid
          container
          item
          xs={4}
          rowSpacing={1}
          sx={{
            borderRadius: 3,
            backgroundColor: 'rgb(246, 247, 248)',
            paddingBottom: '10px',
            marginLeft: 1,
            marginRight: 1,
            boxShadow: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              Todo
            </Typography>
          </Grid>
          {renderTodoCards(todoItems.todo)}
        </Grid>
        <Grid
          container
          item
          xs={4}
          rowSpacing={1}
          sx={{
            borderRadius: 3,
            backgroundColor: 'rgb(246, 247, 248)',
            paddingBottom: '10px',
            marginLeft: 1,
            marginRight: 1,
            boxShadow: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              In-progress
            </Typography>
          </Grid>
          {renderTodoCards(todoItems.inProgress)}
        </Grid>
        <Grid container item xs={1} />
        <Grid
          container
          item
          xs={2}
          rowSpacing={1}
          sx={{
            borderRadius: 3,
            backgroundColor: 'rgb(246, 247, 248)',
            paddingBottom: '10px',
            boxShadow: 1,
            marginLeft: 1,
            marginRight: 1,
          }}
        >
          <Grid container item xs={12} align="left" sx={{ paddingLeft: 4 }}>
            <Typography>
              Done!
            </Typography>
          </Grid>
          {renderTodoCards(todoItems.done)}
        </Grid>
      </Grid>
    </Box>
  );
}
