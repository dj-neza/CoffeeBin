import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import Bottom from './bottom.js';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Achievement extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	achievements: [
	    		{name: "Coffee Newbie", img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/15/16/china-coffee-cup.jpg?w968h681"},
	    		{name: "Coffee Lover", img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/15/16/china-coffee-cup.jpg?w968h681"},
	    		{name: "Coffee Giver", img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/15/16/china-coffee-cup.jpg?w968h681"},
	    		{name: "Coffee Traveller", img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/15/16/china-coffee-cup.jpg?w968h681"},
	    		{name: "Early Bird", img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/15/16/china-coffee-cup.jpg?w968h681"}
	    	],
	    	score: 512, 
	    	friendsScores: [
	    		{name: "Ana", score: 278}, 
	    		{name: "Greg", score: 113}, 
	    		{name: "Peter", score: 844}, 
	    	]
	    }
	}

	scoreboards() {
		let me = {name: "ME", score: this.state.score};
		let friends = this.state.friendsScores;
		friends.push(me);
		friends.sort(function(a, b){return b.score-a.score});
		return friends;
	}

	render() {

		const allScores = () => {
			let list = [];

		}

		let achievementList = this.state.achievements.map((ach) => (
            <Achieve imgSrc={ach.img} name={ach.name} key={ach.name} />
        ));
        let placementList = this.scoreboards().map((score1, index) => (
            <Score score={score1.score} name={score1.name} placement={index+1} key={index+1}/>
        ));

	    return (
	    	<React.Fragment>
		    	<Header title="Achievements" />
		    	<Container style={{"marginTop": "70px",}}>
		    		<Row>
		    			{achievementList}
		    		</Row>
		    		<h4 style={{"marginTop": "5px",}}>Leaderboard</h4>
		    		<Row>
		    			{placementList}
		    		</Row>
		    	</Container>
		    	<Bottom />
		    </React.Fragment>
	    );
	}
}

class Score extends React.Component {
	render() {

	    return (
	    	<React.Fragment>
	    		<Col xs={2} >{this.props.placement}</Col>
	    		<Col xs={7} >{this.props.name}</Col>
	    		<Col xs={3} >{this.props.score}</Col>
		    </React.Fragment>
	    );
	}
}

class Achieve extends React.Component {
	render() {

	    return (
	    	<React.Fragment>
	    		<Col xs={4} className="media_box" >
                    <div className="box">
                        <div className="content">
                            <img
                                src={this.props.imgSrc}
                                alt={this.props.imgSrc}
                                width="75"
                                height="75"
                                className="img img-responsive full-width media-object"
                            />
                        </div>
                        <div className="caption" align="center">
                            <h5 className=""style={{"fontSize": "11px"}}>{this.props.name}</h5>
                        </div>
                    </div>
                </Col>
		    </React.Fragment>
	    );
	}
}

export default Achievement;
