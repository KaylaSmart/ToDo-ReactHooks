import React from 'react';
import useToggleState from'./hooks/useToggleState';
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Checkbox, ListItemText, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import EditTodoForm from './editTodoForm';

function Todo({id, task, completed, removeTodo, toggleTodo, editTodo}){
        const [isEditing, toggle] = useToggleState(false); 
    return (
        <ListItem style={{height: "54px"}}>
             {isEditing ? (
             <EditTodoForm 
                editTodo={editTodo} 
                task={task} 
                id ={id} 
                toggleEditForm={toggle}
                />
                 ) : (
                    <>
                    <Checkbox 
                        tabIndex={-1} 
                        checked={completed} 
                        onClick={() => toggleTodo(id)}
                    />
          <ListItemText 
            style={{textDecoration: completed ? "line-through": "none" }}
            >
            {task}
          </ListItemText>

          <ListItemSecondaryAction>
              <IconButton aria-label="delete" onClick={() => removeTodo(id)} >
                 <DeleteIcon /> 
              </IconButton>  
              <IconButton aria-label="edit" onClick={toggle}>
                 <EditIcon/> 
              </IconButton>
          </ListItemSecondaryAction>
        
            </>
          
        )}
          </ListItem>
    )};
export default Todo;