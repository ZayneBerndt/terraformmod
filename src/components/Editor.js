import React from 'react';
import {slide as Menu } from 'react-burger-menu'
import AceEditor from 'react-ace';
import 'brace/mode/golang';
import 'brace/theme/github';
import '../assets/Editor.css'

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '20px',
      height: '10px',
      right: '36px',
      top: '25px'
    },
    bmBurgerBars: {
      background: 'white'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      right: '95%' 
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width:'60%'
    },
    bmMenu: {
      background: 'white',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: 'black',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block',
      color: 'black'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
  }
}

class Editor extends React.Component {

  render () {
    return (
  <React.Fragment>

    <div id="outer-container" className="menutick">

      <Menu right styles={ styles }>
        <label className="editorToggle">
          <input  type="radio" value="option1" checked={false} />
            JSON
            <input  type="radio" value="option1" checked={true} />
            JS
        </label>
        <AceEditor
          mode="golang"
          theme="github"
          // onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{$blockScrolling: true}}/>
      </Menu>
      </div>
      </React.Fragment>
    );
  }
}

export default Editor;
