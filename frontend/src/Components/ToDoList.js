import * as React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ToDoList(props){
return (
<Grid container>
  <Grid item xs={12} style={{backgroundColor:'green'}}>
    <Typography variant="h6" component="div">{props.toDoListName}</Typography>
    <List>{props.children}</List>
  </Grid>
</Grid>)
}