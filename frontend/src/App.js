import React, { useEffect, useState} from 'react';
import ToDoList from './Components/ToDoList'
import CreateItemForm from './Components/CreateItemForm'
import {Container,Grid} from '@mui/material';
import './App.css';
export default function App() {
  const [todoItems, setTodoItems] = useState({});
  const [todoItemsOrderedList,setTodoItemsOrderedList] = useState([]);

  const createToDoItem = (itemName)=>{
    const newToDo = {
      itemName : itemName,
      isCompleted : false,
      index : 0, 
    };

    if(todoItemsOrderedList.length > 0){
      newToDo.index = todoItemsOrderedList[todoItemsOrderedList.length-1].index+1//used for positioning
    }
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

  const moveItem = (itemName,dragIndex) => {
    setTodoItems((todoItems)=>({...todoItems,[itemName] : {...todoItems[itemName], index:dragIndex} }));
};

  const sortItems = (items)=>{
    return items.sort((a, b) => a.index - b.index);
  }

useEffect(()=>{
  setTodoItemsOrderedList(sortItems([...Object.values(todoItems)]));
},[todoItems]);

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
               <ToDoList markToDoItem={markToDoItem} deleteToDoItem={deleteToDoItem} moveItem={moveItem}>{todoItemsOrderedList}</ToDoList>
              </Grid>
              <Grid item xs={2}/>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  );
}

