import React, { useState } from 'react';
import {
  Typography, Paper, IconButton, Box,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DeleteOutline from '@mui/icons-material/DeleteOutline';

export default function TodoCard(props) {
  const {
    title, description, isCompleted, deleteTodoItem, id, markTodoItem,
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const expandOrShrink = () => {
    setIsExpanded(!isExpanded);
  };

  const renderExpandIcon = () => (isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />);
  const todoCheckbox = () => (isCompleted === true
    ? <CheckBoxIcon style={{ color: 'green' }} />
    : <CheckBoxOutlineBlankIcon />
  );
  return (
    <Paper
      style={{
        width: '90%',
        maxWidth: '90%',
        boxShadow: 4,
        minHeight: '10%',
        display: 'flex',
      }}
    >
      <Box style={{
        display: 'flex', padding: '0.5rem', paddingRight: 0, flexDirection: 'column', justifyContent: 'space-between',
      }}
      >
        <Box style={{ display: 'flex', flexDirection: 'column' }} onClick={() => { markTodoItem(id); }}>
          <IconButton>
            {todoCheckbox()}
          </IconButton>
          <IconButton onClick={() => { deleteTodoItem(id); }}>
            <DeleteOutline />
          </IconButton>
        </Box>
        <IconButton style={{ display: 'flex' }} onClick={expandOrShrink}>
          {renderExpandIcon()}
        </IconButton>
      </Box>
      <Box style={{
        padding: '.8rem', maxHeight: '80%', maxWidth: '90%',
      }}
      >
        <Typography
          style={{ fontSize: '1.1rem', marginBottom: '5px' }}
          sx={{
            overflow: isExpanded ? 'scroll' : 'hidden',
            textOverflow: isExpanded ? 'clip' : 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: isExpanded ? 'none' : '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            overflow: isExpanded ? 'scroll' : 'hidden',
            textOverflow: isExpanded ? 'clip' : 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: isExpanded ? 'none' : '5',
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
  deleteTodoItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  markTodoItem: PropTypes.func.isRequired,
};
