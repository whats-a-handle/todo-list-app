import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDrag, useDrop } from 'react-dnd';
import SaveIcon from '@mui/icons-material/Save';
import PropTypes from 'prop-types';

function ToDoListItem(props) {
  const {
    itemName, position, deleteTodoItem, markTodoItem,
    renameTodoItem, moveItem, isCompleted,
  } = props;
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoItemName, setTodoItemName] = useState(itemName);
  const ref = React.useRef(null);
  const type = 'ToDoListItem';
  const handleChange = (event) => {
    setTodoItemName(event.target.value);
  };
  const saveChange = (oldItemName, newItemName) => {
    renameTodoItem(oldItemName, newItemName);
    setIsEditMode(false);
  };

  const handleKeyPress = (key, oldItemName, newItemName) => {
    if (key === 'Enter') {
      saveChange(oldItemName, newItemName);
    }
  };
  const [, drop] = useDrop({
    accept: type,
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragPosition = item.position;
      const hoverPosition = position;
      if (dragPosition === hoverPosition) {
        return;
      }
      moveItem(itemName, dragPosition, hoverPosition);
      item.position = hoverPosition;
    },
  });
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { position },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  drag(drop(ref));

  return (
    <ListItem
      ref={ref}
      style={{ opacity: isDragging ? 0 : 1 }}
      secondaryAction={(
        <IconButton style={{ color: 'red' }} edge="end" aria-label="delete" onClick={() => { deleteTodoItem(todoItemName); }}>
          <DeleteIcon />
        </IconButton>
      )}
    >
      <ListItemAvatar onClick={() => { markTodoItem(todoItemName); }}>
        <Avatar style={{ backgroundColor: isCompleted ? 'green' : '#5acbed' }}>
          {isCompleted ? <CheckBoxOutlinedIcon style={{ backgroundColor: 'green' }} /> : <CheckBoxOutlineBlankOutlinedIcon /> }
        </Avatar>
      </ListItemAvatar>
      {isEditMode === false
        ? <ListItemText style={{ wordWrap: 'break-word', textDecoration: isCompleted ? 'line-through' : 'none' }} onClick={() => { setIsEditMode(true); }} primary={todoItemName} />
        : (
          <>
            <TextField style={{ width: '90%' }} value={todoItemName} onChange={(event) => { handleChange(event); }} onKeyDown={(event) => { handleKeyPress(event.key, itemName, todoItemName); }} />
            <IconButton style={{ color: 'green' }} onClick={() => { saveChange(itemName, todoItemName); }}><SaveIcon /></IconButton>
          </>
        )}
    </ListItem>
  );
}

ToDoListItem.propTypes = {
  markTodoItem: PropTypes.func.isRequired,
  renameTodoItem: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
  moveItem: PropTypes.func.isRequired,
  itemName: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default ToDoListItem;
