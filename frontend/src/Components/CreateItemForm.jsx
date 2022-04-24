/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  TextField, InputAdornment, IconButton, Grid, Container, Box,
} from '@mui/material';
// import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';

const initialState = {
  title: '',
  description: '',
};

export default function CreateItemForm(props) {
  const { createTodoItem } = props;
  const [newTodoItem, setNewTodoItem] = useState(initialState);

  const handleChange = (event, property) => {
    setNewTodoItem((prevValue) => ({ ...prevValue, [property]: event.target.value }));
  };
  return (
    <Container>
      <Grid
        container
        sx={{
          backgroundColor: 'white', borderRadius: 3, boxShadow: 3,
        }}
      >
        <Grid container item xs={12}>
          <Box sx={{ padding: '2%', width: '100%' }}>
            <TextField
              placeholder="Title"
              variant="standard"
              value={newTodoItem.title}
              style={{ width: '100%', borderBottom: '1px solid lightgray' }}
              onChange={(event) => { handleChange(event, 'title'); }}
              InputProps={{
                style: { backgroundColor: 'transparent', width: '100%' },
                disableUnderline: true,
              }}
            />
          </Box>
        </Grid>
        <Grid container item xs={12}>
          <Box sx={{ padding: '2%', width: '100%' }}>
            <TextField
              multiline
              maxRows={3}
              value={newTodoItem.description}
              style={{ width: '100%' }}
              id="standard-basic"
              placeholder="Enter your todo"
              variant="standard"
              onChange={(event) => { handleChange(event, 'description'); }}
              InputProps={{
                style: { backgroundColor: 'transparent' },
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => createTodoItem(newTodoItem)}>
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>

  );
}
