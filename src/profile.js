import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Cup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	particle_count: 20,
    	x: new Float32Array(this.state.particle_count), // x location
	    y: new Float32Array(this.state.particle_count), // y location
	    oldX: new Float32Array(this.state.particle_count), // previous x location
	    oldY: new Float32Array(this.state.particle_count), // previous y location
	    vx: new Float32Array(this.state.particle_count), // horizontal velocity
	    vy: new Float32Array(this.state.particle_count), // vertical velocity
	    p: new Float32Array(this.state.particle_count), // pressure
	    pNear: new Float32Array(this.state.particle_count), // pressure near
	    g: new Float32Array(this.state.particle_count), // 'nearness' to neighbour
	    mesh: [] // Three.js mesh for rendering
    }
  }

  moveParticles() {
  	const dt = 0.0166;

  	for (let i = 0; i < this.state.particle_count; i++) {

	    // Update old position
	    state.oldX[i] = this.state.x[i];
	    state.oldY[i] = this.state.y[i];
	    const force = GRAVITY;
	    state.vx[i] += force[0] * dt;
	    state.vy[i] += force[1] * dt;

	    // Update positions
	    state.x[i] += this.state.vx[i] * dt;
	    state.y[i] += this.state.vy[i] * dt;

	    // Update hashmap
	    const gridX = (state.x[i] / canvasRect.w + 0.5) * GRID_CELLS;
	    const gridY = (state.y[i] / canvasRect.h + 0.5) * GRID_CELLS;
	    hashMap.add(gridX, gridY, i);

	} 

	const getNeighboursWithGradients = i => {
  
	    const gridX = (state.x[i] / canvasRect.w + 0.5) * GRID_CELLS;
	    const gridY = (state.y[i] / canvasRect.h + 0.5) * GRID_CELLS;
	    const radius = (INTERACTION_RADIUS / canvasRect.w) * GRID_CELLS;

	    const results = hashMap.query(gridX, gridY, radius);
	    const neighbours = [];

	    for (let k = 0; k < results.length; k++) {

	        const n = results[k];
	        if (i === n) continue; // Skip itself

	        const g = gradient(i, n);
	        if (g === 0) continue

	        state.g[n] = g; // Store the gradient
	        neighbours.push(n); // Push the neighbour to neighbours

	    }

	    return neighbours;

	};

	for (let i = 0; i < this.state.particle_count; i++) {

	    const neighbours = getNeighboursWithGradients(i);
	    updateDensities(i, neighbours);

	    // perform double density relaxation
	    relax(i, neighbours, dt);

	} 
  }

  render() {

    return (
      <div className="">
      </div>
    );
  }
}

class Bean extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    }
	  }

	  render() {

	    return (
	      <div className="">
	      </div>
	    );
	  }
}
