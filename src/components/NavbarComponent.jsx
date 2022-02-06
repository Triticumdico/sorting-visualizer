import { Component } from "react";
import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

import '../styles/NavbarComponent.css'


export default class NavbarSort extends Component {
    render() {
        return(
            <Navbar className="navbar navbar-dark">
                <Container fluid='md'>
                    <Navbar.Brand href="#home">Sorting Visualizer</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}
