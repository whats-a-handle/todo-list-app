import * as React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ToDoList(props){
return (<Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            {props.toDoListName}
          </Typography>
            <List>
              {props.children}
            </List>
        </Grid>
      )
}