import { useState } from 'react';
import {
  TextField, InputAdornment, IconButton, Grid, Container, Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';

const initialState = {
  title: '',
  description: '',
};

const outerContainerStyle = {
  sx: {
    backgroundColor: 'white', borderRadius: 3, boxShadow: 3,
  },
};
const inputBoxContainerStyle = {
  sx: {
    padding: '2%', width: '100%',
  },
};
const inputTextFieldStyle = {
  style: {
    width: '100%', borderBottom: '1px solid lightgray',
  },
};
const inputTextFieldPropsStyle = {
  style: {
    backgroundColor: 'transparent', width: '100%',
  },
};
export default function CreateItemForm(props) {
  const { createTodoItem } = props;
  const [newTodoItem, setNewTodoItem] = useState(initialState);

  const handleChange = (event, property) => {
    setNewTodoItem((prevValue) => ({ ...prevValue, [property]: event.target.value }));
  };
  const handleSubmit = () => {
    if (newTodoItem.title.trim()) {
      createTodoItem(newTodoItem);
      setNewTodoItem(initialState);
    }
  };
  return (
    <Container>
      <Grid container sx={outerContainerStyle.sx}>
        <Grid container item xs={12}>
          <Box sx={inputBoxContainerStyle.sx}>
            <TextField
              placeholder="Title"
              variant="standard"
              value={newTodoItem.title}
              style={inputTextFieldStyle.style}
              onChange={(event) => { handleChange(event, 'title'); }}
              InputProps={{
                style: inputTextFieldPropsStyle.style,
                disableUnderline: true,
              }}
            />
          </Box>
        </Grid>
        <Grid container item xs={12}>
          <Box sx={inputBoxContainerStyle.sx}>
            <TextField
              multiline
              maxRows={3}
              value={newTodoItem.description}
              style={inputTextFieldPropsStyle.style}
              id="standard-basic"
              placeholder="Enter your todo"
              variant="standard"
              onChange={(event) => { handleChange(event, 'description'); }}
              InputProps={{
                style: inputTextFieldPropsStyle.style,
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleSubmit()}>
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
CreateItemForm.propTypes = {
  createTodoItem: PropTypes.func.isRequired,
};
