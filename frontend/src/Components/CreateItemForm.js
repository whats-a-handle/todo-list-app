import React, {useState} from 'react';
import {Button,Container,Grid,TextField} from '@mui/material';


export default function CreateItemForm(props){
    const [newToDoName,setNewToDoName] = useState('');
    const handleChange = (event) =>{
        setNewToDoName(event.target.value);
    }

    const handleClick = (newToDoName)=>{
        if(newToDoName !== null && newToDoName.trim()){
            props.createToDoItem(newToDoName); setNewToDoName('')
        }
    }
 return(
    <Container /*style={{backgroundColor:'yellow'}}*/>
        <Grid container>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={3}/>
                    <Grid item xs={6} align="center">
                        <TextField value={newToDoName} style={{width:'100%'}} id="standard-basic" label="New to-do " variant="standard" onChange={(event)=>{handleChange(event)}} />
                        <Button variant='outlined' onClick={()=>{handleClick(newToDoName)}}>Add</Button>
                    </Grid>
                <Grid item xs={3}/>
                </Grid>
            </Grid>
        </Grid>
    </Container>
 )
}
