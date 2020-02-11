import React, { Component } from "react";
import "./App.css";

// Route
import { Route } from 'react-router-dom';


// Components
import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';
import Nav from './Nav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Route path='/AddSmurf' component={AddSmurf} />
        <Route exact path='/' component={SmurfList} />
      </div>
    );
  }
}

export default App;
