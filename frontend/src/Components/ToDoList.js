import * as React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ToDoListItem from './TodoListItem'
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export default function ToDoList(props){
return (
<Grid container>
  <Grid item xs={12} /*style={{backgroundColor:'green'}}*/>
    <Typography variant="h6" component="div">{props.toDoListName}</Typography>
    <DndProvider backend={HTML5Backend}>
    <List>{props.children.map((item,index)=>{
      return <ToDoListItem markToDoItem={props.markToDoItem} 
      deleteToDoItem={props.deleteToDoItem} 
      key={item.itemName} index={index} itemName={item.itemName} 
      isCompleted={item.isCompleted} moveItem={props.moveItem}>
      </ToDoListItem>
    })}</List>
    </DndProvider>
  </Grid>
</Grid>)
}