import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Modeller from './components/Modeller';
import DragDrop from './components/DragDrop';
import Editor from './components/Editor';
import Landing from './components/Landing';
import './assets/Modeller.css';



class App extends Component {

  render() {
    return(
      <React.Fragment>
     
          <main>
            <Route path="/Modeller" component={Modeller} />
            <Route path="/DragDrop" component={DragDrop} />
            <Route path="/Editor" component={Editor}/>
            <Route path="/Landing" component={Landing}/>

          </main>
        </React.Fragment>
    );
  }
}

export default App;
