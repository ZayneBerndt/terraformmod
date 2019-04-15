import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import { Accordion, AccordionItem } from 'react-light-accordion';
// import { Route, Link } from 'react-router-dom';
import DragDrop from './DragDrop';
import Editor from './Editor';
import '../assets/Modeller.css';


class Modeller extends Component {

render () {
return (
	<div>
		 <DragDrop/>
		 <Editor/>
	</div>
		);
	}
}	


export default Modeller;