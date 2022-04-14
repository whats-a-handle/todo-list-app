import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDrag, useDrop } from "react-dnd";
import SaveIcon from '@mui/icons-material/Save';
export default function ToDoListItem (props){
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoItemName, setTodoItemName] = useState(props.itemName);
  const ref = React.useRef(null);
  const type = 'ToDoListItem';
  const handleChange = (event) =>{
    setTodoItemName(event.target.value);
  }
  const saveChange = (oldItemName,newItemName) =>{
    props.renameTodoItem(oldItemName,newItemName); 
    setIsEditMode(false);
    
  }

  const handleKeyPress = (key, oldItemName,newItemName)=>{
    if(key === 'Enter'){
      saveChange(oldItemName,newItemName);
    }
}

    // useDrop hook is responsible for handling whether any item gets hovered or dropped on the element
  // useDrop hook is responsible for handling whether any item gets hovered or dropped on the element
  const [, drop] = useDrop({
    // Accept will make sure only these element type can be droppable on this element
    accept: type,
    hover(item){
        if(!ref.current){
            return;
        }
        const dragPosition = item.position;
        const hoverPosition = props.position;
        if(dragPosition === hoverPosition){
            return;
        }
        props.moveItem(props.itemName,dragPosition,hoverPosition);
        item.position=hoverPosition;
    }
  });

  // useDrag will be responsible for making an element draggable. It also expose, isDragging method to add any styles while dragging
  const [{ isDragging }, drag] = useDrag(() => ({
    // what type of item this to determine if a drop target accepts it
    type: type,
    // data of the item to be available to the drop methods
    item: { id: props.id, position:props.position },
    // method to collect additional data for drop handling like whether is currently being dragged
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  /* 
    Initialize drag and drop into the element using its reference.
    Here we initialize both drag and drop on the same element (i.e., Image component)
  */
    drag(drop(ref));

  
    return <ListItem  ref={ref} style={{opacity: isDragging ? 0 : 1}} secondaryAction={
            <IconButton  style={{color:'red'}} edge="end" aria-label="delete" onClick={()=>{props.deleteToDoItem(todoItemName)}}> <DeleteIcon/> </IconButton>}>
            <ListItemAvatar onClick={()=>{props.markToDoItem(todoItemName)}}>
                <Avatar style={{backgroundColor: props.isCompleted ? 'green' : '#5acbed'}}>
                    {props.isCompleted ? <CheckBoxOutlinedIcon style={{backgroundColor:'green'}}/> : <CheckBoxOutlineBlankOutlinedIcon/> }
                </Avatar>
            </ListItemAvatar>
            {isEditMode === false? 
            <ListItemText style={{wordWrap:'break-word', textDecoration: props.isCompleted ? 'line-through': 'none'}} onClick={()=>{setIsEditMode(true)}} primary={todoItemName}/>
            :
            (
            <React.Fragment>
              <TextField style={{width:'90%'}}value={todoItemName} onChange={(event)=>{handleChange(event)}} onKeyDown={(event)=>{handleKeyPress(event.key, props.itemName, todoItemName)}}></TextField>
              <IconButton style={{color:'green'}} onClick={()=>{saveChange(props.itemName,todoItemName)}}><SaveIcon/></IconButton>
            </React.Fragment>
            )
            }
         </ListItem>

}