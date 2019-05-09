import React, { Component } from 'react';

import './App.css';


class App extends Component {
    
    state = {
        counter: 0,
        tasks: []
    }
    
   render() {
       return (
           <div>
            <h1>TODO App</h1>
            <button>Add</button>
            <button>Remove</button>
            <button>Clear</button>
           </div>
       )
   } 

}

export default App;

