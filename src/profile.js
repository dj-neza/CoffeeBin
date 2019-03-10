import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import bean1 from './img/bean1.png';
import bean2 from './img/bean2.png';
import bean3 from './img/bean3.png';
import bean4 from './img/bean4.png';
import bean5 from './img/bean5.png';
import bean6 from './img/bean6.png';
import bean7 from './img/bean7.png';
import bean8 from './img/bean8.png';
import cup from './img/cup.png';
import Header from './header.js';
import Bottom from './bottom.js';
import io from 'socket.io-client';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heatmap from './heatmap.js';
import Chart from './chart.js';
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

class Cup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	count: 49,
    	dropOffNotification: false,
    }
  }

  componentDidMount() {
  	// connect to webSocket API
	const socket = io('https://coffeebin.appspot.com');
	window.socketConnection = socket;
	socket.on('cupDropoffReceipt', data => { console.log("LEL"); this.setState({dropOffNotification: true }); console.log(this.state.dropOffNotification) });
	//socket.on('cup dropoff', timestamp => { console.log("LEL"); this.sendNotification(null, timestamp)})
  }

  notify() {
  	toast("You have succesfully dropped off your cup.");
  	this.setState({dropOffNotification:false});
  	console.log(this.state.dropOffNotification);
  }

  notifyBestFriend() {
  	toast("Your friend is close to you. Go grab a coffee with her!");
  }
 

  render() {

  	let beanList = [];
  	let left = 55;
  	let top = 247;
  	let row = 0;
  	for (let i = 0; i < this.state.count; i++) { 
	  beanList.push(<Bean key={i} topPx={top} leftPx={left} />);
	  left += 25; 
	  if (left > 158+(2*row)) {
	  	left = Math.floor(Math.random() * (3+(row*2))) + 55-(row*2);
	  	top -= 20;
	  	row++;
	  	if (top < 75) {
	  		//full cup
	  		break;
	  	}
	  }
	}

    return (
	  <React.Fragment>
		  <Header title="MY SAVER CUP" />
	      <div className="movie-cover">
	      	<img src={cup} alt="cup" />
	      	{beanList}
	      </div>
			<p>5 beans until FREE COFFEE</p>

	      <div style={{ marginTop:"90%"}}>
	      <ColoredLine color="lightgrey" />
	      <p> Stats about ur sustainability</p>
	      </div>
	      <ColoredLine color="lightgrey" />
	      <div style={{marginLeft:"10%"}}>
	      <p >Number of reusable cups used per day:</p> 
	      <Heatmap />
	      
	      <p style={{marginTop:"7%"}}> Your sustainability index: </p>
	      </div>
	      <Chart />
	      <Bottom />
	      { this.state.dropOffNotification ? this.notify() : null }
	      <ToastContainer />
	      
      </React.Fragment>

    );
  }
}

class Bean extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    }
	}

	randomBean() {
		const beans = [bean1, bean2, bean3, bean4, bean5, bean6, bean7, bean8];
		return beans[Math.floor(Math.random() * 8)];  
	}

	render() {

	    return (
	      <img src={this.randomBean()} alt="bean" width="40" height="32" style={{"top" : this.props.topPx, "left" : this.props.leftPx}} />
	    );
	}
}

export default Cup;
