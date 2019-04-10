import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Modeller from './components/Modeller';
import DragDrop from './components/DragDrop';
import Editor from './components/Editor';
import './assets/Modeller.css';



class App extends Component {
  render() {
    return(
      <div>
      <div class="topnav">
      <div class="topnav-centered">
        <Link to='/Modeller'>Build</Link>
      </div>
        <Link to="/"class="titlelogo">TerraformModeller</Link>
      <div class="topnav-right">
      </div>
      </div>
        <main>
          <Route path="/Modeller" component={Modeller} />
          <Route path="/DragDrop" component={DragDrop} />
          <Route path="/Editor" component={Editor}/>
        </main>
      </div>
    );
  }
}

export default App;
