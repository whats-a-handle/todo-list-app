import React, { useState } from 'react';
import {
  Typography, Paper, IconButton, Box, TextField,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const outerPaperStyle = {
  style: {
    width: '90%',
    maxWidth: '90%',
    boxShadow: 4,
    minHeight: '10%',
    display: 'flex',
  },
};

const innerPaperBoxStyle = {
  style: {
    display: 'flex', padding: '0.5rem', paddingRight: 0, flexDirection: 'column', justifyContent: 'space-between',
  },
};
const buttonBoxStyle = {
  style: { display: 'flex', flexDirection: 'column' },
};

const expandIconButtonStyle = {
  style: {
    display: 'flex',
  },
};
const cardBoxStyle = {
  style: {
    padding: '.8rem', maxHeight: '80%', maxWidth: '90%', width: '85%',
  },
};

export default function TodoCard(props) {
  const {
    item, deleteTodoItem, markTodoItem, updateTodoItem,
  } = props;
  const [todoItem, setTodoItem] = useState(item);
  const [isExpanded, setIsExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const expandOrShrink = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEditSaveClick = () => {
    if (editMode) {
      updateTodoItem(todoItem);
    }
    setEditMode(!editMode);
  };
  const renderExpandIcon = () => (isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />);
  const renderEditIcon = () => (editMode ? <SaveIcon /> : <EditIcon />);
  const todoCheckbox = (isCompleted) => (isCompleted === true
    ? <CheckBoxIcon style={{ color: 'green' }} />
    : <CheckBoxOutlineBlankIcon />
  );
  const handleChange = (key, value) => {
    setTodoItem((prevValue) => ({ ...prevValue, [key]: value }));
  };

  const cardTitleStyling = {
    style: {
      fontSize: '1.1rem', marginBottom: '5px',
    },
    sx: {
      overflow: isExpanded ? 'scroll' : 'hidden',
      textOverflow: isExpanded ? 'clip' : 'ellipsis',
      display: !editMode ? '-webkit-box' : 'none',
      WebkitLineClamp: isExpanded ? 'none' : '2',
      WebkitBoxOrient: 'vertical',
    },
  };

  const cardDescriptionStyle = {
    style: {
      maxWidth: '100%', maxHeight: '100%', fontSize: '0.9rem',
    },
    sx: {
      overflow: isExpanded ? 'scroll' : 'hidden',
      textOverflow: isExpanded ? 'clip' : 'ellipsis',
      display: !editMode ? '-webkit-box' : 'none',
      WebkitLineClamp: isExpanded ? 'none' : '5',
      WebkitBoxOrient: 'vertical',
    },
  };

  const cardEditModeStyle = {
    style: {
      display: editMode ? 'flex' : 'none', fontSize: '1.1rem', marginBottom: '5px', width: '100%',
    },
  };

  return (
    <Paper style={outerPaperStyle.style}>
      <Box style={innerPaperBoxStyle.style}>
        <Box style={buttonBoxStyle.style}>
          <IconButton onClick={() => { markTodoItem(todoItem.id); }}>
            {todoCheckbox(todoItem.isCompleted)}
          </IconButton>
          <IconButton onClick={() => handleEditSaveClick()}>
            {renderEditIcon()}
          </IconButton>
          <IconButton onClick={() => { deleteTodoItem(todoItem.id); }}>
            <DeleteOutline />
          </IconButton>
        </Box>
        <IconButton style={expandIconButtonStyle.style} onClick={expandOrShrink}>
          {renderExpandIcon()}
        </IconButton>
      </Box>
      <Box style={cardBoxStyle.style}>
        <Typography style={cardTitleStyling.style} sx={cardTitleStyling.sx}>
          {todoItem.title}
        </Typography>
        <TextField
          placeholder="Title"
          value={todoItem.title}
          onChange={(event) => handleChange('title', event.target.value)}
          multiline
          maxRows={5}
          style={cardEditModeStyle.style}
        />
        <Typography
          sx={cardDescriptionStyle.sx}
          style={cardDescriptionStyle.style}
        >
          {todoItem.description}
        </Typography>
        <TextField
          value={todoItem.description}
          multiline
          maxRows={5}
          onChange={(event) => handleChange('description', event.target.value)}
          style={cardEditModeStyle.style}
        />
      </Box>
    </Paper>
  );
}

TodoCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    isCompleted: PropTypes.bool,
    id: PropTypes.string.isRequired,
  }).isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
  markTodoItem: PropTypes.func.isRequired,
  updateTodoItem: PropTypes.func.isRequired,
};
