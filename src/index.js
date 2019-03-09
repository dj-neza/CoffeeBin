import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Child extends React.Component {

  render() {
    return (
      <div>
       {this.props.randomProp}
      </div>
    );
  }
}

class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      randomState: "hahahaha",
    }
  }

  settingState(random) {
    this.setState({
      randomState: random, 
    })
  }

  render() {

    // you can add some random stuff 

    return (
      <div className="">
        <Child randomProp={this.state.randomState} />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);

