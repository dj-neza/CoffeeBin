import React from 'react';
import {Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import Bottom from './bottom.js';
import img1 from './img/cup.png';

class Create extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

      return (
      	<React.Fragment>
          <Header title="CreateCup" />
          <div style={{marginTop:"70px"}}>
              <div class="col-centered">
                <h3  style={{marginLeft:"2%"}}>Create your own REUSABLE CUP!</h3>
                <div style={{marginLeft:"7%"}}>
                <img src={img1} />
                </div>
                <h4  style={{marginLeft:"5%"}}>And get a special reward...</h4>
                
                <br/>
                <Button  style={{marginLeft:"10%"}} color="info" >Learn more.</Button>
                <Bottom  />
              </div>
          </div>
        </React.Fragment>

      );
    }
}

export default Create;