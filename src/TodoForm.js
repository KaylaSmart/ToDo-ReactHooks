import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';


function TodoForm({addTodo}){
    const [value, handleChange, reset] = useInputState("")
    return(
        <Paper style={{marginTop: '1rem 0', padding:'0 1rem'}}>
            <form onSubmit={e =>{
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
             <TextField value={value} onChange={handleChange}
             label='Add to do'
             fullWidth/>   
            </form>
        </Paper>
    )
}

export default TodoForm;