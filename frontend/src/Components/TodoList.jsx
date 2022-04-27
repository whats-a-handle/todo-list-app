/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CreateItemForm from './CreateItemForm';
import TodoCard from './TodoCard';

export default function TodoList() {
  const [todoItems, setTodoItems] = useState({});
  const [allTimeTodoCount, setAllTimeTodoCount] = useState(0);

  // eslint-disable-next-line max-len
  const inProgressTodos = () => Object.values(todoItems).filter((item) => item.isCompleted === false);
  const completedTodos = () => Object.values(todoItems).filter((item) => item.isCompleted === true);
  const createTodoItem = (args) => {
    const { title, description } = args;
    const newTodo = {
      title,
      description,
      isCompleted: false,
      id: allTimeTodoCount.toString(),
      position: Object.values(todoItems).length,
    };
    setTodoItems((prevTodoItems) => ({ ...prevTodoItems, [newTodo.id]: newTodo }));
    setAllTimeTodoCount(allTimeTodoCount + 1);
  };
  const markTodoItem = (id) => {
    setTodoItems((prevTodoItems) => ({
      ...prevTodoItems,
      [id]: {
        ...prevTodoItems[id],
        isCompleted: !prevTodoItems[id].isCompleted,
      },
    }));
  };

  const deleteTodoItem = (id) => {
    const newToDoItems = { ...todoItems };
    delete newToDoItems[id];
    setTodoItems(newToDoItems);
  };

  const moveItem = (id, position) => {
    setTodoItems((prevTodoItems) => (
      {
        ...prevTodoItems,
        [id]: {
          ...prevTodoItems[id],
          position,
        },
      }));
  };

  const sortItems = (items) => items.sort((a, b) => a.position - b.position);

  const updateTodoItem = (item) => {
    setTodoItems((prevItems) => ({ ...prevItems, [item.id]: { ...item } }));
  };

  React.useEffect(() => {
    console.log(`Items Updated: ${JSON.stringify(todoItems)}`);
  }, [todoItems]);
  const renderTodoCards = (items) => {
    const todoItemsForSorting = [...items];
    let todoCards = [];
    sortItems(todoItemsForSorting);
    if (todoItemsForSorting !== null && todoItemsForSorting !== undefined) {
      todoCards = todoItemsForSorting.map((item) => (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <TodoCard
            item={item}
            deleteTodoItem={deleteTodoItem}
            markTodoItem={markTodoItem}
            updateTodoItem={updateTodoItem}
          />
        </Grid>
      ));
    }
    return todoCards;
  };
  return (
    <>
      <Box style={{ width: '60%', marginBottom: '.5rem' }}>
        <CreateItemForm createTodoItem={createTodoItem} />
      </Box>
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
            {renderTodoCards(inProgressTodos())}
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
            {renderTodoCards(completedTodos())}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
