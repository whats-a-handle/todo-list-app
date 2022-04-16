import React, { useState } from 'react';
import {
  Button, Container, Grid, TextField,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function CreateItemForm(props) {
  const { createTodoItem } = props;

  const [newToDoName, setNewTodoName] = useState('');
  const handleChange = (event) => {
    setNewTodoName(event.target.value);
  };

  const handleSubmit = (itemName) => {
    const trimmedItemName = itemName !== null && itemName !== undefined
      ? itemName.trim() : null;
    if (trimmedItemName) {
      createTodoItem(trimmedItemName);
      setNewTodoName('');
    }
  };

  const handleKeyPress = (key, newTodoName) => {
    if (key === 'Enter') {
      handleSubmit(newTodoName);
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3} />
            <Grid item xs={6} align="center">
              <TextField
                value={newToDoName}
                style={{ width: '100%', marginBottom: 10 }}
                id="standard-basic"
                label="Enter your todo"
                variant="standard"
                onChange={(event) => { handleChange(event); }}
                onKeyDown={(event) => { handleKeyPress(event.key, newToDoName); }}
              />
              <Button variant="outlined" onClick={() => { handleSubmit(newToDoName); }}>Add</Button>
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

CreateItemForm.propTypes = {
  createTodoItem: PropTypes.func.isRequired,
};
