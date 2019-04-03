import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Modeller from './components/Modeller';
import './assets/Modeller.css';

class App extends Component {
  render() {
    return(
        <main>
          <Route path="/Modeller" component={Modeller} />
        </main>
    );
  }
}

export default App;
