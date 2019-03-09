import React from 'react';
import ReactDOM from 'react-dom';
import Cup from './profile.js';
import './index.css';
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Order from order.js;
import Achievement from achievements.js;
import Create from create.js;

ReactDOM.render(
  <Container fluid={"true"}>
        <Header title={this.state.title}/>

        <Route exact path="/" component={Cup} />
        <Route
            path="/order"
            render={() => <Order />}
        />
        <Route
            path="/achievements"
            render={() => <Achievement />}
        />
        <Route
            path="/create"
            render={() => <Create />}
        />
    </Container>
  document.getElementById('root')
);