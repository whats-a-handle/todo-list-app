import React, { useState } from 'react';
import {
  TextField, InputAdornment, IconButton, Grid, Container, Box,
} from '@mui/material';
// import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';

export default function CreateItemForm() {
  // const { createTodoItem } = props;

  const [newToDoName, setNewTodoName] = useState('');
  const handleChange = (event) => {
    setNewTodoName(event.target.value);
  };

  /* const handleSubmit = (itemName) => {
    const trimmedItemName = itemName !== null && itemName !== undefined
      ? itemName.trim() : null;
    if (trimmedItemName) {
      createTodoItem(trimmedItemName);
      setNewTodoName('');
    }
  }; */

  /* const handleKeyPress = (key, newTodoName) => {
    if (key === 'Enter') {
      handleSubmit(newTodoName);
    }
  }; */

  return (
    <Container>
      <Grid
        container
        sx={{
          backgroundColor: 'white', borderRadius: 3, boxShadow: 3,
        }}
      >
        <Grid container item xs={12}>
          <Box sx={{ padding: 1 }}>
            <TextField
              placeholder="Title"
              variant="standard"
              InputProps={{
                style: { backgroundColor: 'transparent' },
                disableUnderline: true,
                sx: {
                  boxShadow: 0,
                  border: 'none',
                  outline: 'none',
                },
              }}
            />
          </Box>
        </Grid>
        <Grid container item xs={12}>
          <Box sx={{ padding: 1, width: '100%' }}>
            <TextField
              multiline
              maxRows={3}
              value={newToDoName}
              style={{ width: '100%' }}
              id="standard-basic"
              placeholder="Enter your todo"
              variant="standard"
              onChange={(event) => { handleChange(event); }}
              InputProps={{
                style: { backgroundColor: 'transparent' },
                disableUnderline: true,
                sx: {
                  boxShadow: 0,
                  border: 'none',
                  outline: 'none',
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
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
