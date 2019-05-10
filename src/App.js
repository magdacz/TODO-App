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
       
       const task = this.state.tasks.map((task, index) => <li className='task' key={index}>Task number <span className='span-number'>{index+1}</span></li>)
       
       return (
           <div className='app'>
            <h1 className='header1'>TODO <span className='span-h1'>App</span></h1>
            <button className='btn' onClick={this.handleAddTask}>Add</button>
            <button className='btn' onClick={this.handleRemoveTask}>Remove</button>
            <button className='btn' onClick={this.handleClearTasks}>Clear</button>
            <ul className='tasks-list'>{task}</ul>
           </div>
       )
   } 

}

export default App;

