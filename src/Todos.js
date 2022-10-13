import React from 'react';
import Button from '@mui/material/Button';
const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-list center" key={todo.id} style={{paddingBottom:'2%'}}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                    <Button onClick={()=>{deleteTodo(todo.id)}} variant='filled' style={{backgroundColor:'#e3415f',color:'white', float:'right', padding:'0%'}}>-</Button>
                </div>
                
            )
        })
    ): (
        <p className="center">You have no todos left</p>
    )
    return(
        <div className="todos collection" style={{padding:'2%',borderRadius:'2%'}}>
            {todoList}
        </div>
    )
}

export default Todos