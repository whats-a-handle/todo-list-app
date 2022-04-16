import * as React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import ToDoListItem from './TodoListItem';

function ToDoList(props) {
  const {
    children, markTodoItem, renameTodoItem, deleteTodoItem, moveItem,
  } = props;
  return (
    <Grid container style={{ marginTop: 10 }}>
      <Grid item xs={12}>
        <DndProvider backend={HTML5Backend}>
          <List>
            {children.map((item, index) => (
              <ToDoListItem
                markTodoItem={markTodoItem}
                renameTodoItem={renameTodoItem}
                deleteTodoItem={deleteTodoItem}
                key={item.itemName}
                position={index}
                itemName={item.itemName}
                isCompleted={item.isCompleted}
                moveItem={moveItem}
              />
            ))}
          </List>
        </DndProvider>
      </Grid>
    </Grid>
  );
}

ToDoList.defaultProps = {
  children: [],
};

ToDoList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  markTodoItem: PropTypes.func.isRequired,
  renameTodoItem: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
  moveItem: PropTypes.func.isRequired,
};

export default ToDoList;
