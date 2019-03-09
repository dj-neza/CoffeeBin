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

class Cup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	count: 49,
    }
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
	      <Bottom />
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
