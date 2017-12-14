import React, { Component } from 'react';
import Mynavbar from './components/mynavbar';

import './App.css';


class App extends Component {
  render() {
  	
    return (
      <div>
        <Mynavbar />
        {this.props.children}

      </div>
    )
  }
}

export default App;
