import React, { useState, useEffect } from 'react';
import ToDoList from './Components/ToDoList'
import ToDoListItem from './Components/TodoListItem'
import CreateItemForm from './Components/CreateItemForm'
import {Container,Grid} from '@mui/material';



export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const createToDoItem = (itemName)=>{
    const newToDo = (<ToDoListItem itemName={itemName}/>);
    setTodoItems((todoItems) => [...todoItems,newToDo]);
  }
  return (
      <Container style={{backgroundColor:'red'}}>
        <Grid container style={{backgroundColor:'blue'}}>
          <Grid item xs={12}>
            <CreateItemForm createToDoItem={createToDoItem}/>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2}/>
              <Grid item xs={8}>
                <ToDoList > {todoItems} </ToDoList>
              </Grid>
              <Grid item xs={2}/>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  );
}

