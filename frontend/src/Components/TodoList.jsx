/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import TodoCard from './TodoCard';
import CreateItemForm from './CreateItemForm';

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

  const renameTodoItem = (oldItemName, newItemName) => {
    if (!(newItemName in todoItems)) {
      const updatedItems = { ...todoItems };
      const renamedItem = { ...todoItems[oldItemName] };
      delete updatedItems[oldItemName];
      renamedItem.itemName = newItemName;
      setTodoItems({ ...updatedItems, [newItemName]: { ...renamedItem } });
    }
  };

  React.useEffect(() => {
    console.log(JSON.stringify(todoItems));
  }, [todoItems]);
  /*
   useEffect(() => {
    setTodoItemsOrderedList(sortItems([...Object.values(todoItems)]));
  }, [todoItems]); */
  const renderTodoCards = (items) => {
    const todoItemsForSorting = [...items];
    let todoCards = [];
    sortItems(todoItemsForSorting);
    if (todoItemsForSorting !== null && todoItemsForSorting !== undefined) {
      todoCards = todoItemsForSorting.map((item) => {
        const {
          title, description, isCompleted, id, position,
        } = item;
        return (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TodoCard
              title={title}
              description={description}
              isCompleted={isCompleted}
              deleteTodoItem={deleteTodoItem}
              markTodoItem={markTodoItem}
              id={id}
              position={position}
            />
          </Grid>
        );
      });
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
