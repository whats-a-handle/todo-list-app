import * as React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ToDoListItem from './TodoListItem'
export default function ToDoList(props){
return (
<Grid container>
  <Grid item xs={12} /*style={{backgroundColor:'green'}}*/>
    <Typography variant="h6" component="div">{props.toDoListName}</Typography>
    <List>{props.children.map((item)=>{
      return <ToDoListItem markToDoItem={props.markToDoItem} deleteToDoItem={props.deleteToDoItem} key={item.itemName} itemName={item.itemName} isCompleted={item.isCompleted} ></ToDoListItem>
    })}</List>
  </Grid>
</Grid>)
}