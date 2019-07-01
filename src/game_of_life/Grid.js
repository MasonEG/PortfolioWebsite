import React, { Component } from "react";
import Square from "./Square";

class Grid extends Component { //returns all the squares in a neat component
    DIMENSION = this.props.vals.length;
	genSquares() {
		let squares = []
		for(let i = 0; i < this.DIMENSION; i++) {
			let row = []
			for(let j = 0; j < this.DIMENSION; j++) {
				row.push(<Square key={i + ', ' + j} isAlive={this.props.vals[i][j]} handleClick={() => this.props.handleClick(i, j)} />)
			}
			squares.push(row);
		}

		return squares.map(row => <li key={Math.random()}>{row}</li>);
	}

	render() {
		return (
			<ul>
				{this.genSquares()}
			</ul>
		);
	}
}

export default Grid;