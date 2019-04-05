import React, {Component} from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import DragDrop from './DragDrop';
import '../assets/Modeller.css';


	class Modeller extends Component {

	render () {
		const Content = () => (
			<div id="p1" draggable="true" ondragstart="onDragstart(e);" class="element" >
				<h1 class="elementimg">A</h1>
				<p class="elementtitle">azure</p>
			</div>
	
	);

		const onDragstart = (e) => {
		// Add the target element's id to the data transfer object
		e.dataTransfer.setData("text/plain", e.target.id);
		e.dataTransfer.dropEffect = "move";
	   	}

		const onDragover = (e)=> {
		e.preventDefault();
		// Set the dropEffect to move
		e.dataTransfer.dropEffect = "move"
		}

		const	onDragEnter = (e) => {
			
			e.stopPropagation();
		}

		const dragEnd = (e) => {
			Content.setState({targetbox: null})
		  }

		const onDrop = (e) => {
			e.preventDefault();
			// Get the id of the target and add the moved element to the target's DOM
			var data = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.getElementById(data));
		   }

	return (
	<div>
		<div class="topnav">
			<div class="topnav-centered">
				<a href="#home">Build</a>
			</div>
				<a class="titlelogo">TerraformModeller</a>
			<div class="topnav-right">
		</div>
	</div>
	return <DragDrop/>
	</div>


	
		);
	}
}


export default Modeller;