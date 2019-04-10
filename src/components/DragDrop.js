import React, {Component} from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';

import '../assets/DragDrop.css';
import '../assets/Modeller.css';

export default class DragDrop extends Component {
    state = {
        providers: [
            {name:"aws",category:"available", image:"A"},
            {name:"google", category:"available", image:"G"},
            {name:"azure", category:"available", image:"A"},
            {name:"vcenter", category:"available", image:"A"},
            {name:"cloud", category:"available", image:"C"}
          ],
    }

    onDrop = (e, cat) => {
       let id = e.dataTransfer.getData('id');
       let providers = this.state.providers.filter((provider) => {
        if (provider.name == id){
            provider.category = cat;
            }
            return provider;
       })
       this.setState({...this.state, providers})
    }
    onDragStart = (e, id) => {
        console.log('dragstart:', id);
        e.dataTransfer.setData("id", id );
    }
    onDragOver = (e) => {
        e.preventDefault();
    }

    render() {
        var providers = {
            available: [],
            model : []
        }
        this.state.providers.forEach((p) => {
            providers[p.category].push(
                <div key={p.name}
                     onDragStart = {(e) => this.onDragStart(e, p.name)}
                     draggable
                     className="draggable">
                     {p.name}
                     {p.image}
                     </div>
                    );      
                });

        return (
        <div>
            <div className="container-drag">
            <div class="sidenav" onDragOver={(e)=>this.onDragOver(e)}
                        onDrop ={(e) => {this.onDrop(e, "available")}}> >
                     <Accordion atomic={true}>
                    <AccordionItem title="Providers">
                        {providers.available}
                    </AccordionItem>
                    <AccordionItem title="Provisioners">
                        {providers.available}
                    </AccordionItem>

                    <AccordionItem title="Modules">
                        {providers.available}
                    </AccordionItem>
                    <AccordionItem title="Backends">
                        {providers.available}
                    </AccordionItem>
                    <AccordionItem title="Plugins">
                        {providers.available}
                    </AccordionItem>
                </Accordion>
            </div>
		</div>
		<div id="target" className="dropzone" onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, "model")}>{providers.model}</div>
         
        </div>
        );
    }
}