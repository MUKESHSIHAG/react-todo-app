import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './addTodo';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import Button from '@mui/material/Button';
class App extends Component {
  state = {
    todos: [
      {id: 1, content: "I have to do contribute for hacktoberfest"},
      {id: 2, content: "I have to do internship"}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h4 className="center blue-text"><ListAltOutlinedIcon fontSize='large'/> Todo List</h4>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /> 
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
