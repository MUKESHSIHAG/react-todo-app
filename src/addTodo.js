import React, { Component } from 'react';
import Button from '@mui/material/Button';
class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    addToList=()=>{
 
var element= document.getElementById('input').value
console.log(element)
this.props.addTodo(this.state)
this.setState({content:''})
    }
    hadleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={ this.hadleSubmit }>
                 <input type="text" id='input' className='toDo-input'style={{width:'91%',height:'20%', marginRight:'8px'}} onChange={ this.handleChange } value={this.state.content}></input>
                 <Button  variant="contained" style={{padding:'0%'}}onClick={this.addToList}>+</Button>
                </form>
            </div>
        )
    }
}

export default AddTodo;
