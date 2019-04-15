import React from 'react';
import Modal from 'react-responsive-modal';
import '../assets/DropDown.css';


var styles = {
modal: {
  background:' #FFF',
  shadow: '0px 2px 1px 0px #DDD',
  sizing: 'border-box',
  height:' 300px',
  left: '50%',
  margin: '-150px 0 0 -150px',
  position: 'absolute',
  top: '50%',
  width: '300px'
  }
}

class DropDown extends React.Component {
	constructor(props){
    super(props)
    this.state = {
      isActive: false,
      open: false,
      value: [''],
      textvalue : "",
      test:""
    }

		this.buttonRef = React.createRef();
    this.menuRef = React.createRef();
    this.onCloseModal = this.onCloseModal.bind(this);
    this.createNameSpace = this.createNameSpace.bind(this);
    this.handleAddNS = this.handleAddNS.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handledelNS = this.handledelNS.bind(this)
  }
  
  
  onOpenModal = () => {
      this.setState({open: true});
  };

  onCloseModal = () => {
      this.setState({open: false});
  };

	toggleMenu() {
		console.log(this.state.isActive);
		this.setState(prevState => ({ isActive: !prevState.isActive }));
	}
	
	openMenu() {
		this.setState({ isActive: true });
	}
	
	closeMenu() {
		this.setState({ isActive: false });
	}
  
  createNameSpace() {
    console.log('You just created a namespace')
    // this.handleAddNS();
    this.onCloseModal();
  }

  handleChange(e) {
    this.setState({
      textvalue:e.target.value
    })
  }
  handleAddNS() {
    this.state.value.push(this.state.textvalue)
    this.setState(
    this.state
    )

    console.log(this.state.value)
    this.createNameSpace();
  }

  handledelNS(v){
    for(var i = 0; i < this.state.value.length; i++){
      if(this.state.value[i] === v){
         delete this.state.value[i]
      }
    }
    this.setState({
      value:this.state.value
    })
    console.log(this.state.value)
  }

	render() {
    let { value } = this.state;
    const {open} = this.state;
		return (
      <React.Fragment>
        
        <div className="dropdown" onClick={() => this.openMenu()} tabIndex="0">
          <span>Namespaces</span>
            <div className="dropdown-content">
              {this.state.isActive && (
            <div className="menu" ref={this.menuRef}>
              <h5 className="menu-item" onClick = {this.onOpenModal} tabIndex="0">Create Namespace +</h5>
                {value.map((v) => {
                return <h5 className="font">{v} <button className="delete" onClick={this.handledelNS.bind(this, v)}> delete </button><button className="information">i </button></h5>
                })}
              </div>
              )}
            </div>
          </div>
         
          <Modal styles={ styles } open={open} onClose = {this.onCloseModal} center >
          <div className="wrapper">
            <h6 className='input-title'>Namespace:</h6 >
              <input onChange={this.handleChange} className='input' placeholder="project-name" ></input>
            <h6 className='input-title'>Description:</h6 >
              <input onChange={this.handleChange} className='input' placeholder="project description"></input>
          </div>
          <button className="nscreate"  onClick = {this.handleAddNS}>Create</button>
          </Modal>    
        </React.Fragment>
      );
    }
  }



  export default DropDown;