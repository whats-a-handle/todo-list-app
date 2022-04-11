import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
export default function ToDoListItem (props){

    return <ListItem secondaryAction={
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