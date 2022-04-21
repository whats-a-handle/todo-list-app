import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';

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
    <TextField
      value={newToDoName}
      style={{ width: '100%' }}
      id="standard-basic"
      placeholder="Enter your todo"
      variant="outlined"
      onChange={(event) => { handleChange(event); }}
      onKeyDown={(event) => { handleKeyPress(event.key, newToDoName); }}
      InputProps={{
        style: { backgroundColor: 'white' },
        sx: {
          boxShadow: 4,
          borderRadius: 3,
        },
        endAdornment: (
          <InputAdornment position="end" onClick={() => { handleSubmit(newToDoName); }}>
            <IconButton>
              <AddIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

CreateItemForm.propTypes = {
  createTodoItem: PropTypes.func.isRequired,
};
