import React, {Component} from 'react';
import '../assets/Landing.css';
import Container from 'react-bootstrap/Container';
import {Link } from 'react-router-dom';
import DropDown from '../components/DropDown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="topnav">
                        <Link to="/"className="titlelogo">TerraformModeller</Link>
                        <div className="topnav-right">
                        </div>
                    </div>
                <div>
                        <DropDown/>
                    </div>
                <Container className="container">
                    <Row className="rowflex" >
                        <Col className="column">GitHub
                        <img src={require('../assets/img/github.svg') } alt="img"/></Col>
                        <Col className="column">Bitbucket
                        <img src={require('../assets/img/bitbucket.svg') } alt="img"/></Col>
                        <Col className="column">Import YAML
                        <img src={require('../assets/img/coding.svg') } alt="img"/></Col>
                        <Col className="column"> <Link to="/Modeller">Modeller
                        <img src={require('../assets/img/3d.svg')} alt="img"/></Link></Col>
                        <Col className="column">Demonstration
                        <img src={require('../assets/img/i.svg') } alt="img"/></Col>
                    </Row>
                   
                </Container>
            </React.Fragment>
        );
    }
}

export default Landing;