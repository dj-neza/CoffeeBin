import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Navbar } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Menu from 'react-icons/lib/md/menu';
import Row from "react-bootstrap/Row";

import coffee from './img/icons-09.png';
import location from './img/icons-10.png';
import people from './img/icons-11.png';
import art from './img/icons-12.png';
import order from './img/icons-14.png';

class Bottom extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    render() {

        const footerStyle = {
          backgroundColor: "purple",
          fontSize: "20px",
          color: "white",
          borderTop: "1px solid #E7E7E7",
          padding: "10px",
          position: "fixed",
          bottom: "0",
          height: "60px",
          width: "100%",
        };

        const phantomStyle = {
          display: "block",
          padding: "10px",
          height: "60px",
          width: "100%"
        };

      return (
      	<Container>
	        <div style={phantomStyle} />
            <Row style={footerStyle} className="align">
                <img width="40" height="40" src={coffee} alt="stats" className="mar_side"/>
                <img width="40" height="40" src={location} alt="map" className="mar_side"/>
                <img width="40" height="40" src={order} alt="order" className="mar_side"/>
                <img width="40" height="40" src={people} alt="reward" className="mar_side"/>
                <img width="40" height="40" src={art} alt="create" className="mar_side"/>
            </Row>
        </Container>

      );
    }
}

export default Bottom;