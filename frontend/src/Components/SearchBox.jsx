import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
  return (
    <TextField
      style={{ width: '100%' }}
      id="standard-basic"
      placeholder="Find a to-do"
      variant="outlined"
      InputProps={{
        style: { backgroundColor: '#f6f7f8' },
        sx: {
          boxShadow: 4,
          borderRadius: 3,
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
