import React, { useState} from 'react';
import ToDoList from './Components/ToDoList'
import CreateItemForm from './Components/CreateItemForm'
import {Container,Grid} from '@mui/material';
import './App.css';
export default function App() {
  const [todoItems, setTodoItems] = useState({});
  
  const createToDoItem = (itemName)=>{
    const newToDo = {itemName : itemName,isCompleted : false};
    setTodoItems((todoItems) => ({...todoItems, [itemName] : newToDo}));
  };

  const markToDoItem = (itemName) =>{
    const newIsCompleted = !todoItems[itemName].isCompleted;
    setTodoItems((todoItems) => ({...todoItems, [itemName] : {...todoItems[itemName], isCompleted:newIsCompleted }}))
  }

  const deleteToDoItem = (itemName) =>{
    const newToDoItems = {...todoItems};
    delete newToDoItems[itemName];
    setTodoItems(newToDoItems)
    
  } 
  return (
      <Container>
        <Grid container>
         <Grid item xs={12} >
           <Grid container >
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8} style={{backgroundColor:'white'}}>
              <CreateItemForm createToDoItem={createToDoItem} />
            </Grid>
            <Grid item xs={2}></Grid>
           </Grid>
          </Grid>
          <Grid item xs={12} >
            <Grid container  >
              <Grid item xs={2}/>
              <Grid item xs={8} style={{backgroundColor:'white'}}>
               <ToDoList markToDoItem={markToDoItem} deleteToDoItem={deleteToDoItem}>{Object.values(todoItems)}</ToDoList>
              </Grid>
              <Grid item xs={2}/>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  );
}

