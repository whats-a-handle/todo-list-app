import * as React from 'react';
import ToDoList from './Components/ToDoList'
import ToDoListItem from './Components/TodoListItem'
import CreateItemForm from './Components/CreateItemForm'
import {Container,Grid} from '@mui/material';
export default function App() {
  let myItems = [<ToDoListItem itemName='item 1' itemBody='heres my body'/>,
  <ToDoListItem itemName='item 2' /*no secondary*/ />]

  return (
      <Container style={{backgroundColor:'red'}}>
        <Grid container style={{backgroundColor:'blue'}}>
          <Grid item xs={12}>
            <CreateItemForm />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2}/>
              <Grid item xs={8}>
                <ToDoList > {myItems} </ToDoList>
              </Grid>
              <Grid item xs={2}/>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  );
}

