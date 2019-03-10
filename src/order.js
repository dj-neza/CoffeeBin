import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CardGroup, Card, CardTitle, CardText } from 'reactstrap';
import {Button, Dropdown, DropdownButton, DropdownToggle} from 'react-bootstrap';
import Header from './header.js';
import Bottom from './bottom.js';
import { Example, handleNumberChange, handleStringChange, IExampleProps } from "@blueprintjs/docs-theme";
import { TimePicker, TimePrecision } from "@blueprintjs/datetime";
import { getDefaultMaxTime, getDefaultMinTime } from "@blueprintjs/datetime/lib/esm/common/timeUnit";

class Order extends React.Component {

  state = { 
  	checked: false,
  	chosenCoffee: null,
  	chosenShop: null,
  }

  setCoffeeSize(event) {
    console.log(event.target.value);
  }

  onClickPay() {
    console.log("Paying coffee");
  }

  onClickMap() {
    console.log("Go to map");
  }

  render() {
    return (
      <div>
      <Header title="ORDER"/>

      <CardGroup style={{"marginTop": "70px",}}>

      <CardTitle style={{"marginTop": "5px",}}>
      Choose a coffee house:
      </CardTitle>
      <Dropdown align="center">
		  <Dropdown.Toggle variant="info" id="dropdown-basic">
		    {this.state.chosenShop != null ? this.state.chosenShop : "Choose coffee place"}
		  </Dropdown.Toggle>

		  <Dropdown.Menu>
		    <Dropdown.Item href="#" onSelect={() => this.setState({ chosenShop: "Starbucks" })}>Starbucks</Dropdown.Item>
		    <Dropdown.Item href="#" onSelect={() => this.setState({ chosenShop: "Sprungli" })}>Sprungli</Dropdown.Item>
		    <Dropdown.Item href="#" onSelect={() => this.setState({ chosenShop: "Espresso House" })}>Espresso House</Dropdown.Item>
		    <Dropdown.Item href="#" onSelect={() => this.setState({ chosenShop: "Cool Coffee Place" })}>Cool Coffee Place</Dropdown.Item>
		  </Dropdown.Menu>
	  </Dropdown>

      <CardTitle style={{"marginTop": "5px",}}>
      Choose your order:
      </CardTitle>
      	<Dropdown align="center">
		  <Dropdown.Toggle variant="info" id="dropdown-basic">{this.state.chosenCoffee != null ? this.state.chosenCoffee : "Choose coffee"}
		  </Dropdown.Toggle>

		  <Dropdown.Menu>
		    <Dropdown.Item href="#" onSelect={() => this.setState({ chosenCoffee: "Black coffee" })}>Black coffee</Dropdown.Item>
		    <Dropdown.Item href="#" onSelect={() => this.setState({ chosenCoffee: "Coffee with milk" })}>Coffee with milk</Dropdown.Item>
		    <Dropdown.Item href="#" onSelect={() => this.setState({ chosenCoffee: "Cappuchino" })}>Cappuchino</Dropdown.Item>
		    <Dropdown.Item href="#" onSelect={() => this.setState({ chosenCoffee: "Caffe Latte" })}>Caffe Latte</Dropdown.Item>
		  </Dropdown.Menu>
		</Dropdown>

      <CardTitle style={{"marginTop": "5px",}}>
      Coffee size:
      </CardTitle>
       <div onChange={this.setCoffeeSize.bind(this)} align="center">
        <input type="radio" value="S" name="coffeeSize"/> S
        <input type="radio" value="M" name="coffeeSize" style={{"marginLeft": "20px",}}/> M
        <input type="radio" value="L" name="coffeeSize" style={{"marginLeft": "20px",}}/> L
      </div>
      <CardTitle>
      Pay and finish your sustainable order:
      </CardTitle>
      <Card>
      <Button color="info" onClick={this.onClickPay.bind(this)}>PAY</Button>{' '}
      </Card>
      </CardGroup>
      <Bottom />
      </div>
    );
  }
}


export default Order;
