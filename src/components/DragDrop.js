import React, {Component} from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import {Link } from 'react-router-dom';
import DropDown from '../components/DropDown';



import '../assets/DragDrop.css';
import '../assets/Modeller.css';

export default class DragDrop extends Component {
	
	state = {
			providers: {
					aws: {
							resources: {
									aws_vm: {
											name: "",
											mem: 0,
											cpu: 0
									},
									aws_lb: {
											ip_range: ''
									}} 
					},
					google: {
							resources: {
									google_vm: {
											name: "",
											mem: 0,
											cpu: 0
									},
									google_lb: {
											ip_range: ''
									}}
					},
					azure: {
							resources: {
									azure_vm: {
											name: "",
											mem: 0,
											cpu: 0
									},
									azure_lb: {
											ip_range: ''
									}
							}
					},
					vcenter: {
							resources: {
									vcenter_vm: {
											name: "",
											mem: 0,
											cpu: 0
									},
									vcenter_lb: {
											ip_range: ''
									}
							}
					},
					cloud: {
							resources: {}
					}
			},
			selectedProvider: null //aws
		};


		
		
		handleClick(sP){
			this.setState({selectedProvider: sP}) 
			console.log({sP})
			
		}



    render() {
				var myArr = [];
				// var modArr = [];

        for(let provider in this.state.providers){
            myArr.push(<div className="draggable" draggable  key={provider} data-provider={provider} onMouseDown={this.handleClick.bind(this, provider)}>{provider}</div>)

            // for(let resource in this.state.providers[provider].resources){
            //     myArr.push(
            //         <div>
            //             <div>{resource}</div>
            //         </div>)
            // }
				}

				
			

        return (
            <React.Fragment>
							<div className="topnav">
                        <Link to="/Landing"className="titlelogo">TerraformModeller</Link>
                        <div className="topnav-right">
                        </div>
                    </div>
                <div>
                  <DropDown/>
                </div>
                <div className="container-drag">
                <div className="sidenav" > 
                        <Accordion atomic={true}>
                        <AccordionItem title="Providers">
													{myArr}
                        </AccordionItem>
                        <AccordionItem title="Provisioners">
                        </AccordionItem>
                        <AccordionItem title="Modules">
                        </AccordionItem>
                        <AccordionItem title="Variables">
                        </AccordionItem>
                        <AccordionItem title="Settings">
												<div className="meneitems">
													<h3>Last Plan</h3>
													<h3>Last Apply</h3>
													<h3>Delete</h3>
													<h3>Unlock</h3>
													<h3>Statefile</h3>
												</div>
                        </AccordionItem>
                    </Accordion>
										
                </div>
            </div>
            <div id="target" className="dropzone" >
							{/* <div>{myArr}</div> */}
						</div>
        </React.Fragment>
        );
    }
}