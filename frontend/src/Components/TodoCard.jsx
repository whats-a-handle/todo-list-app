import React, { useState } from 'react';
import {
  Typography, Paper, IconButton, Box,
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
    title, description, isCompleted,
  } = props;
  const [isHovered, setIsHovered] = useState(false);

  const showHideCardActions = () => {
    setIsHovered(!isHovered);
  };
  return (
    <Paper
      style={{
        width: '90%',
        maxWidth: '90%',
        boxShadow: 4,
        minHeight: '200px',
        display: 'flex',
      }}
      onMouseEnter={showHideCardActions}
      onMouseLeave={showHideCardActions}
    >
      <Box style={{
        display: 'flex', padding: '0.5rem', paddingRight: 0, flexDirection: 'column', justifyContent: 'space-between',
      }}
      >
        <IconButton style={{ display: 'flex' }}>
          {todoCheckbox(isCompleted)}
        </IconButton>
        <IconButton style={{ color: 'red', display: isHovered ? 'flex' : 'none' }}>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Box style={{ padding: '.8rem', maxHeight: '80%', maxWidth: '90%' }}>
        <Typography
          style={{ fontSize: '1.1rem', marginBottom: '5px' }}
          sx={{
            overflow: isHovered ? 'scroll' : 'hidden',
            textOverflow: isHovered ? 'clip' : 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: isHovered ? 'none' : '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            overflow: isHovered ? 'scroll' : 'hidden',
            textOverflow: isHovered ? 'clip' : 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: isHovered ? 'none' : '5',
            WebkitBoxOrient: 'vertical',
          }}
          style={{ maxWidth: '100%', maxHeight: '100%', fontSize: '0.9rem' }}
        >
          {description}
        </Typography>
      </Box>
    </Paper>
  );
}

TodoCard.defaultProps = {
  description: null,
};

TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isCompleted: PropTypes.bool.isRequired,
};
