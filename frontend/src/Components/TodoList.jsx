import * as React from 'react';
import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import TodoCard from './TodoCard';
import CreateItemForm from './CreateItemForm';

const columnStyles = {
  sx: {
    borderRadius: 3,
    backgroundColor: 'rgb(246, 247, 248)',
    paddingBottom: '1.5%',
    marginBottom: '1%',
    boxShadow: 1,
  },
};

const columnContainerStyles = {
  style: {
    maxHeight: '100%',
    maxWidth: '100%',
    width: '100%',
    paddingTop: '2%',
    paddingBottom: '2%',

  },
};

const formContainerStyles = {
  style: {
    width: '60%', marginBottom: '.5rem',
  },
};

const columnNameStyles = {
  style: {
    paddingLeft: '1.6rem',
  },
};

const todoCardItemStyle = {
  style: { width: '100%' },
};

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
      index: Object.values(todoItems).length,
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

  const sortItems = (items) => items.sort((a, b) => a.index - b.index);

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
        <Grid item key={item.id} style={todoCardItemStyle.style}>
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
      <Box style={formContainerStyles.style}>
        <CreateItemForm createTodoItem={createTodoItem} />
      </Box>
      <Box style={columnContainerStyles.style}>
        <Grid container item xs={12} align="center" justifyContent="space-around" style={columnContainerStyles.style}>
          <Grid container item xs={5.5} sm={5} rowSpacing={1} sx={columnStyles.sx}>
            <Grid container item xs={12} style={columnNameStyles.style}>
              <Typography>
                Todo
              </Typography>
            </Grid>
            {renderTodoCards(inProgressTodos())}
          </Grid>
          <Grid container item xs={5.5} sm={5} rowSpacing={1} sx={columnStyles.sx}>
            <Grid container item xs={12} style={columnNameStyles.style}>
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
