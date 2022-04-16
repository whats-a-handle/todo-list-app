import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ToDoList from './Components/ToDoList';
import CreateItemForm from './Components/CreateItemForm';
import './App.css';

export default function App() {
  const [todoItems, setTodoItems] = useState({});
  const [todoItemsOrderedList, setTodoItemsOrderedList] = useState([]);

  const createTodoItem = (itemName) => {
    const newToDo = {
      itemName,
      isCompleted: false,
      position: 0,
    };

    if (Object.values(todoItems).length > 0) {
      newToDo.position = Object.values(todoItems).length;
    }
    setTodoItems((prevTodoItems) => ({ ...prevTodoItems, [itemName]: newToDo }));
  };

  const markTodoItem = (itemName) => {
    const newIsCompleted = !todoItems[itemName].isCompleted;
    setTodoItems((prevTodoItems) => ({
      ...prevTodoItems,
      [itemName]: {
        ...prevTodoItems[itemName],
        isCompleted: newIsCompleted,
      },
    }));
  };

  const deleteTodoItem = (itemName) => {
    const newToDoItems = { ...todoItems };
    delete newToDoItems[itemName];
    setTodoItems(newToDoItems);
  };

  const moveItem = (itemName, dragPosition) => {
    setTodoItems((prevTodoItems) => (
      {
        ...prevTodoItems,
        [itemName]: {
          ...prevTodoItems[itemName],
          position: dragPosition,
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

  useEffect(() => {
    setTodoItemsOrderedList(sortItems([...Object.values(todoItems)]));
  }, [todoItems]);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} style={{ marginTop: ('5%') }}>
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={8} style={{ backgroundColor: 'white' }}>
              <CreateItemForm createTodoItem={createTodoItem} />
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={8} style={{ backgroundColor: 'white' }}>
              <ToDoList
                markTodoItem={markTodoItem}
                renameTodoItem={renameTodoItem}
                deleteTodoItem={deleteTodoItem}
                moveItem={moveItem}
              >
                {todoItemsOrderedList}
              </ToDoList>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
