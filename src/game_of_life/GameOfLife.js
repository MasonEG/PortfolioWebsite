import React, { Component } from "react";
import './square.css';

class Square extends Component { //renders a square given a prop value
	
	render() {
		let className = "Dead";
		if(this.props.isAlive) {
			className = "Alive";
		}
		return (
			<button onClick={this.props.handleClick} className={className}></button>
		);
	}
}

class Grid extends Component { //returns all the squares in a neat component

	genSquares() {
		let squares = []
		for(let i = 0; i < 50; i++) {
			let row = []
			for(let j = 0; j < 50; j++) {
				row.push(<Square key={i + ', ' + j} isAlive={this.props.vals[i][j]} handleClick={() => this.props.handleClick(i, j)} />)
			}
			squares.push(row);
		}

		return squares.map(row => <li key={Math.random()}>{row}</li>);
	}

	render() {
		return (
			<>
			<ul>
				{this.genSquares()}
			</ul>
			</>
		);
	}
}

class GameOfLife extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vals: [], //chose to fill this with booleans instead of JSON because other properties necessary can be determined in child components
		}
		this.state.vals = this.genVals();
	}

	handleClick = (i, j) => { //update the state, can't setState individual values without turning the arrays into objects which would force me to write a lot more code
		let newVals = this.state.vals.map(row => {return row.slice()});
		newVals[i][j] = !this.state.vals[i][j];
		this.setState({vals: newVals});
	}

	genVals = () => {
		let ret = [];
		for(let i = 0; i < 50; i++) {
			let row = []
			for(let j = 0; j < 50; j++) {
				row.push(false);
			}
			ret.push(row);
		}
		return ret;
	}

	countNeighbors = (i, j) => {
		let count = 0;
		for(let q = (i == 0) ? 0 : i - 1; (q <= i + 1) && (q < 50); q++) { 
			for(let p = (j == 0) ? 0 : j - 1; (p <= j + 1) && (p < 50); p++) {
				//console.log('count: (' + q + ', ' + p + ') ' + (this.state.vals[q][p] && (q != i || p != j))); //use this for debug
				if(this.state.vals[q][p] && (q != i || p != j)) {
					count++;
				}
			}
		}
		return count;
	}

	step = () => { //if you can find an algorithm for this faster than n^2 lmk
		let newVals = this.state.vals.map(row => {return row.slice()});
		for(let i = 0; i < 50; i++) { //calculate the new version of vals
			for(let j = 0; j < 50; j++) {
				//console.log('step: measuring (' + i + ', ' + j + ')'); //use this for debug
				let count = this.countNeighbors(i, j); //count the creature's neighbors
				if(count > 0){
					//console.log('step: counted ' + count); //use this for debug
				}
				if(count == 3 || (count == 2 && this.state.vals[i][j])) { //creature should be alive
					newVals[i][j] = true;
				}
				else { //creature should be dead
					newVals[i][j] = false;
				}
			}
		}
		this.setState({vals: newVals}); //update the vals to the new set of vals
	}

	loadPreset = () => {
		let anchor = 22; //this is the i & j value the preset will be centered on
		let preset = [
			{i: anchor, j: anchor},
			{i: anchor + 1, j: anchor},
			{i: anchor + 2, j: anchor},
			{i: anchor + 3, j: anchor},
			{i: anchor + 4, j: anchor},
			{i: anchor, j: anchor + 2},
			{i: anchor + 4, j: anchor + 2},
			{i: anchor, j: anchor + 4},
			{i: anchor + 1, j: anchor + 4},
			{i: anchor + 2, j: anchor + 4},
			{i: anchor + 3, j: anchor + 4},
			{i: anchor + 4, j: anchor + 4},
		];
		let newVals = this.state.vals.map(row => {return row.slice()});
		preset.map(coord => newVals[coord.i][coord.j] = true);
		this.setState({vals: newVals});
	}

	render() {
		return (
			<>
				<Grid vals={this.state.vals} handleClick={this.handleClick} /><br />
				<button onClick={this.step}>Step</button>
				<button onClick={this.loadPreset}>Load Preset</button><br />
				<p>
					John Conway's Game of Life implemented in React.js. <a href="https://wdmegil.wd.its.iastate.edu/GameOfLifeAttempt2.php">
						Check out my previous implementation for a good explanation.
					</a>
				</p>
			</>
		);
	}
}

export default GameOfLife

