import React from 'react';
import {Map, InfoWindow, Marker,GoogleApiWrapper} from 'google-maps-react';
import Header from './header.js';
import Bottom from './bottom.js';

const style = {
  width: '100%',
  height: '100%',
  position: 'absolute'
}

export class MapContainer extends React.Component {
  render() {
    return (
    	<React.Fragment>
    	  <Header title="MAP" />
	      <Map google={this.props.google} 
	      style={style}
	      initialCenter={{
	            lat: 47.422054, 
	            lng:9.3680597
	          }}
	          zoom={15}
	          onClick={this.onMapClicked}
	          >
	 
	        <Marker onClick={this.onMarkerClick}
	                name={'Current location'} />
	 
	        
	      </Map>
	      <Bottom />
	    </React.Fragment>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAs2a5OtFQXFLLmF-8vIm4tm4hZ5bd6JBw")
})(MapContainer)


/*function CoffeBinMap(props) {

const CoffeBinMap = withScriptjs(withGoogleMap((props) =>{

  const markers = this.props.coffeebins.map( cb => <CoffeBinMarker
                    key={cb.uid}
                    coffebin={cb}
                    location={{lat: cb.position.lat, lng: cb.position.lon}}
                  />);
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  42.3601, lng: -71.0589 } }
        >
        {markers}
      </GoogleMap>
    );
  }
}


export default class MapContainer extends React.Component {

  render() {
    return (
      <CoffeBinMap
        coffeebins={this.props.coffeebins}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAs2a5OtFQXFLLmF-8vIm4tm4hZ5bd6JBw&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}*/


/*

class CoffeBinMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          //icon={StethoscopeIcon}
        >
        </Marker>
    );
  }
}

const CoffeBinMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.locations.map((location, i)) => {
      key={ i }
      onClick = { this.onMarkerClick }
      title = { location.locName }
      position = { JSON.parse(location.position) }
      animation = { this.props.google.maps.Animation.DROP }
      name = { location.locName } />
    }}
                  />);
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  42.3601, lng: -71.0589 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))


const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute'
};

export default class MapContainer extends Component {

  state = {
    coffebins: [
      {
        "locName": "cb1",
        "position": '{"lat":47.422054, "lng":9.3680597}'
      },
      {
        "locName": "cb2",
        "position": '{"lat":47.4217963, "lng":9.3664343}'
      }
      {
        "locName": "cb3",
        "position": '{"lat":47.4225294, "lng":9.3688697}'
      }
      {
        "locName": "cb4",
        "position": '{"lat":47.4225694, "lng":9.3708331}'
      }
      {
        "locName": "cb5",
        "position": '{"lat":47.4199072, "lng":9.3658186}'
      }
      {
        "locName": "cb6",
        "position": '{"lat":47.4182832, "lng":9.3571527}'
      }
    ],
    coffeshops: [
      {
        "locName": "cf1",
        "position": '{"lat":47.4178172, "lng":9.357194}'
      }
      {
        "locName": "cf2",
        "position": '{"lat":47.4178172, "lng":9.357194}'
      }
      {
        "locName": "cf3",
        "position": '{"lat":47.4289686, "lng":9.355116}'
      }
      {
        "locName": "cf4",
        "position": '{"lat":47.4229109, "lng":9.3668007}'
      }
    ]
  }

  render() {
    return (
      <CoffeBinMap
        locations={this.state.locations}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAs2a5OtFQXFLLmF-8vIm4tm4hZ5bd6JBw=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} 
        google={this.props.google}
        zoom={14}
        style={mapStyles}
      />}
    );
  }
}*/