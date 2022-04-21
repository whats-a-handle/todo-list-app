import React, { useState } from 'react';
import {
  Typography, Card, CardContent, CardActions, IconButton, Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PropTypes from 'prop-types';

const todoCheckbox = (isCompleted) => (isCompleted === true
  ? <CheckBoxIcon style={{ color: 'green' }} />
  : <CheckBoxOutlineBlankIcon />
);

export default function TodoCard(props) {
  const {
    title, description, isCompleted, dueDate,
  } = props;
  const [isHovered, setIsHovered] = useState(false);

  const showHideCardActions = () => {
    setIsHovered(!isHovered);
  };
  return (
    <Card
      sx={{ width: 345, minHeight: 130, maxHeight: 496 }}
      onMouseEnter={showHideCardActions}
      onMouseLeave={showHideCardActions}
    >
      <CardContent>
        <Box sx={{ display: 'flex' }}>
          <IconButton sx={{ display: 'flex', flexGrow: 0 }}>
            {todoCheckbox(isCompleted)}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1, display: 'flex', justifyContent: 'left', alignItems: 'center',
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
          <Typography sx={{ mb: 1.0 }} color="text.secondary">
            {dueDate}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton style={{ color: 'red', display: isHovered ? 'inline' : 'none' }}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

TodoCard.defaultProps = {
  description: null,
  dueDate: null,
};

TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isCompleted: PropTypes.bool.isRequired,
  dueDate: PropTypes.string,
};