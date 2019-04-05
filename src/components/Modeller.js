import React, {Component} from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import '../assets/Modeller.css';



	class Modeller extends Component {
		constructor(props) {
			super(props);
			
		}

	render () {
	 const Content = () => (
					
			<div draggable class="element">
				<h1 class="elementimg">A</h1>
				<p class="elementtitle">azure</p>
			</div>
	);
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


	<div class="sidenav">
		<div>
			<Accordion atomic={true}>

				<AccordionItem title="Providers">
					<Content/>
					<Content/>
					<Content/>
				</AccordionItem>

				<AccordionItem title="Provisioners">
					<Content />
					<Content/>
					<Content/>
					<Content/>
					<Content/>
					<Content/>
				</AccordionItem>

				<AccordionItem title="Modules">
					<Content/>
					<Content/>
					<Content/>
				</AccordionItem>

				<AccordionItem title="Backends">
					<Content/>
					<Content/>
					<Content/>
				</AccordionItem>

				<AccordionItem title="Plugins">
					<Content/>	
					<Content/>
				</AccordionItem>
			</Accordion>
		</div>
		</div>
		<section className="dropzone">
		</section>
	</div>

		);
	}
}


export default Modeller;