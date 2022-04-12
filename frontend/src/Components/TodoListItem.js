import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDrag, useDrop } from "react-dnd";

export default function ToDoListItem (props){
    const ref = React.useRef(null);
    const type = 'ToDoListItem';
    // useDrop hook is responsible for handling whether any item gets hovered or dropped on the element
  // useDrop hook is responsible for handling whether any item gets hovered or dropped on the element
  const [, drop] = useDrop({
    // Accept will make sure only these element type can be droppable on this element
    accept: type,
    hover(item){
        if(!ref.current){
            return;
        }
        const dragIndex = item.index;
        const hoverIndex = props.index;
        if(dragIndex === hoverIndex){
            return;
        }
        props.moveItem(props.itemName,dragIndex,hoverIndex);
        item.index=hoverIndex;
    }
  });

  // useDrag will be responsible for making an element draggable. It also expose, isDragging method to add any styles while dragging
  const [{ isDragging }, drag] = useDrag(() => ({
    // what type of item this to determine if a drop target accepts it
    type: type,
    // data of the item to be available to the drop methods
    item: { id: props.id, index:props.index },
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
            <IconButton edge="end" aria-label="delete" onClick={()=>{props.deleteToDoItem(props.itemName)}}> <DeleteIcon/> </IconButton>}>
            <ListItemAvatar onClick={()=>{props.markToDoItem(props.itemName)}}>
                <Avatar>
                    {props.isCompleted === true ? <CheckBoxOutlinedIcon/> : <CheckBoxOutlineBlankOutlinedIcon/> }
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.itemName} secondary={props.itemBody}
            />
         </ListItem>

}