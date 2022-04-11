import React, { useState, useEffect } from 'react';
import {Button,Container,Grid,TextField} from '@mui/material';


export default function CreateItemForm(props){
    const [newToDoName,setNewToDoName] = useState('');
    const handleChange = (event) =>{
        setNewToDoName(event.target.value);
    }


 return(
    <Container style={{position:'sticky'}} /*style={{backgroundColor:'yellow'}}*/>
        <Grid container>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={3}/>
                    <Grid item xs={6} align="center">
                        <TextField value={newToDoName} style={{width:'100%'}} id="standard-basic" label="New to-do " variant="standard" onChange={(event)=>{handleChange(event)}} />
                        <Button variant='outlined' onClick={()=>{props.createToDoItem(newToDoName); setNewToDoName('')}}>Add</Button>
                    </Grid>
                <Grid item xs={3}/>
                </Grid>
            </Grid>
        </Grid>
    </Container>
 )
}
