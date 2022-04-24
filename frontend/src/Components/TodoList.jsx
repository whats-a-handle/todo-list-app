import * as React from 'react';
import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import TodoCard from './TodoCard';

const initialTodoItemsState = {
  todo: [{
    title: 'Clean your room',
    description: 'Wash linens, clothes, and floor, rugs etc',
    isCompleted: false,
  }],
  done: [{
    title: 'Title Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isCompleted: true,
  }],
};

export default function TodoList() {
  // eslint-disable-next-line no-unused-vars
  const [todoItems, setTodoItems] = useState(initialTodoItemsState);

  const renderTodoCards = (items) => {
    let todoCards = [];
    if (items !== null && items !== undefined) {
      todoCards = items.map((item) => {
        const {
          title, description, isCompleted,
        } = item;
        return (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TodoCard
              title={title}
              description={description}
              isCompleted={isCompleted}
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
        paddingTop: '2%',
        paddingBottom: '2%',
      }}
    >
      <Grid
        container
        item
        xs={12}
        align="center"
        justifyContent="space-around"
      >
        <Grid
          container
          item
          xs={5.5}
          sm={5}
          md={5}
          lg={5}
          xl={5}
          rowSpacing={1}
          sx={{
            borderRadius: 3,
            backgroundColor: 'rgb(246, 247, 248)',
            paddingBottom: '1.5%',
            marginBottom: '1%',
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
          xs={5.5}
          sm={5}
          md={5}
          lg={5}
          xl={5}
          rowSpacing={1}
          sx={{
            borderRadius: 3,
            backgroundColor: 'rgb(246, 247, 248)',
            paddingBottom: '1.5%',
            marginBottom: '1%',
            boxShadow: 1,
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
