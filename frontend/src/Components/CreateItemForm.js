import React, {useState} from 'react';
import {Button,Container,Grid,TextField} from '@mui/material';


export default function CreateItemForm(props){
    const [newToDoName,setNewToDoName] = useState('');
    const handleChange = (event) =>{
        setNewToDoName(event.target.value);
    }

    const handleKeyPress = (key, newTodoName)=>{
        if(key === 'Enter'){
            handleSubmit(newTodoName);
        }
    }

    const handleSubmit = (newToDoName)=>{
        const trimmedToDo = newToDoName !== null && newToDoName !== undefined ? newToDoName.trim() : null;
        if(trimmedToDo){
            props.createToDoItem(trimmedToDo); 
            setNewToDoName('');
        }
    }
 return(
    <Container /*style={{backgroundColor:'yellow'}}*/>
        <Grid container>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={3}/>
                    <Grid item xs={6} align="center">
                        <TextField value={newToDoName} style={{width:'100%', marginBottom:10}} id="standard-basic" label="Enter your todo" variant="standard" 
                        onChange={(event)=>{handleChange(event)}} onKeyDown={(event)=>{handleKeyPress(event.key, newToDoName)}}/>
                        <Button variant='outlined' onClick={()=>{handleSubmit(newToDoName)}}>Add</Button>
                    </Grid>
                <Grid item xs={3}/>
                </Grid>
            </Grid>
        </Grid>
    </Container>
 )
}
