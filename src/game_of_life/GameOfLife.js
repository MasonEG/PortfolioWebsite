import React, { Component } from "react";
import {Box, Button, Text } from "grommet";
import Grid from "./Grid";
import ContentBox from "../ContentBox";
import GithubLink from "../GithubLink";

class GameOfLife extends Component {

	DIMENSION = 38;

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
		for(let i = 0; i < this.DIMENSION; i++) {
			let row = []
			for(let j = 0; j < this.DIMENSION; j++) {
				row.push(false);
			}
			ret.push(row);
		}
		return ret;
	}

	countNeighbors = (i, j) => {
		let count = 0;
		for(let q = (i == 0) ? 0 : i - 1; (q <= i + 1) && (q < this.DIMENSION); q++) { 
			for(let p = (j == 0) ? 0 : j - 1; (p <= j + 1) && (p < this.DIMENSION); p++) {
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
		for(let i = 0; i < this.DIMENSION; i++) { //calculate the new version of vals
			for(let j = 0; j < this.DIMENSION; j++) {
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
		let anchor = 15; //this is the i & j value the preset will be centered on
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
				<Box
				align="center"
				fill={true}
				background="dark-2"
				>
					<Box
					align="center"
					fill="vertical"
					gap="small"
					width="80%"
					overflow={{"vertical": "scroll"}}
					>
						<Box
						background="dark-2"
						overflow="hidden"
						height="750px"
						flex={false}
						>
							<Grid vals={this.state.vals} handleClick={this.handleClick} />
						</Box>
						<Box
						flex={false}
						align="center"
						justify="center"
						direction="row"
						background="dark-2"
						gap="small"
						>
							<Button label="step" margin={{'vertical': 'small'}} onClick={this.step} />
							<Button label="load preset" margin={{'vertical': 'small'}} onClick={this.loadPreset} />
							
						</Box>
						<ContentBox flex={false}>{/* TODO: add GOL to github! */}
							<Text margin="small">
								This is an implementation of John Conway's game of life
								using styled React components! Each square on the grid above represents
								a "creature" where its color represents whether its alive (yellow) 
								or dead (dark blue). You can click on any creature to toggle it between
								alive and dead. Each time you click the step button an iteration of time
								is run and the alive creatures in the next state are decided. The rules for
								deciding if a creature is alive or dead in the next state are simple:
								If a creature is dead and has 3 living neighbors, then it's switched to alive. 
								If a creature is alive and has 2 or 3 living neighbors, then it stays alive. 
								If neither of these 2 conditions are met then the creature dies.
							</Text>
							<GithubLink link="www.google.com" />
						</ContentBox>
					</Box>
				</Box>
		);
	}
}

export default GameOfLife

