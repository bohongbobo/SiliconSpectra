import React, { Component } from 'react';

class Addtodos extends Component{
    state ={
        content: ''
    }

    render(){
        return(
            <div className="todo-app container">
                <div className="white-text">Add new todos:</div>
            </div>
        );
    }
}


export default Addtodos;