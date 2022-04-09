import * as React from 'react';
import {Button,Container,Grid,TextField} from '@mui/material';


export default function CreateItemForm(props){
 return(
    <Container style={{backgroundColor:'yellow'}}>
        <Grid container>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={3}/>
                    <Grid item xs={6} align="center">
                        <TextField style={{width:'100%'}} id="standard-basic" label="New to-do " variant="standard" />
                        <Button variant='outlined'>Add</Button>
                    </Grid>
                <Grid item xs={3}/>
                </Grid>
            </Grid>
        </Grid>
    </Container>
 )
}
