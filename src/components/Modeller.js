import React, {Component} from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import '../assets/Modeller.css';


	class Modeller extends Component {
   
	render () {
		const Content = () => (
			<span class="element">
			</span>
	);
	return (
	<div>
		<div class="topnav">
			<div class="topnav-centered">
				<a href="#home">Build</a>
			</div>
				<a >TM</a>
			<div class="topnav-right">
		</div>
	</div>


	<div class="sidenav">
		<div>
			<Accordion atomic={true}>

				<AccordionItem title="Providers">
					<Content/>
				</AccordionItem>

				<AccordionItem title="Provisioners">
					<Content />
				</AccordionItem>

				<AccordionItem title="Modules">
					<Content/>
				</AccordionItem>

				<AccordionItem title="Backends">
					<Content/>
				</AccordionItem>

				<AccordionItem title="Plugins">
					<Content/>	
				</AccordionItem>
			</Accordion>
		</div>
		</div>
	</div>

		);
	}
}


export default Modeller;