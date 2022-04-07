import * as React from 'react';
import ToDoList from './Components/ToDoList'
import ToDoListItem from './Components/TodoListItem'

export default function App() {
  let myItems = [<ToDoListItem itemName='item 1' itemBody='heres my body'/>,
  <ToDoListItem itemName='item 2' /*no secondary*/ />]

  return <ToDoList toDoListName='My ToDo List'>{myItems}</ToDoList>;
}

