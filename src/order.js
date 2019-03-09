import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimePicker from 'react-time-picker';
import { CardGroup, Card, CardTitle, CardText } from 'reactstrap';
import {Button, Dropdown, DropdownButton, DropdownToggle} from 'react-bootstrap';

class TimePickerComponent extends React.Component {

  state = {
    time: new Date()
  }

  componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date()
        });
      }

  onChange = time => this.setState({ time })

  render() {
    return (
        <TimePicker
          onChange={this.onChange}
          value={this.state.time} format="HH:mm"
          minTime={this.state.time}
          name="Time of coffee pick up"
        />
    );
  }
}

export default class Order extends React.Component {

  state = { checked: false }

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
      <CardGroup>

      <CardTitle>
      Choose a coffee house:
      </CardTitle>
      <Card>
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Choose coffee house
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Coffee house 1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Coffee house 2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Coffee house 3</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Coffee house 4</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </Card>

      <CardTitle>
      Choose your order:
      </CardTitle>
      <Card>
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">Choose coffee
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Black coffee</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Coffee with milk</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Cappuchino</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Coffee Latte</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </Card>

      <CardTitle>
      Coffee size:
      </CardTitle>

      <Card>
       <div onChange={this.setCoffeeSize.bind(this)}>
        <input type="radio" value="S" name="coffeeSize"/> S
        <input type="radio" value="M" name="coffeeSize"/> M
          <input type="radio" value="L" name="coffeeSize"/> L
      </div>
        </Card>

      <CardTitle>
      Pick the time of coffee pick up:
      </CardTitle>
      <Card>
      <TimePickerComponent />
      </Card>
      <CardTitle>
      Pay and finish your sustainable order:
      </CardTitle>
      <Card>
      <Button color="info" onClick={this.onClickPay.bind(this)}>PAY</Button>{' '}
      </Card>
      <CardTitle>
      Check out coffee house and coffee bins locations
      </CardTitle>
      <Card>
      <Button color="info" onClick={this.onClickMap.bind(this)}>GO TO COFFEE MAP</Button>{' '}
      </Card>
      </CardGroup>
      </div>
    );
  }
}

