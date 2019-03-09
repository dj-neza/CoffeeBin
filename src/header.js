import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Navbar } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Menu from 'react-icons/lib/md/menu';
import Row from "react-bootstrap/Row";

export const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

class Header extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    toggleBurger() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {

      return (
      	<Container style={{"padding" : 0, }}>
        	<div align="center" className="titleBanner">{this.props.title}</div>
        </Container>

      );
    }
}

export default Header;