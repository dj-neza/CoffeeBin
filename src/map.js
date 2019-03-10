import React from 'react';
import {Map, InfoWindow, Marker,GoogleApiWrapper} from 'google-maps-react';
import Header from './header.js';
import Bottom from './bottom.js';
import Data from './Data'
import io from 'socket.io-client';

import img1 from './0.png';
import img2 from './1.png';
import img3 from './2.png';
import img6 from './5.png';

const style = {
  width: '100%',
  height: '100%',
  position: 'absolute'
}

class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.markers = [];
		this.state = {
			markers2: []
		};
		
		
		window.data = new Data();
	}
	
	componentDidMount() {
		
		const {google} = this.props;
		
		fetch("https://data.sbb.ch/api/records/1.0/search/?dataset=nebenbetriebe&q=cafe+or+coop+to+go+or+starbucks+or+backerei&rows=100&facet=stationsbezeichnung&facet=nebenbetrieb")
			.then(res => res.json())
			.then(
				(result) => {
					this.coffeeshops = result.records;
					
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
		
	}
	
  render() {
	
	  const {google} = this.props;
	
	  let positions = window.data.bins;
	
	  for (let p in positions) {
		
		  let lat = positions[p].lat;
		  let lng = positions[p].long;
		  let title = positions[p].id;
		  let filled = positions[p].filled;
		
		  let img;
		  if (filled <= 10) {
			  img = img1;
		  } else if (filled <= 30) {
			  img = img2;
		  } else {
			  img = img3;
		  }
		
		  this.markers.push(
			  <Marker
				  title={`${title}`}
				  key={`${title}+${p}`}
				  name={title}
				  position={{lat: lat, lng: lng}}
				  icon={{
					  url: img,
					  anchor: new google.maps.Point(20,20),
					  scaledSize: new google.maps.Size(40,40) }}/>)
		
		
		  let shops = this.coffeeshops;
		
		  //console.log(shops);
		
		  for (let p in shops) {
		  	
			
			  if (!shops[p].fields.geopos || !shops[p].fields.nebenbetrieb) {
				  continue;
			  }
			
			  let lat = shops[p].fields.geopos[0];
			  let lng = shops[p].fields.geopos[1];
			  let title = shops[p].fields.nebenbetrieb;
			
			  this.state.markers2.push(
				  <Marker
					  title={title}
					  key={`${title}+${p}`}
					  name={title}
					  position={{lat: lat, lng: lng}}
					  icon={{
						  url: img6,
						  anchor: new google.maps.Point(20,20),
						  scaledSize: new google.maps.Size(40,40) }}/>)
			  //console.log(this.state.markers2);
		  }
	  }
		
    return (
    	<React.Fragment>
    	  <Header title="MAP" />
	      <Map google={this.props.google} 
	      style={style}
	      initialCenter={{
			  lat: 47.36667,
			  lng: 8.55
	          }}
			   className={'map'}
			   zoom={12}
	          onClick={this.onMapClicked}
	          >
		
			  {this.markers}
			  {this.state.markers2}
	 
	        
	      </Map>
	      <Bottom />
	    </React.Fragment>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAs2a5OtFQXFLLmF-8vIm4tm4hZ5bd6JBw")
})(MapContainer)