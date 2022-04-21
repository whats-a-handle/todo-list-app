import React from 'react';
import {
  Typography, Card, CardContent, CardActions, IconButton, Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const todoCheckbox = (isCompleted) => (isCompleted === true
  ? <CheckBoxIcon />
  : <CheckBoxOutlineBlankIcon />);

export default function TodoCard(/* props */) {
  // const { title, description,  isCompleted } = { ...props };

  return (
    <Card sx={{ width: 345, height: 260 }}>
      <CardContent>
        <Box sx={{ display: 'flex' }}>
          <IconButton sx={{ display: 'flex', flexGrow: 0 }}>
            {todoCheckbox(false)}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1, display: 'flex', justifyContent: 'left', alignItems: 'center',
            }}
          >
            Laundry and Linens
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
          <Typography sx={{ mb: 1.0 }} color="text.secondary">
            Due Date: 04/20/20
          </Typography>
          <Typography variant="body2">
            Doing your laundry is very important.
            In addition to washing your clothes, wash your bedsheets (linens) and curtains.
            Doing your laundry is very important.
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton style={{ color: 'red' }}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
