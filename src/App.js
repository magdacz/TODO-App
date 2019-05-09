import React, { Component } from 'react';

import './App.css';


class App extends Component {
    
    state = {
        counter: 0,
        tasks: []
    }

   handleAddTask = () => {
       const tasks = [...this.state.tasks];
       tasks.push(this.state.counter);
       
       this.setState({
           counter: this.state.counter + 1,
           tasks
       })
   }
   
   handleRemoveTask = () => {
       const tasks = [...this.state.tasks];
       tasks.pop();
       
       this.setState({
           tasks
       })
   }
   
   handleClearTasks = () => {
       const tasks = [...this.state.tasks];
       tasks.splice(0);
       
       this.setState({
           tasks
       })
   }
    
   render() {
       
       const task = this.state.tasks.map((task, index) => <li key={index}>Task number {index+1}</li>)
       
       return (
           <div>
            <h1>TODO App</h1>
            <button onClick={this.handleAddTask}>Add</button>
            <button onClick={this.handleRemoveTask}>Remove</button>
            <button onClick={this.handleClearTasks}>Clear</button>
            <ul>{task}</ul>
           </div>
       )
   } 

}

export default App;

