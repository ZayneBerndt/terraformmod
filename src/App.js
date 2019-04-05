import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Modeller from './components/Modeller';
import './assets/Modeller.css';
import DragDrop from './components/DragDrop';

class App extends Component {
  render() {
    return(
        <main>
          <Route path="/Modeller" component={Modeller} />
          <Route path="/DragDrop" component={DragDrop} />

        </main>
    );
  }
}

export default App;
