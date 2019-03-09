import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import Bottom from './bottom.js';

class Achievement extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    }
	}

	render() {

	    return (
	    	<React.Fragment>
		    	<Header title="AchievementsAndPeople" />
		    	<Bottom />
		    </React.Fragment>
	    );
	}
}

export default Achievement;
