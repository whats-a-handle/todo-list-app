import React, { useEffect, useState} from 'react';
import ToDoList from './Components/ToDoList'
import CreateItemForm from './Components/CreateItemForm'
import {Container,Grid} from '@mui/material';
import update from "immutability-helper";

import './App.css';
export default function App() {
  const [todoItems, setTodoItems] = useState({});
  const [todoItemsOrderedList,setTodoItemsOrderedList] = useState([]);

  const createToDoItem = (itemName,index)=>{
    const newToDo = {
      itemName : itemName,
      isCompleted : false,
      index : null, 
    };

    if(todoItemsOrderedList.length > 0){
      newToDo.index = todoItemsOrderedList[todoItemsOrderedList.length-1].index+1//used for positioning
    }
    else{
      newToDo.index = 0;
    }
    setTodoItemsOrderedList((todoItemsOrderedList)=>[...todoItemsOrderedList,newToDo]);
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

  const moveItem = (itemName,dragIndex, hoverIndex) => {
    // Get the dragged element
    const draggedItem = todoItems[itemName];
    draggedItem.index = dragIndex;
    setTodoItems((todoItems)=>({...todoItems,[itemName] : {...todoItems[itemName], index:dragIndex} }));
};

const sortItems = (items)=>{
  return items.sort((a, b) => a.index - b.index);
}

useEffect(()=>{
  const newOrderedList = [...Object.values(todoItems)];
  setTodoItemsOrderedList(sortItems([...newOrderedList]));
},[todoItems]);

// We will pass this function to ImageList and then to Image -> Quite a bit of props drilling, the code can be refactored and place all the state management in ImageList itself to avoid props drilling. It's an exercise for you :)
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

