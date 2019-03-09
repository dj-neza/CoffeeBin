import React from 'react';
import ReactDOM from 'react-dom';
import Cup from './profile.js';
import './index.css';
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Order from './order.js';
import Achievement from './achievements.js';
import Create from './ownCup.js';
import Header from './header.js';
import Bottom from './bottom.js';
import MapContainer from './map.js';

ReactDOM.render(
  <BrowserRouter>
    <Container fluid={"true"}>
      <Header title="MY SAVER CUP" />

      <Route exact path="/" component={Cup} />
      <Route
          path="/map"
          render={() => <MapContainer />}
      />
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
  </BrowserRouter>,
  document.getElementById('root')
);