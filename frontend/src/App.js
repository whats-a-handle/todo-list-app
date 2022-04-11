import React, { useState, useEffect } from 'react';
import ToDoList from './Components/ToDoList'
import ToDoListItem from './Components/TodoListItem'
import CreateItemForm from './Components/CreateItemForm'
import {Container,Grid} from '@mui/material';

/*
todoitem : {
  name: string,
  id: string (name),
  isCompleted : bool
}



*/

export default function App() {
  const [todoItems, setTodoItems] = useState({});
  
  const createToDoItem = (itemName)=>{
    const newToDo = {itemName : itemName,isCompleted : false};
    setTodoItems((todoItems) => ({...todoItems, [itemName] : newToDo}));
  };

  const markToDoItem = (itemName) =>{
    const newIsCompleted = !todoItems[itemName].isCompleted;
    
    setTodoItems((todoItems) => ({...todoItems, [itemName] : {...todoItems[itemName], isCompleted:newIsCompleted }}))
    console.log(todoItems);
  }

 
  return (

      <Container /*style={{backgroundColor:'red'}}*/>
        <Grid container /*style={{backgroundColor:'blue'}}*/>

         <Grid item xs={12}>
            <CreateItemForm createToDoItem={createToDoItem}/>
          </Grid>
          <Grid item xs={12}>
            <Grid container >
              <Grid item xs={2}/>
              <Grid item xs={8}>
               <ToDoList markToDoItem={markToDoItem}>{Object.values(todoItems)}</ToDoList>
              </Grid>
              <Grid item xs={2}/>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  );
}

